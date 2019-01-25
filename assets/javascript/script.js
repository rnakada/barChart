// Global Variables

var firstSymbol = $(".firstColumn")
var secondSymbol = $(".secondColumn")
var thirdSymbol = $(".thirdColumn")
var fourthSymbol = $(".fourthColumn")

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
        "symbols": "PCG"
    },
    success: function(data) {
        var html = "";
        for (var i in data.results) {
            html += "Symbol: " + data.results[i]["symbol"] + "<br />";
            html += "Last: " + data.results[i]["lastPrice"] + "<br />";
            html += "Change: " + data.results[i]["netChange"] + "<br />";
            html += "Percent Change: " + data.results[i]["percentChange"] + "<br />";
            html += "Volume: " + data.results[i]["volume"] + "<br />";
            html += "Trade Time: " + data.results[i]["tradeTimestamp"] + "<br />";
        }
        $(firstSymbol).html(html);
    },
    error: function() {
        console.log(" Something went wrong!");
    }
});
}

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
            "symbols": "KZIA"
        },
        success: function(data) {
            var html = "";
            for (var i in data.results) {
                html += "Symbol: " + data.results[i]["symbol"] + "<br />";
                html += "Last: " + data.results[i]["lastPrice"] + "<br />";
                html += "Change: " + data.results[i]["netChange"] + "<br />";
                html += "Percent Change: " + data.results[i]["percentChange"] + "<br />";
                html += "Volume: " + data.results[i]["volume"] + "<br />";
                html += "Trade Time: " + data.results[i]["tradeTimestamp"] + "<br />";
            }
            $(secondSymbol).html(html);
        },
        error: function() {
            console.log(" Something went wrong!");
        }
    });
    }
    
    // $(document).on("click", firstSymbol, firstQuote);
    $(secondSymbol).html(secondQuote);