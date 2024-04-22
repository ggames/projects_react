import { useState } from "react";
import { Square } from "./components/Square";
import confetti from "canvas-confetti";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { TURNS } from "./constants";
import { WinnerModal } from "./components/WinnerModal";

import "./App.css";




function App() {

 
  const [board, setBoard] = useState(
   () => { 
       const boardFromStorage = window.localStorage.getItem('board')
       return boardFromStorage ? JSON.parse(boardFromStorage): Array(9).fill(null)
   });

  const [turn, setTurn] = useState(() => {
       const turnFronStorage = window.localStorage.getItem('turn')
      return turnFronStorage ?? TURNS.X 
  });

  const [winner, setWinner] = useState(null);

 


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
       if(board[index] || winner) return
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard) 
        const newTurn = turn === TURNS.X? TURNS.O: TURNS.X
        setTurn(newTurn)

        // Guardar aqui partida
        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turn', newTurn)

        const newWinner = checkWinnerFrom(newBoard)
        if(newWinner) {
          confetti()
          setWinner(newWinner)
        }else if(checkEndGame(newBoard)) {
           setWinner(false) 
        }

  }
  //console.log(board);

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map(( square , index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >{ square }</Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      
      <WinnerModal winner= {winner} resetGame={resetGame} />
     
    </main>
  )
}

export default App;
