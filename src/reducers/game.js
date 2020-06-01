import { createSlice } from '@reduxjs/toolkit'

const pieces = {
    white: {
        pawnOne: {
            type: 'pawnOne',
            color: 'white',
            restingImage: require('../assets/white-pawn.svg.png'),
            activeImage: require('../assets/active-white-pawn.svg.png'),
            image: require('../assets/white-pawn.svg.png'),
            moved: false
        },
        pawnTwo: {
            type: 'pawnTwo',
            color: 'white',
            restingImage: require('../assets/white-pawn.svg.png'),
            activeImage: require('../assets/active-white-pawn.svg.png'),
            image: require('../assets/white-pawn.svg.png'),
            moved: false
        },
        pawnThree: {
            type: 'pawnThree',
            color: 'white',
            restingImage: require('../assets/white-pawn.svg.png'),
            activeImage: require('../assets/active-white-pawn.svg.png'),
            image: require('../assets/white-pawn.svg.png'),
            moved: false
        },
        pawnFour: {
            type: 'pawnFour',
            color: 'white',
            restingImage: require('../assets/white-pawn.svg.png'),
            activeImage: require('../assets/active-white-pawn.svg.png'),
            image: require('../assets/white-pawn.svg.png'),
            moved: false
        },
        pawnFive: {
            type: 'pawnFive',
            color: 'white',
            restingImage: require('../assets/white-pawn.svg.png'),
            activeImage: require('../assets/active-white-pawn.svg.png'),
            image: require('../assets/white-pawn.svg.png'),
            moved: false
        },
        pawnSix: {
            type: 'pawnSix',
            color: 'white',
            restingImage: require('../assets/white-pawn.svg.png'),
            activeImage: require('../assets/active-white-pawn.svg.png'),
            image: require('../assets/white-pawn.svg.png'),
            moved: false
        },
        pawnSeven: {
            type: 'pawnSeven',
            color: 'white',
            restingImage: require('../assets/white-pawn.svg.png'),
            activeImage: require('../assets/active-white-pawn.svg.png'),
            image: require('../assets/white-pawn.svg.png'),
            moved: false
        },
        pawnEight: {
            type: 'pawnEight',
            color: 'white',
            restingImage: require('../assets/white-pawn.svg.png'),
            activeImage: require('../assets/active-white-pawn.svg.png'),
            image: require('../assets/white-pawn.svg.png'),
            moved: false
        },
        rook: {
            type: 'rook',
            color: 'white',
            restingImage: require('../assets/white-rook.svg.png'),
            activeImage: require('../assets/active-white-rook.svg.png'),
            image: require('../assets/white-rook.svg.png')
        },
        knight: {
            type: 'Knight',
            color: 'white',
            image: ''
        },
        bishop: {
            type: 'Bishop',
            color: 'white',
            image: ''
        },
        queen: {
            type: 'Queen',
            color: 'white',
            image: ''
        },
        king: {
            type: 'King',
            color: 'white',
            image: ''
        }
    },

    black: {
        pawnOne: {
            type: 'pawnOne',
            color: 'black',
            restingImage: require('../assets/black-pawn.svg.png'),
            activeImage: require('../assets/active-black-pawn.svg.png'),
            image: require('../assets/black-pawn.svg.png'),
            moved: false
        },
        pawnTwo: {
            type: 'pawnTwo',
            color: 'black',
            restingImage: require('../assets/black-pawn.svg.png'),
            activeImage: require('../assets/active-black-pawn.svg.png'),
            image: require('../assets/black-pawn.svg.png'),
            moved: false
        },
        pawnThree: {
            type: 'pawnThree',
            color: 'black',
            restingImage: require('../assets/black-pawn.svg.png'),
            activeImage: require('../assets/active-black-pawn.svg.png'),
            image: require('../assets/black-pawn.svg.png'),
            moved: false
        },
        pawnFour: {
            type: 'pawnFour',
            color: 'black',
            restingImage: require('../assets/black-pawn.svg.png'),
            activeImage: require('../assets/active-black-pawn.svg.png'),
            image: require('../assets/black-pawn.svg.png'),
            moved: false
        },
        pawnFive: {
            type: 'pawnFive',
            color: 'black',
            restingImage: require('../assets/black-pawn.svg.png'),
            activeImage: require('../assets/active-black-pawn.svg.png'),
            image: require('../assets/black-pawn.svg.png'),
            moved: false
        },
        pawnSix: {
            type: 'pawnSix',
            color: 'black',
            restingImage: require('../assets/black-pawn.svg.png'),
            activeImage: require('../assets/active-black-pawn.svg.png'),
            image: require('../assets/black-pawn.svg.png'),
            moved: false
        },
        pawnSeven: {
            type: 'pawnSeven',
            color: 'black',
            restingImage: require('../assets/black-pawn.svg.png'),
            activeImage: require('../assets/active-black-pawn.svg.png'),
            image: require('../assets/black-pawn.svg.png'),
            moved: false
        },
        pawnEight: {
            type: 'pawnEight',
            color: 'black',
            restingImage: require('../assets/black-pawn.svg.png'),
            activeImage: require('../assets/active-black-pawn.svg.png'),
            image: require('../assets/black-pawn.svg.png'),
            moved: false
        },
        rook: {
            type: 'Rook',
            color: 'black',
            image: ''
        },
        knight: {
            type: 'Knight',
            color: 'black',
            image: ''
        },
        bishop: {
            type: 'Bishop',
            color: 'black',
            image: ''
        },
        queen: {
            type: 'Queen',
            color: 'black',
            image: ''
        },
        king: {
            type: 'King',
            color: 'black',
            image: ''
        }
    }

}


const initialState = {
    pieces,
    squares: [
        {
            row: 1,
            column: 1,
            piece: pieces.white.rook,
            valid: false
        },
        {
            row: 1,
            column: 2,
            piece: pieces.white.knight,
            valid: false
        },
        {
            row: 1,
            column: 3,
            piece: pieces.white.bishop,
            valid: false
        },
        {
            row: 1,
            column: 4,
            piece: pieces.white.queen,
            valid: false
        },
        {
            row: 1,
            column: 5,
            piece: pieces.white.king,
            valid: false
        },
        {
            row: 1,
            column: 6,
            piece: pieces.white.bishop,
            valid: false
        },
        {
            row: 1,
            column: 7,
            piece: pieces.white.knight,
            valid: false
        },
        {
            row: 1,
            column: 8,
            piece: pieces.white.rook,
            valid: false
        },
        {
            row: 2,
            column: 1,
            piece: pieces.white.pawnOne,
            valid: false
        },
        {
            row: 2,
            column: 2,
            piece: pieces.white.pawnTwo,
            valid: false
        },
        {
            row: 2,
            column: 3,
            piece: pieces.white.pawnThree,
            valid: false
        },
        {
            row: 2,
            column: 4,
            piece: pieces.white.pawnFour,
            valid: false
        },
        {
            row: 2,
            column: 5,
            piece: pieces.white.pawnFive,
            valid: false
        },
        {
            row: 2,
            column: 6,
            piece: pieces.white.pawnSix,
            valid: false
        },
        {
            row: 2,
            column: 7,
            piece: pieces.white.pawnSeven,
            valid: false
        },
        {
            row: 2,
            column: 8,
            piece: pieces.white.pawnEight,
            valid: false
        },
        {
            row: 3,
            column: 1,
            piece: {

            },
            valid: false
        },
        {
            row: 3,
            column: 2,
            piece: {

            },
            valid: false
        },
        {
            row: 3,
            column: 3,
            piece: {

            },
            valid: false
        },
        {
            row: 3,
            column: 4,
            piece: {

            },
            valid: false
        },
        {
            row: 3,
            column: 5,
            piece: {

            },
            valid: false
        },
        {
            row: 3,
            column: 6,
            piece: {

            },
            valid: false
        },
        {
            row: 3,
            column: 7,
            piece: {

            },
            valid: false
        },
        {
            row: 3,
            column: 8,
            piece: {

            },
            valid: false
        },
        {
            row: 4,
            column: 1,
            piece: {

            },
            valid: false
        },
        {
            row: 4,
            column: 2,
            piece: {

            },
            valid: false
        },
        {
            row: 4,
            column: 3,
            piece: {

            },
            valid: false
        },
        {
            row: 4,
            column: 4,
            piece: {

            },
            valid: false
        },
        {
            row: 4,
            column: 5,
            piece: {

            },
            valid: false
        },
        {
            row: 4,
            column: 6,
            piece: {

            },
            valid: false
        },
        {
            row: 4,
            column: 7,
            piece: {

            },
            valid: false
        },
        {
            row: 4,
            column: 8,
            piece: {

            },
            valid: false
        },
        {
            row: 5,
            column: 1,
            piece: {

            },
            valid: false
        },
        {
            row: 5,
            column: 2,
            piece: {

            },
            valid: false
        },
        {
            row: 5,
            column: 3,
            piece: {

            },
            valid: false
        },
        {
            row: 5,
            column: 4,
            piece: {

            },
            valid: false
        },
        {
            row: 5,
            column: 5,
            piece: {

            },
            valid: false
        },
        {
            row: 5,
            column: 6,
            piece: {

            },
            valid: false
        },
        {
            row: 5,
            column: 7,
            piece: {

            },
            valid: false
        },
        {
            row: 5,
            column: 8,
            piece: {

            },
            valid: false
        },
        {
            row: 6,
            column: 1,
            piece: {

            },
            valid: false
        },
        {
            row: 6,
            column: 2,
            piece: {

            },
            valid: false
        },
        {
            row: 6,
            column: 3,
            piece: {

            },
            valid: false
        },
        {
            row: 6,
            column: 4,
            piece: {

            },
            valid: false
        },
        {
            row: 6,
            column: 5,
            piece: {

            },
            valid: false
        },
        {
            row: 6,
            column: 6,
            piece: {

            },
            valid: false
        },
        {
            row: 6,
            column: 7,
            piece: {

            },
            valid: false
        },
        {
            row: 6,
            column: 8,
            piece: {

            },
            valid: false
        },
        {
            row: 7,
            column: 1,
            piece: pieces.black.pawnOne,
            valid: false
        },
        {
            row: 7,
            column: 2,
            piece: pieces.black.pawnTwo,
            valid: false
        },
        {
            row: 7,
            column: 3,
            piece: pieces.black.pawnThree,
            valid: false
        },
        {
            row: 7,
            column: 4,
            piece: pieces.black.pawnFour,
            valid: false
        },
        {
            row: 7,
            column: 5,
            piece: pieces.black.pawnFive,
            valid: false
        },
        {
            row: 7,
            column: 6,
            piece: pieces.black.pawnSix,
            valid: false
        },
        {
            row: 7,
            column: 7,
            piece: pieces.black.pawnSeven,
            valid: false
        },
        {
            row: 7,
            column: 8,
            piece: pieces.black.pawnEight,
            valid: false
        },
        {
            row: 8,
            column: 1,
            piece: pieces.black.rook,
            valid: false
        },
        {
            row: 8,
            column: 2,
            piece: pieces.black.knight,
            valid: false
        },
        {
            row: 8,
            column: 3,
            piece: pieces.black.bishop,
            valid: false
        },
        {
            row: 8,
            column: 4,
            piece: pieces.black.king,
            valid: false
        },
        {
            row: 8,
            column: 5,
            piece: pieces.black.queen,
            valid: false
        },
        {
            row: 8,
            column: 6,
            piece: pieces.black.bishop,
            valid: false
        },
        {
            row: 8,
            column: 7,
            piece: pieces.black.knight,
            valid: false
        },
        {
            row: 8,
            column: 8,
            piece: pieces.black.rook,
            valid: false
        }



    ],
    players: [
        {
            color: "white",
            hasKing: true
        },
        {
            color: "black",
            hasKing: true
        }
    ],
    currentTurn: "white"
}

export const game = createSlice({
    name: 'game',
    initialState,
    reducers: {


        movePiece: (state, action) => {
            const { oldSquare, targetSquare } = action.payload
            const newSquare = state.squares.find((square) => square.row === targetSquare.row && square.column === targetSquare.column)
            newSquare.piece = oldSquare.piece
            state.pieces[newSquare.piece.color][newSquare.piece.type].image = state.pieces[newSquare.piece.color][newSquare.piece.type].restingImage
            newSquare.piece = state.pieces[newSquare.piece.color][newSquare.piece.type]
            const formerSquare = state.squares.find((square) => square.row === oldSquare.row && square.column === oldSquare.column)
            formerSquare.piece = ''

            state.squares.forEach((square) => {
                square.valid = false
            })
            if (newSquare.piece.type.includes('pawn')) {
                state.pieces[newSquare.piece.color][newSquare.piece.type].moved = true;
                newSquare.piece = state.pieces[newSquare.piece.color][newSquare.piece.type]
            }
            state.currentTurn = state.currentTurn === "white" ? "black" : "white"
        },

        moveCalculator: (state, action) => {
            const { piece } = action.payload
            state.pieces[piece.piece.color][piece.piece.type].image = state.pieces[piece.piece.color][piece.piece.type].activeImage
            let foundSquare = state.squares.find((square) => square.row === piece.row && square.column === piece.column)
            foundSquare.piece = state.pieces[piece.piece.color][piece.piece.type]
            if (piece.piece.type.includes('pawn') && piece.piece.moved) {

                if (piece.piece.color === 'white') {
                    state.squares.forEach((square) => {
                        (piece.row === square.row && piece.column === square.column) ? square.valid = true : square.column === piece.column && square.row === piece.row + 1 && !square.piece.type ? square.valid = true :
                            (square.column === piece.column + 1 || square.column === piece.column - 1) &&
                                square.row === piece.row + 1 &&
                                square.piece.type ? square.valid = true :
                                square.valid = false;
                    })
                } else {
                    state.squares.forEach((square) => {
                        (piece.row === square.row && piece.column === square.column) ? square.valid = true : square.column === piece.column && square.row === piece.row - 1 && !square.piece.type ? square.valid = true :
                            (square.column === piece.column + 1 || square.column === piece.column - 1) &&
                                square.row === piece.row - 1 &&
                                square.piece.type ? square.valid = true :
                                square.valid = false;
                    })
                }


            } else if (piece.piece.type.includes('pawn') && !piece.piece.moved) {

                if (piece.piece.color === 'white') {

                    state.squares.forEach((square) => {
                        (piece.row === square.row && piece.column === square.column) ? square.valid = true : square.column === piece.column && (square.row === piece.row + 1 || square.row === piece.row + 2) && !square.piece.type ? square.valid = true :
                            (square.column === piece.column + 1 || square.column === piece.column - 1) &&
                                square.row === piece.row + 1 &&
                                square.piece.type ? square.valid = true :
                                square.valid = false;
                    })
                } else {
                    state.squares.forEach((square) => {
                        (piece.row === square.row && piece.column === square.column) ? square.valid = true : square.column === piece.column && (square.row === piece.row - 1 || square.row === piece.row - 2) && !square.piece.type ? square.valid = true :
                            (square.column === piece.column + 1 || square.column === piece.column - 1) &&
                                square.row === piece.row - 1 &&
                                square.piece.type ? square.valid = true :
                                square.valid = false;
                    })
                }

            } else if (piece.piece.type.includes('rook')) {
                console.log('rook')

                const sameColumn = state.squares.filter((square) => square.column === piece.column)
                sameColumn.forEach((square) => {
                    piece.row === square.row && piece.column === square.column ? square.valid = true :
                        square.piece.type && square.piece.color === piece.piece.color ? square.valid = false : square.valid = true
                })
                // state.squares.forEach((square) => {
                //      square.column === piece.column || square.row === piece.row ? square.valid = true : square.valid = false

                // })
            }
        },

        resetPiece: (state, action) => {
            const { piece } = action.payload
            state.pieces[piece.piece.color][piece.piece.type].image = state.pieces[piece.piece.color][piece.piece.type].restingImage
            let foundSquare = state.squares.find((square) => square.row === piece.row && square.column === piece.column)
            foundSquare.piece = state.pieces[piece.piece.color][piece.piece.type]


            state.squares.forEach((square) => {
                square.valid = false
            })
        }
    }
})
