class Matrix{
    constructor(rows, cols){
        this.rows = rows
        this.cols = cols
        this.matrix = this.generateMatrix(rows, cols)
    }   

    generateMatrix(rowsNum, colsNum) {
        let matrix = []
        let num = 1
        for (let r = 0; r < rowsNum; r++) {
            matrix.push([])
            for (let c = 0; c < colsNum; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    get(row, col) {
        let value = this.matrix[row][col]
        return value
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    printColumn(col) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][col])
        }
    }

    printRow(row) {
        for (let i = 0; i < this.matrix[row].length; i++) {
            console.log(this.matrix[row][i])
        }
    }

    alter(row, col, value) {
        return this.matrix[row][col] = value
    }

    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] == value) {
                    let coordinates = { x: j, y: i }
                    return coordinates
                }
            }
        }
    }
}



m.print()