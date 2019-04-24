class Renderer{
    constructor(){

    }

    renderBoard(matrix){
        let source = $('#metrix-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({matrix})
        $('#metrix-container').empty().append(newHTML)
    }
}

