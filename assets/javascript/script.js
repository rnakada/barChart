// Global Variables

var firstSymbol = $(".firstColumn");
var secondSymbol = $(".secondColumn");
var thirdSymbol = $(".thirdColumn");
var fourthSymbol = $(".fourthColumn");

var tickerOne = $(".textOne").val("");
var tickerTwo = $(".textTwo").val("");
var tickerThree = $(".textThree").val("");
// 1st quote starting from left of DOM

function firstQuote() {

var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";

$.ajax({
    method: "POST",
    crossDomain: true,
    dataType: "jsonp",
    url: getQuoteURL,
    data: {
        "apikey": apiKey,
        // "symbols": tickerOne.val()
        "symbols": "NFLX"
    },
    success: function(data) {
        var html = "";
        for (var i in data.results) {
            console.log(data);
            html += "Symbol: " + "<strong>" + data.results[i]["symbol"] + "</strong>" + "<br />";
            html += "Name: " + "<strong>" + data.results[i]["name"] + "</strong>" + "<br />";
            html += "Last Price: " + "<strong>" + data.results[i]["lastPrice"] + "</strong>" + "<br />";
            html += "Net Change: " + "<strong>" + data.results[i]["netChange"] + "</strong>" + "<br />";
            html += "Percent Change: " + "<strong>" + data.results[i]["percentChange"] + "</strong>" + "%" + "<br />";
            html += "Open: " + "<strong>" + data.results[i]["open"] + "</strong>" + "<br />";
            html += "High: " + "<strong>" + data.results[i]["high"] + "</strong>" + "<br />";
            html += "Low: " + "<strong>" + data.results[i]["low"] + "</strong>" + "<br />";
            html += "Close: " + "<strong>" + data.results[i]["close"] + "</strong>" + "<br />";
            html += "Volume: " + "<strong>" + data.results[i]["volume"] + "</strong>" + "<br />";
        }
        $(firstSymbol).html(html);
    },
    error: function() {
        console.log(" Something went wrong!");
    }
});
}

// $(".submitOne").on("click", function() {
//     $(firstSymbol).html(firstQuote);
// });

// $(document).on("click", firstSymbol, firstQuote);

$(firstSymbol).html(firstQuote);

// 2nd quote starting from left of DOM

function secondQuote() {

    var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
    var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        dataType: "jsonp",
        url: getQuoteURL,
        data: {
            "apikey": apiKey,
            // "symbols": tickerTwo.val()
            "symbols": "AMZN"
        },
        success: function(data) {
            var html = "";
            for (var i in data.results) {
                html += "Symbol: " + "<strong>" + data.results[i]["symbol"] + "</strong>" + "<br />";
                html += "Name: " + "<strong>" + data.results[i]["name"] + "</strong>" + "<br />";
                html += "Last Price: " + "<strong>" + data.results[i]["lastPrice"] + "</strong>" + "<br />";
                html += "Net Change: " + "<strong>" + data.results[i]["netChange"] + "</strong>" + "<br />";
                html += "Percent Change: " + "<strong>" + data.results[i]["percentChange"] + "</strong>" + "%" + "<br />";
                html += "Open: " + "<strong>" + data.results[i]["open"] + "</strong>" + "<br />";
                html += "High: " + "<strong>" + data.results[i]["high"] + "</strong>" + "<br />";
                html += "Low: " + "<strong>" + data.results[i]["low"] + "</strong>" + "<br />";
                html += "Close: " + "<strong>" + data.results[i]["close"] + "</strong>" + "<br />";
                html += "Volume: " + "<strong>" + data.results[i]["volume"] + "</strong>" + "<br />";
            }
            $(secondSymbol).html(html);
        },
        error: function() {
            console.log(" Something went wrong!");
        }
    });
    }
    
    // $(".submitTwo").on("click", function() {
    //     $(secondSymbol).html(secondQuote);
    // });

    // $(document).on("click", secondSymbol, secondQuote);

    $(secondSymbol).html(secondQuote);

    // 3rd quote starting from left of DOM

function thirdQuote() {

    var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
    var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        dataType: "jsonp",
        url: getQuoteURL,
        data: {
            "apikey": apiKey,
            // "symbols": tickerThree.val()
            "symbols": "AAPL"
        },
        success: function(data) {
            var html = "";
            for (var i in data.results) {
                console.log("third: " + data);
                html += "Symbol: " + "<strong>" + data.results[i]["symbol"] + "</strong>" + "<br />";
                html += "Name: " + "<strong>" + data.results[i]["name"] + "</strong>" + "<br />";
                html += "Last Price: " + "<strong>" + data.results[i]["lastPrice"] + "</strong>" + "<br />";
                html += "Net Change: " + "<strong>" + data.results[i]["netChange"] + "</strong>" + "<br />";
                html += "Percent Change: " + "<strong>" + data.results[i]["percentChange"] + "</strong>" + "%" + "<br />";
                html += "Open: " + "<strong>" + data.results[i]["open"] + "</strong>" + "<br />";
                html += "High: " + "<strong>" + data.results[i]["high"] + "</strong>" + "<br />";
                html += "Low: " + "<strong>" + data.results[i]["low"] + "</strong>" + "<br />";
                html += "Close: " + "<strong>" + data.results[i]["close"] + "</strong>" + "<br />";
                html += "Volume: " + "<strong>" + data.results[i]["volume"] + "</strong>" + "<br />";
            }
            $(thirdSymbol).html(html);
        },
        error: function() {
            console.log(" Something went wrong!");
        }
    });
    }
    
    // $(".submitThree").on("click", function() {
    //     $(thirdSymbol).html(thirdQuote);
    // });

    // $(document).on("click", thirdSymbol, thirdQuote);

    $(thirdSymbol).html(thirdQuote);

        // 4th quote starting from left of DOM

function fourthQuote() {

    var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
    var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        dataType: "jsonp",
        url: getQuoteURL,
        data: {
            "apikey": apiKey,
            // "symbols": tickerThree.val()
            "symbols": "GOOG"
        },
        success: function(data) {
            var html = "";
            for (var i in data.results) {
                console.log("third: " + data);
                html += "Symbol: " + "<strong>" + data.results[i]["symbol"] + "</strong>" + "<br />";
                html += "Name: " + "<strong>" + data.results[i]["name"] + "</strong>" + "<br />";
                html += "Last Price: " + "<strong>" + data.results[i]["lastPrice"] + "</strong>" + "<br />";
                html += "Net Change: " + "<strong>" + data.results[i]["netChange"] + "</strong>" + "<br />";
                html += "Percent Change: " + "<strong>" + data.results[i]["percentChange"] + "</strong>" + "%" + "<br />";
                html += "Open: " + "<strong>" + data.results[i]["open"] + "</strong>" + "<br />";
                html += "High: " + "<strong>" + data.results[i]["high"] + "</strong>" + "<br />";
                html += "Low: " + "<strong>" + data.results[i]["low"] + "</strong>" + "<br />";
                html += "Close: " + "<strong>" + data.results[i]["close"] + "</strong>" + "<br />";
                html += "Volume: " + "<strong>" + data.results[i]["volume"] + "</strong>" + "<br />";
            }
            $(fourthSymbol).html(html);
        },
        error: function() {
            console.log(" Something went wrong!");
        }
    });
    }
    
    // $(".submitFour").on("click", function() {
    //     $(fourthSymbol).html(fourthQuote);
    // });

    // $(document).on("click", fourthSymbol, fourthQuote);

    $(fourthSymbol).html(fourthQuote);