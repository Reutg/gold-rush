class GoldRush extends Matrix{
    constructor(rows, cols){
        super(rows, cols)
        this.positions = [{x: 0, y: 0},{x: rows-1, y: cols-1}]
        this.matrix[0][0] = 1
        this.matrix[rows-1][cols-1] = 2
        this.generateCoins(Math.floor(this.rows * this.cols / 4))
       
    }
    // x- row
    // y- col
    
    movePlayer(playerNum,direction){
        const player = this.positions[playerNum-1]

        if(direction=="left" && player.y !=0){
            this.matrix[player.x][player.y] = '.'
            this.matrix[player.x][player.y - 1] = playerNum
            this.positions[playerNum-1].y -= 1
        }
        else if(direction=="right" && player.y!=this.cols-1){
            this.matrix[player.x][player.y] = '.'
            this.matrix[player.x][player.y+1] = playerNum
            this.positions[playerNum-1].y += 1
        }
        else if(direction=="up" && player.x!=0){
            this.matrix[player.x][player.y] = '.'
            this.matrix[player.x-1][player.y] = playerNum
            this.positions[playerNum-1].x-= 1
        }
        else if(direction=="down" && player.x!=this.rows-1){
            this.matrix[player.x][player.y] = '.'
            this.matrix[player.x+1][player.y] = playerNum
            this.positions[playerNum-1].x+= 1
        }
    }

    generateCoins(coinsNum){ //check why it is sometimes generating 1 coin less than it should
        if (coinsNum==0){return}

        let randomRow = Math.floor(Math.random()*(this.rows))
        let randomCol = Math.floor(Math.random()*(this.cols))
        if (this.matrix[randomRow][randomCol] == "."){
            this.matrix[randomRow][randomCol] = "c"
            coinsNum--
        }
        return this.generateCoins(coinsNum)
    }
}

// let b = new GoldRush(5,5)

// // b.print()
// b.movePlayer(1, "right")
// b.movePlayer(2, "right")
// b.movePlayer(2, "up")
// b.movePlayer(2, "left")
// // b.print()

// b.print()