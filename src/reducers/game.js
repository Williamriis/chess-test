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
            type: 'knight',
            color: 'white',
            restingImage: require('../assets/white-knight.svg.png'),
            activeImage: require('../assets/active-white-knight.svg.png'),
            image: require('../assets/white-knight.svg.png')
        },
        bishop: {
            type: 'bishop',
            color: 'white',
            restingImage: require('../assets/white-bishop.svg.png'),
            activeImage: require('../assets/active-white-bishop.png'),
            image: require('../assets/white-bishop.svg.png')
        },
        queen: {
            type: 'queen',
            color: 'white',
            restingImage: require('../assets/white-queen.svg.png'),
            activeImage: require('../assets/active-white-queen.svg.png'),
            image: require('../assets/white-queen.svg.png')
        },
        king: {
            type: 'king',
            color: 'white',
            restingImage: require('../assets/white-king.svg.png'),
            activeImage: require('../assets/active-white-king.svg.png'),
            image: require('../assets/white-king.svg.png')
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
            type: 'rook',
            color: 'black',
            restingImage: require('../assets/black-rook.svg.png'),
            activeImage: require('../assets/active-black-rook.svg.png'),
            image: require('../assets/black-rook.svg.png')
        },
        knight: {
            type: 'knight',
            color: 'black',
            restingImage: require('../assets/black-knight.svg.png'),
            activeImage: require('../assets/active-black-knight.svg.png'),
            image: require('../assets/black-knight.svg.png')
        },
        bishop: {
            type: 'bishop',
            color: 'black',
            restingImage: require('../assets/black-bishop.svg.png'),
            activeImage: require('../assets/active-black-bishop.svg.png'),
            image: require('../assets/black-bishop.svg.png')
        },
        queen: {
            type: 'queen',
            color: 'black',
            restingImage: require('../assets/black-queen.svg.png'),
            activeImage: require('../assets/active-black-queen.svg.png'),
            image: require('../assets/black-queen.svg.png')
        },
        king: {
            type: 'king',
            color: 'black',
            restingImage: require('../assets/black-king.svg.png'),
            activeImage: require('../assets/active-black-king.svg.png'),
            image: require('../assets/black-king.svg.png')
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
            piece: {},
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
            piece: pieces.black.queen,
            valid: false
        },
        {
            row: 8,
            column: 5,
            piece: pieces.black.king,
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
    players: {
        white: {
            color: "white",
            lostPieces: [],
            promote: false
        },
        black: {
            color: "black",
            lostPieces: [],
            promote: false
        }
    },
    currentTurn: "white",
    validSquares: [],
    inCheck: '',
    lastMove: {},

}

export const game = createSlice({
    name: 'game',
    initialState,
    reducers: {

        movePiece: (state, action) => {
            state.testIfInCheck = false;
            const { oldSquare, targetSquare } = action.payload
            const newSquare = state.squares.find((square) => square.row === targetSquare.row && square.column === targetSquare.column)
            newSquare.piece = oldSquare.piece
            state.pieces[newSquare.piece.color][newSquare.piece.type].image = state.pieces[newSquare.piece.color][newSquare.piece.type].restingImage
            newSquare.piece = state.pieces[newSquare.piece.color][newSquare.piece.type]
            const formerSquare = state.squares.find((square) => square.row === oldSquare.row && square.column === oldSquare.column)
            formerSquare.piece = ''
            if (targetSquare.piece.type) {
                state.players[targetSquare.piece.color].lostPieces.push(targetSquare.piece)
            }

            state.squares.forEach((square) => {
                square.valid = false
            })

            state.lastMove = {
                movedFrom: oldSquare,
                movedTo: targetSquare,
                movedPiece: oldSquare.piece,
                takenPiece: targetSquare.piece
            }

            if (newSquare.piece.type.includes('pawn') && state.currentTurn !== state.inCheck) {
                state.pieces[newSquare.piece.color][newSquare.piece.type].moved = true;
                newSquare.piece = state.pieces[newSquare.piece.color][newSquare.piece.type]
                if (newSquare.row === 8 && newSquare.piece.color === "white") {
                    state.players[newSquare.piece.color].promote = true;
                } else if (newSquare.row === 1 && newSquare.piece.color === "black") {
                    state.players[newSquare.piece.color].promote = true;
                } else {
                    state.currentTurn = state.currentTurn === "white" ? "black" : "white"
                }
            } else {
                state.currentTurn = state.currentTurn === "white" ? "black" : "white"
                state.inCheck = ''
            }






        },

        moveCalculator: (state, action) => {
            const { piece, testCheck } = action.payload
            state.validSquares = []
            if (!testCheck) {
                state.pieces[piece.piece.color][piece.piece.type].image = state.pieces[piece.piece.color][piece.piece.type].activeImage
                let foundSquare = state.squares.find((square) => square.row === piece.row && square.column === piece.column)
                foundSquare.piece = state.pieces[piece.piece.color][piece.piece.type]
            }


            if (piece.piece.type.includes('pawn') && piece.piece.moved) {
                if (piece.piece.color === 'white') {
                    state.squares.forEach((square) => {
                        if ((piece.row === square.row && piece.column === square.column)) {
                            square.valid = true
                        } else if (square.column === piece.column && square.row === piece.row + 1 && !square.piece.type) {
                            testCheck ? state.validSquares.push(square) : square.valid = true
                        } else if ((square.column === piece.column + 1 || square.column === piece.column - 1) &&
                            square.row === piece.row + 1 &&
                            square.piece.color && square.piece.color !== piece.piece.color) {
                            testCheck ? state.validSquares.push(square) : square.valid = true
                        } else {
                            square.valid = false;
                        }

                    })
                } else {
                    state.squares.forEach((square) => {
                        if (piece.row === square.row && piece.column === square.column) {
                            square.valid = true;
                        } else if (square.column === piece.column && square.row === piece.row - 1 && !square.piece.type) {
                            testCheck ? state.validSquares.push(square) : square.valid = true;
                        } else if ((square.column === piece.column + 1 || square.column === piece.column - 1) &&
                            square.row === piece.row - 1 && square.piece.color && square.piece.color !== piece.piece.color) {
                            testCheck ? state.validSquares.push(square) : square.valid = true;
                        } else {
                            square.valid = false;
                        }

                    })
                }


            } else if (piece.piece.type.includes('pawn') && !piece.piece.moved) {

                if (piece.piece.color === 'white') {

                    state.squares.forEach((square) => {
                        if (piece.row === square.row && piece.column === square.column) {
                            square.valid = true;
                        } else if (square.column === piece.column && (square.row === piece.row + 1 && !square.piece.type) || ((square.row === piece.row + 1 && !square.piece.type) && square.row === piece.row + 2 && !square.piece.type)) {
                            testCheck ? state.validSquares.push(square) : square.valid = true;
                        } else if ((square.column === piece.column + 1 || square.column === piece.column - 1) &&
                            square.row === piece.row + 1 &&
                            square.piece.color && square.piece.color !== piece.piece.color) {
                            testCheck ? state.validSquares.push(square) : square.valid = true;
                        } else {
                            square.valid = false;
                        }

                    })
                } else {
                    state.squares.forEach((square) => {
                        if (piece.row === square.row && piece.column === square.column) {
                            square.valid = true;
                        } else if (square.column === piece.column && (square.row === piece.row - 1 && !square.piece.type) || ((square.row === piece.row - 1 && !square.piece.type) && square.row === piece.row - 2 && !square.piece.type)) {
                            testCheck ? state.validSquares.push(square) : square.valid = true;
                        } else if ((square.column === piece.column + 1 || square.column === piece.column - 1) &&
                            square.row === piece.row - 1 &&
                            square.piece.color && square.piece.color !== piece.piece.color) {
                            testCheck ? state.validSquares.push(square) : square.valid = true;
                        } else {
                            square.valid = false;
                        }


                    })
                }

            } else if (piece.piece.type.includes('bishop')) {

                const bishopMoves = [
                    { x: 1, y: 1 },
                    { x: 1, y: -1 },
                    { x: -1, y: 1 },
                    { x: -1, y: -1 }
                ]
                bishopMoves.forEach((dir) => {
                    let scale = 1;
                    for (scale = 1; scale <= 8; scale++) {
                        let offset = { x: dir.x * scale, y: dir.y * scale }
                        state.squares.forEach((square) => {
                            if ((square.row === piece.row && square.column === piece.column) ||
                                (square.row === piece.row + offset.x && square.column === piece.column + offset.y)) {
                                if (square.row === piece.row + offset.x && square.column === piece.column + offset.y && square.piece.color && square.piece.color !== piece.piece.color) {
                                    testCheck ? state.validSquares.push(square) : square.valid = true;

                                    scale = 9;
                                } else if (square.row === piece.row + offset.x && square.column === piece.column + offset.y && !square.piece.color ||
                                    square.row === piece.row && square.column === piece.column) {

                                    testCheck ? state.validSquares.push(square) : square.valid = true;
                                } else {
                                    square.valid = false;
                                    scale = 9;
                                }
                            }
                        })
                    }
                })

            } else if (piece.piece.type.includes('rook')) {
                const rookMoves = [
                    { x: 0, y: 1 },
                    { x: 0, y: -1 },
                    { x: 1, y: 0 },
                    { x: -1, y: 0 }
                ]
                rookMoves.forEach((dir) => {
                    let scale = 1;
                    for (scale = 1; scale <= 8; scale++) {
                        const offset = { x: dir.x * scale, y: dir.y * scale }
                        state.squares.forEach((square) => {
                            if ((square.column === piece.column && square.row === piece.row + offset.x) ||
                                square.row === piece.row && square.column === piece.column + offset.y) {
                                if (square.piece.color && square.piece.color !== piece.piece.color) {
                                    testCheck ? state.validSquares.push(square) : square.valid = true;
                                    scale = 9;
                                } else if ((square.column === piece.column && square.row === piece.row + offset.x && !square.piece.color) ||
                                    (square.row === piece.row && square.column === piece.column + offset.y && !square.piece.color) ||
                                    (square.row === piece.row && square.column === piece.column)) {

                                    testCheck ? state.validSquares.push(square) : square.valid = true;
                                } else {
                                    square.valid = false;
                                    scale = 9;
                                }

                            }
                        })
                    }
                })

            } else if (piece.piece.type.includes('queen')) {

                const queenMoves = [
                    { x: 0, y: 1, type: "straight" },
                    { x: 0, y: -1, type: "straight" },
                    { x: 1, y: 0, type: "straight" },
                    { x: -1, y: 0, type: "straight" },
                    { x: 1, y: 1, type: "diagonal" },
                    { x: 1, y: -1, type: "diagonal" },
                    { x: -1, y: 1, type: "diagonal" },
                    { x: -1, y: -1, type: "diagonal" }
                ]
                queenMoves.forEach((dir) => {
                    let scale = 1;
                    for (scale = 1; scale <= 8; scale++) {
                        const offset = { x: dir.x * scale, y: dir.y * scale }
                        if (dir.type === "straight") {
                            state.squares.forEach((square) => {
                                if ((square.column === piece.column && square.row === piece.row + offset.x) ||
                                    square.row === piece.row && square.column === piece.column + offset.y) {
                                    if (square.piece.color && square.piece.color !== piece.piece.color) {
                                        testCheck ? state.validSquares.push(square) : square.valid = true;
                                        scale = 9;
                                    } else if ((square.column === piece.column && square.row === piece.row + offset.x && !square.piece.color) ||
                                        (square.row === piece.row && square.column === piece.column + offset.y && !square.piece.color) ||
                                        (square.row === piece.row && square.column === piece.column)) {

                                        testCheck ? state.validSquares.push(square) : square.valid = true;
                                    } else {
                                        square.valid = false;
                                        scale = 9;
                                    }

                                }
                            })
                        } else {
                            state.squares.forEach((square) => {
                                if ((square.row === piece.row && square.column === piece.column) ||
                                    (square.row === piece.row + offset.x && square.column === piece.column + offset.y)) {
                                    if (square.row === piece.row + offset.x && square.column === piece.column + offset.y && square.piece.color && square.piece.color !== piece.piece.color) {
                                        testCheck ? state.validSquares.push(square) : square.valid = true;
                                        scale = 9;
                                    } else if (square.row === piece.row + offset.x && square.column === piece.column + offset.y && !square.piece.color ||
                                        square.row === piece.row && square.column === piece.column) {

                                        testCheck ? state.validSquares.push(square) : square.valid = true;
                                    } else {
                                        square.valid = false;
                                        scale = 9;
                                    }
                                }
                            })
                        }
                    }

                })
            } else if (piece.piece.type.includes('king')) {
                const kingMoves = [
                    { x: 0, y: 1, type: "straight" },
                    { x: 0, y: -1, type: "straight" },
                    { x: 1, y: 0, type: "straight" },
                    { x: -1, y: 0, type: "straight" },
                    { x: 1, y: 1, type: "diagonal" },
                    { x: 1, y: -1, type: "diagonal" },
                    { x: -1, y: 1, type: "diagonal" },
                    { x: -1, y: -1, type: "diagonal" }
                ]
                kingMoves.forEach((dir) => {
                    let scale = 1;
                    for (scale = 1; scale <= 1; scale++) {
                        const offset = { x: dir.x * scale, y: dir.y * scale }
                        if (dir.type === "straight") {
                            state.squares.forEach((square) => {
                                if ((square.column === piece.column && square.row === piece.row + offset.x) ||
                                    square.row === piece.row && square.column === piece.column + offset.y) {
                                    if (square.piece.color && square.piece.color !== piece.piece.color && square.piece.type !== 'king') {
                                        testCheck ? state.validSquares.push(square) : square.valid = true;
                                        scale = 9;
                                    } else if ((square.column === piece.column && square.row === piece.row + offset.x && !square.piece.color) ||
                                        (square.row === piece.row && square.column === piece.column + offset.y && !square.piece.color) ||
                                        (square.row === piece.row && square.column === piece.column)) {

                                        testCheck ? state.validSquares.push(square) : square.valid = true;
                                    } else {
                                        square.valid = false;
                                        scale = 9;
                                    }

                                }
                            })
                        } else {
                            state.squares.forEach((square) => {
                                if ((square.row === piece.row && square.column === piece.column) ||
                                    (square.row === piece.row + offset.x && square.column === piece.column + offset.y)) {
                                    if (square.row === piece.row + offset.x && square.column === piece.column + offset.y && square.piece.color && square.piece.color !== piece.piece.color && square.piece.type !== 'king') {
                                        testCheck ? state.validSquares.push(square) : square.valid = true;
                                        scale = 9;
                                    } else if (square.row === piece.row + offset.x && square.column === piece.column + offset.y && !square.piece.color ||
                                        square.row === piece.row && square.column === piece.column) {

                                        testCheck ? state.validSquares.push(square) : square.valid = true;
                                    } else {
                                        square.valid = false;
                                        scale = 9;
                                    }
                                }
                            })
                        }
                    }

                })
            } else if (piece.piece.type.includes('knight')) {
                const knightMoves = [
                    { x: 2, y: 1 },
                    { x: -2, y: 1 },
                    { x: 2, y: -1 },
                    { x: -2, y: -1 },
                    { x: 1, y: 2 },
                    { x: 1, y: -2 },
                    { x: -1, y: 2 },
                    { x: -1, y: -2 }
                ]

                knightMoves.forEach((dir) => {
                    let scale = 1;
                    for (scale = 1; scale <= 1; scale++) {
                        const offset = { x: dir.x * scale, y: dir.y * scale }
                        state.squares.forEach((square) => {
                            if (square.row === piece.row && square.column === piece.column) {
                                testCheck ? state.validSquares.push(square) : square.valid = true;
                            } else if (square.row === piece.row + offset.x && square.column === piece.column + offset.y &&
                                square.piece.color !== piece.piece.color) {
                                testCheck ? state.validSquares.push(square) : square.valid = true;
                                scale = 9;
                            }
                        })
                    }
                })
            }

            if (testCheck) {
                const check = state.validSquares.filter((square) => square.piece.type === 'king')

                if (check.length > 0 && piece.piece.type !== 'king') {
                    state.inCheck = check[0].piece.color
                    console.log(`${check[0].piece.color} is in check`)
                } else {

                }
                if ((state.currentTurn === "white" && state.inCheck === "black") || (state.currentTurn === "black" && state.inCheck === "white")) {
                    let revertStateNew = state.squares.find((square) => square.row === state.lastMove.movedTo.row && square.column === state.lastMove.movedTo.column)
                    revertStateNew.piece = state.lastMove.movedTo.piece
                    let revertStateOld = state.squares.find((square) => square.row === state.lastMove.movedFrom.row && square.column === state.lastMove.movedFrom.column)
                    revertStateOld.piece = state.lastMove.movedFrom.piece;
                    if (state.lastMove.takenPiece.type) {
                        state.players[state.lastMove.takenPiece.color].lostPieces.pop()
                    }
                    if (state.lastMove.blankSquare) {
                        let revertBlank = state.squares.find((square) => square.row === state.lastMove.blankSquare.row && square.column === state.lastMove.blankSquare.column)
                        let revertBlankTwo = state.squares.find((square) => square.row === state.lastMove.blankSquareTwo.row && square.column === state.lastMove.blankSquareTwo.column)
                        let revertRook = state.squares.find((square) => square.row === state.lastMove.rookSquare.row && square.column === state.lastMove.rookSquare.column)
                        revertBlank.piece = ''
                        revertBlankTwo.piece = ''
                        revertRook.piece = state.pieces[state.lastMove.movedPiece.color][state.lastMove.movedTo.piece.type]
                    }
                    state.currentTurn = state.currentTurn === "white" ? "black" : "white"
                }
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
        },

        promotePawn: (state, action) => {
            const { recoveredPiece } = action.payload
            const foundSquare = state.squares.find((square) => square.row === state.lastMove.movedTo.row && square.column === state.lastMove.movedTo.column)
            foundSquare.piece = recoveredPiece;
            const index = state.players[recoveredPiece.color].lostPieces.map((item) => item.type).indexOf(recoveredPiece.type)
            state.players[recoveredPiece.color].lostPieces.splice(index, 1)
            state.players[recoveredPiece.color].lostPieces.push(state.lastMove.movedPiece)
            state.players[recoveredPiece.color].promote = false;
            state.currentTurn = recoveredPiece.color === "white" ? "black" : "white"
        },

        castleValidate: (state, action) => {
            const { piece } = action.payload
            const blankSquaresLeft = state.squares.filter((square) => square.row === piece.row && square.column > 1 && square.column < 5 && !square.piece.type)
            const blankSquaresRight = state.squares.filter((square) => square.row === piece.row && square.column > 5 && square.column < 8 && !square.piece.type)
            if (piece.piece.color !== state.inCheck) {
                state.squares.forEach((square) => {
                    if (square.row === piece.row && square.piece.type === 'rook') {
                        if (square.column === 1 && blankSquaresLeft.length === 3) {
                            square.valid = true;
                        } else if (square.column === 8 && blankSquaresRight.length === 2) {
                            square.valid = true;
                        }
                    }
                })
            }
        },

        castle: (state, action) => {

            const { oldSquare, targetSquare } = action.payload
            const newSquare = state.squares.find((square) => square.row === targetSquare.row && square.column === (targetSquare.column === 1 ? targetSquare.column + 2 : targetSquare.column - 1))
            const rookSquare = state.squares.find((square) => square.row === oldSquare.row && square.column === (targetSquare.column === 1 ? newSquare.column + 1 : newSquare.column - 1))
            newSquare.piece = oldSquare.piece
            state.pieces[newSquare.piece.color][newSquare.piece.type].image = state.pieces[newSquare.piece.color][newSquare.piece.type].restingImage
            newSquare.piece = state.pieces[newSquare.piece.color][newSquare.piece.type]
            rookSquare.piece = targetSquare.piece
            const formerRookSquare = state.squares.find((square) => square.row === targetSquare.row && square.column === targetSquare.column)
            formerRookSquare.piece = ''
            const formerKingSquare = state.squares.find((square) => square.row === oldSquare.row && square.column === oldSquare.column)
            formerKingSquare.piece = ''
            state.lastMove = {
                movedFrom: oldSquare,
                movedTo: targetSquare,
                movedPiece: oldSquare.piece,
                takenPiece: '',
                blankSquare: rookSquare,
                blankSquareTwo: newSquare,
                rookSquare: targetSquare
            }
            state.currentTurn = state.currentTurn === "white" ? "black" : "white"
            state.inCheck = ''
        }

    }
})

export const testCheck = (message) => {
    return (dispatch, getState) => {
        const state = getState()
        const occupiedSquares = state.game.squares.filter((square) => square.piece.type && square.piece.color !== state.currentTurn)
        occupiedSquares.forEach((square) => {

            dispatch(game.actions.moveCalculator({ piece: square, testCheck: true }))
        })
    }
}

