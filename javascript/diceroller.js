$(document).ready(function () { 
    $('#roll').click(function(){
        var diceResults = [];
        var miseTreshold = 10;
        var explodingTen = false;
        var wnd = parseInt($('input[name="wnd"]:checked').val());
        var car = parseInt($('input[name="car"]:checked').val());
        var com = parseInt($('input[name="com"]:checked').val());
        var bon = parseInt($('input[name="bon"]:checked').val());
        if (wnd >= 1) bon++;
        if (wnd >= 3) explodingTen = true;
        for (var i = 0; i < car + com + bon; i++) {
            diceResults.push(rollDice());
        }
        var result = '<p>Résultat: ' + diceResults.toString() + '</p>'
        if (com >= 3) {
            var min = Math.min(...diceResults);
            var index = diceResults.indexOf(min);
            diceResults.splice(index, 1);
            var reroll = rollDice();
            diceResults.push(reroll);
            result += '<p>Relance ' + min + ', devient ' + reroll + '</p>'
            result += '<p>Résultat: ' + diceResults.toString() + '</p>'				
        }
        if (com >= 4) miseTreshold = 15;
        if (com >= 5) explodingTen = true;
        result += "<p>_____________________</p>"
        $('#results').prepend(result)
    });
    
    function rollDice(){
        return Math.floor((Math.random() * 10) + 1);
    }
});