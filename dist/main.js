const renderer = new Renderer()
let board

const loadBoard = function () {
    let rows = $(".rows").val()
    let cols = $(".cols").val()
    board = new GoldRush(rows, cols)
    renderer.renderBoard(board.matrix)
    updateScores()
}

const updateScores = function () {
    renderer.renderScores(board.score)
}

    $(document).keypress(function (event) {
        //player1 - up
        if (event.which == 119) {
        board.movePlayer(1,"up")
        }
        //player1 - down
        if (event.which == 115) {
            board.movePlayer(1,"down")
        }
        //player1 - right
        if (event.which == 100) {
            board.movePlayer(1,"right")
        }
        //player1 - left
        if (event.which == 97) {
            board.movePlayer(1,"left")
        }
        
        //player2 - up I
        if (event.which == 105) {
            board.movePlayer(2,"up")
            }
        //player2 - down K
        if (event.which == 107) {
            board.movePlayer(2,"down")
        }
        //player2 - right L
        if (event.which == 108) {
            board.movePlayer(2,"right")
        }
        //player2 - left J
        if (event.which == 106) {
            board.movePlayer(2,"left")
        }
        
        if(board){
            renderer.renderBoard(board.matrix)
            updateScores()
        }
})

