import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { game } from '../reducers/game'

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


export const SetGame = () => {
    const dispatch = useDispatch()
    const squares = useSelector((store) => store.game.squares)
    const currentPlayer = useSelector((store) => store.game.currentTurn)
    const [activePiece, setActivePiece] = useState(false)

    const movePiece = async (oldSquare, targetSquare) => {

        if (!activePiece && oldSquare.piece.color !== currentPlayer) {
            alert(`It's ${currentPlayer}'s turn!`)
        } else if (!activePiece && oldSquare.piece.type) {
            console.log(oldSquare, targetSquare)
            await setActivePiece(oldSquare)
            dispatch(
                game.actions.moveCalculator({ piece: oldSquare })
            )
            //trigger valid square calculator with properties of activepiece
        } else if (activePiece && targetSquare.column === activePiece.column && targetSquare.row === activePiece.row) {
            console.log('same piece')
            dispatch(
                game.actions.resetPiece({ piece: activePiece })
            )
            setActivePiece(false)
        } else if (activePiece && activePiece !== targetSquare) {

            //dispatch function to set square.piece to = activePiece.
            //remove activePiece from its current square
            dispatch(
                game.actions.movePiece({ oldSquare: activePiece, targetSquare: targetSquare })
            )
            setActivePiece(false)
        }
    }

    return (
        <Board>
            {squares.map((square, index) => {
                return <Square index={index} row={square.row} valid={square.valid}
                    onClick={() => movePiece(square, square)}
                    disabled={activePiece && !square.valid && activePiece !== square}>{square.piece.image && <PieceImage src={square.piece.image} />}</Square>
            })}
        </Board>
    )

}