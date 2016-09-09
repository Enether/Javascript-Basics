/*
 You are given a HTML table with 3 columns: product, price and votes.
 Write a JavaScript function to sort the table rows by price (as number, increasingly)
 When several rows hold equal prices, use the product name as second sort criteria (sort by product name alphabetically).
* */
// all our code is in this function due to the way the automated testing over at judge.softuni.bg works
function solve(args) {
    var regexPattern = /<tr><(th|td)>(.*?)<(\/th|\/td)><(th|td)>(.*?)<(\/th|\/td)><(th|td)>(.*?)<(\/th|\/td)><\/tr>/;
    var products = readProducts(args);


// custom sort function
    cmp = function(a, b) {
        if (a > b) return +1;
        if (a < b) return -1;
        return 0;
    };

    products.sort(function(a, b) {
        // if their price is equal, it returns 0 and goes on to compare by name
        return cmp(a.price,b.price) || cmp(a.name,b.name);
    });

    printResults(products);

    function readProducts(productsInput) {
        var products = [];

        // go through each line in the input and match it with our regex, then add the products as objects into an array
        for(var index in productsInput){
            var input = productsInput[index];
            var match = input.match(regexPattern);

            if(match){
                var line = match[0];
                var name = match[2];
                var price = parseFloat(match[5]);

                if(!isNaN(price)){
                    var product = {name: name, price: price, line:line};
                    products.push(product);
                }
            }
        }

        return products;
    }

    function printResults(products) {
        console.log('<table>');
        console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');

        for(var index in products){
            var product = products[index];
            console.log(product.line);
        }

        console.log('</table>');
    }

}
