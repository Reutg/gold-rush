class Renderer{
    constructor(){

    }

    renderBoard(matrix){
        let source = $('#matrix-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({matrix})
        $('.board-container').empty().append(newHTML)
    }

    renderScores(scores){
        let source = $('#results-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({player1: scores[0], player2: scores[1]})
        $('.results').empty().append(newHTML)
    }


}


//grid index settings
Handlebars.registerHelper('inc', function(number) {
    return number + 1;
})

Handlebars.registerHelper('player1', function(value) {
    return value == 1;
})

Handlebars.registerHelper('player2', function(value) {
    return value == 2;
})

Handlebars.registerHelper('coin', function(value) {
    return value == "c";
})

//render coins and players
Handlebars.registerHelper('box', function(value) {
    if (value == "c") {
        return new Handlebars.SafeString("<span class='coin'></span>")
    }
    if (value == 1) {
        return new Handlebars.SafeString("<span class='ball-token1'></span>")
    }
    if (value == 2) {
        return new Handlebars.SafeString("<span class='ball-token2'></span>")
    }

    if (value == "b") {
        return new Handlebars.SafeString("<span class='block'></span>")
    }
})
