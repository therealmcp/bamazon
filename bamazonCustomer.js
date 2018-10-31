var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    hose: "localhost",
    port: 3306,
    user: "root",
    password: "KraMerica123",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

// Prompt user with 2 messages
function start() {
    connection.query("SELECT * FROM products", function(err, result) {
        if (err) {
            console.log(err);
        } else {
            for (var i = 0; i < result.length; i++) {
                console.log("|" + result[i].item_id + "|" + result[i].product_name + "|" + result[i].department_name + "|" + JSON.stringify(result[i].price) + "|" + result[i].stock_quantity + "|");
            }
            orderProduct();
            // console.log("RESULT IS: ", result);
        }
    });
}

function queryProduct(id) {
    var promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        connection.query(`SELECT * FROM products WHERE item_id = ${id}`, function(err, product) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // console.log("PRODUCT: ", product);
                resolve(product[0]);
            }
        });
      });
      return promise;
}

function orderProduct() {
    inquirer
        // Ask them the ID of the product they'd like to buy
        .prompt({
            name: "specifyProduct",
            type: "input",
            message: "Input the number of the item you would like to purchase."
        }).then(
            function (promptResult) {
                queryProduct(promptResult.specifyProduct).then(
                    function (product) {
                        var currentQ = product.stock_quantity;
                        console.log("\n The item you've selected has [" + currentQ + "] units in stock.");
                        quantityPrompt(promptResult.specifyProduct);
                    });
            }
        )
}

// Ask them how many units they would like to buy
function quantityPrompt(itemId) {
    inquirer
        .prompt({
            name: "specifyQuantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }).then(
            // Check if store has enough stock for order
            function (promptResult) {
                queryProduct(itemId).then(
                    function (product) {
                        if (promptResult.specifyQuantity > product.stock_quantity) {
                            console.log("Your demand is greater than our supply! Please demand less.");
                            quantityPrompt(itemId);
                        } else {
                            var qLeft = product.stock_quantity - promptResult.specifyQuantity;
                            var total = promptResult.specifyQuantity * product.price;
                            connection.query(`UPDATE products SET stock_quantity = ${qLeft} WHERE item_id = ${itemId}`);
                            console.log("The total cost of your purchase is $" + total);
                            start();
                        }
                    });
                // console.log(itemId);
                }
                // quantityCheck(itemId, quantity.specifyQuantity);
            
        )
}

// Create 10 products

// If enough in stock, update quantity and reflect new q and show customer total cost of their purchase