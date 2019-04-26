class Renderer{
    constructor(){

    }

    renderBoard(matrix){
        let source = $('#matrix-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({matrix})
        $('.board-container').empty().append(newHTML)
    }
}

Handlebars.registerHelper('inc', function(number) {
    return number + 1;
});

// {matrix:[
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
// ]}