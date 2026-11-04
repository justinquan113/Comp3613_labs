const path = require('path');
const express = require('express');

// create an express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static resources
app.use('/static', express.static(path.join(__dirname,'public')));

// set up route handling
const router = require('./scripts/stock-router.js');
router.handleAllStocks(app);
router.handleSingleSymbol(app);
router.handleNameSearch(app);
router.handleCurlTest(app);
            

// Use express to listen to port
let port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running at port= " + port);
    console.log("Static File Test 1: http://localhost:8080/static/tester.html");
    console.log("Static File Test 2: http://localhost:8080/static/uploader.html");
    console.log("API Test 1: http://localhost:8080/stock/");
    console.log("API Test 2: http://localhost:8080/stock/amzn");
    console.log("API Test 3: http://localhost:8080/stock/name/alph");
});

