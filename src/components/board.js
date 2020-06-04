import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { game, testCheck } from '../reducers/game'

const Board = styled.div`
  display: grid;
  grid-template-columns: 70px 70px 70px 70px 70px 70px 70px 70px;
  grid-template-rows: 70px 70px 70px 70px 70px 70px 70px 70px;
  border: 3px solid red;
`

const Square = styled.button`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin: 0;
  background-color: ${props => props.index % 2 === 0 && props.row % 2 === 0 ? 'white' :
        props.index % 2 !== 0 && props.row % 2 !== 0 ? 'white' : 'navy'};
border: ${props => props.valid ? '5px solid green' : 'none'}
`

const PieceImage = styled.img`
  width: 100%;
  height: 100%;
`
const Promotion = styled.button`
  background: transparent;
  border: none;
`

export const SetGame = () => {
    const dispatch = useDispatch()
    const squares = useSelector((store) => store.game.squares)
    const currentPlayer = useSelector((store) => store.game.currentTurn)
    const lostWhitePieces = useSelector((store) => store.game.players.white.lostPieces)
    const lostBlackPieces = useSelector((store) => store.game.players.black.lostPieces)
    const promoteWhite = useSelector((store) => store.game.players.white.promote)
    const promoteBlack = useSelector((store) => store.game.players.black.promote)
    const checked = useSelector((store) => store.game.inCheck)
    const [activePiece, setActivePiece] = useState(false)
    useEffect(() => {
        dispatch(testCheck())
    }, [currentPlayer])

    const movePiece = async (oldSquare, targetSquare) => {

        if (!activePiece && oldSquare.piece.color !== currentPlayer) {
            alert(`It's ${currentPlayer}'s turn!`)
        } else if (!activePiece && oldSquare.piece.type) {
            await setActivePiece(oldSquare)
            dispatch(
                game.actions.moveCalculator({ piece: oldSquare })
            )
            if (oldSquare.piece.type === 'king' && !oldSquare.piece.moved) {
                dispatch(
                    game.actions.castleValidate({ piece: oldSquare })
                )
            }
            //trigger valid square calculator with properties of activepiece
        } else if (activePiece && targetSquare.column === activePiece.column && targetSquare.row === activePiece.row) {
            dispatch(
                game.actions.resetPiece({ piece: activePiece })
            )
            setActivePiece(false)
        } else if (activePiece && activePiece !== targetSquare) {
            if (activePiece.piece.type === 'king' && targetSquare.piece.type && targetSquare.piece.type.includes('rook') && activePiece.piece.color === targetSquare.piece.color) {
                dispatch(
                    game.actions.castle({ oldSquare: activePiece, targetSquare: targetSquare })
                )
            } else {
                dispatch(
                    game.actions.movePiece({ oldSquare: activePiece, targetSquare: targetSquare })
                )
            }


            setActivePiece(false)
        }
    }

    const promotePiece = (piece) => {

        dispatch(
            game.actions.promotePawn({ recoveredPiece: piece })
        )
    }

    return (
        <div>
            <div style={{ display: "flex", width: "75%", flexWrap: "wrap" }}>
                {lostWhitePieces && lostWhitePieces.map((piece) => {
                    return <Promotion disabled={!promoteWhite}
                        onClick={() => promotePiece(piece)}
                        type="button"><img src={piece.image} style={{ height: "50px", width: "50px" }} /></Promotion>
                })}
            </div>
            <Board>
                {squares.map((square, index) => {
                    return <Square index={index} row={square.row} valid={square.valid}
                        onClick={() => movePiece(square, square)}
                        disabled={(activePiece && !square.valid && activePiece !== square) || promoteBlack || promoteWhite}>{square.piece.image && <PieceImage src={square.piece.image} />}</Square>
                })}
            </Board>
            <div style={{ display: "flex", width: "75%", flexWrap: "wrap" }}>
                {lostBlackPieces && lostBlackPieces.map((piece) => {
                    return <Promotion disabled={!promoteBlack}
                        onClick={() => promotePiece(piece)}
                        type="button"><img src={piece.image} style={{ height: "50px", width: "50px" }} /></Promotion>
                })}
            </div>
        </div>
    )

}