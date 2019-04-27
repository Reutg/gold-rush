class GoldRush extends Matrix {
    constructor(rows, cols) {
        super(rows, cols)
        this.positions = [{ x: 0, y: 0 }, { x: rows - 1, y: cols - 1 }]
        this.matrix[0][0] = 1
        this.matrix[rows - 1][cols - 1] = 2
        this.coinsNum = Math.floor(this.rows * this.cols / 2)
        this.generateCoins(this.coinsNum)
        this.generateBlocks(Math.floor(this.rows * this.cols / 4))
        this.score = [0, 0]
    }
    // x- row
    // y- col

    movePlayer(playerNum, direction) {
        const player = { ...this.positions[playerNum - 1] }

        if (direction == "left" && player.y != 0) {
            player.y -= 1
        }
        else if (direction == "right" && player.y != this.cols - 1) {
            player.y += 1
        }
        else if (direction == "up" && player.x != 0) {
            player.x -= 1
        }
        else if (direction == "down" && player.x != this.rows - 1) {
            player.x += 1
        }

        const newPlayerCell = this.matrix[player.x][player.y]
        let prevPlayerPos = this.positions[playerNum - 1]

        if (newPlayerCell == 'c') {
            this.score[playerNum - 1] += 10
            this.coinsNum -= 1
            this.matrix[player.x][player.y] = playerNum
            this.matrix[prevPlayerPos.x][prevPlayerPos.y] = '.'
            this.positions[playerNum - 1].x = player.x
            this.positions[playerNum - 1].y = player.y
        }
        else if (newPlayerCell == '.') {
            this.matrix[player.x][player.y] = playerNum
            this.matrix[prevPlayerPos.x][prevPlayerPos.y] = '.'
            this.positions[playerNum - 1].x = player.x
            this.positions[playerNum - 1].y = player.y
        }
    }

    generateCoins(coinsNum) { //check why it is sometimes generating 1 coin less than it should
        if (coinsNum == 0) { return }

        let randomRow = Math.floor(Math.random() * (this.rows))
        let randomCol = Math.floor(Math.random() * (this.cols))
        if (this.matrix[randomRow][randomCol] == ".") {
            this.matrix[randomRow][randomCol] = "c"
            coinsNum--
        }
        this.generateCoins(coinsNum)
    }

    generateBlocks(blockNum) {
        if (blockNum == 0) { return }
        let randomRow = Math.floor(Math.random() * (this.rows))
        let randomCol = Math.floor(Math.random() * (this.cols))
        if (this.matrix[randomRow][randomCol] == "." && this.matrix[randomRow][randomCol] != "c") {
            this.matrix[randomRow][randomCol] = "b"
            blockNum--
        }
        this.generateBlocks(blockNum)
    }

    hasGameEnded(){
        if(this.coinsNum>0){
            return false
        }
        
        let player1Score = this.score[0]
        let player2Score = this.score[1]

        if(player1Score>player2Score){
            return "player1 Won!!!"
        }
        else if(player2Score<player1Score){
            return "player2 Won!!!"
        }
        
        return "It's a tie!"
    }
    


    // eatCoin(player){
    //     if(this.matrix[player.x][player.y] == "c"){
    //         this.score[player-1]+= 10
    //     }
    // }
}

// let b = new GoldRush(5,5)

// // b.print()
// b.movePlayer(1, "right")
// b.movePlayer(2, "right")
// b.movePlayer(2, "up")
// b.movePlayer(2, "left")
// // b.print()

// b.print()