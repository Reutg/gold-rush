class Renderer{
    constructor(){

    }

    renderBoard(matrix){
        let source = $('#matrix-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({matrix})
        $('.board-container').empty().append(newHTML)
    }

    renderScores(player){
        let score = 0
        $(`${player} > span`).append(score+10)
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

})
