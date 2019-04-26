const renderer = new Renderer()
const goldRush = new GoldRush(5,5)

const loadBoard = function(){
    renderer.renderBoard(goldRush.matrix)
}

loadBoard()