import React from 'react'
import './Board.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'


import Square from './Square'

export default function Board() {

    const [announcement, setAnnouncement] = useState("");

    let won = false;
    let turn = 1;
    let getPlayer = () => {return turn % 2 === 0 ? "O" : "X"}

    let noMove = "-";

    let board = [
        [noMove, noMove, noMove],
        [noMove, noMove, noMove],
        [noMove, noMove, noMove]
    ]

    let boardDecision = (x, y, setValue) => {
        if(board[x][y] !== noMove) return; //check if board space is taken already
        if(won) return;

        let player = getPlayer() //set the player who is making a move

        board[x][y] = player; //set the board to the player who made the move
        setValue(player);

        checkWin() ? winFunction() : turn++; // check for the win, yes proceed to win function if no switch turns
    }

    let checkWin = () => {
        for(let x = 0; x < board[0].length; x++){ // up and down
            if(board[0][x] === board[1][x] && board[0][x] === board[2][x] && board[0][x] !== noMove) return true;
        }
        for(let x = 0; x < board.length; x++){ // across
            let row = board[x];
            if(row[0] === row[1] && row[0] === row[2] && row[0] !== noMove) return true;
        }
        return (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== noMove) 
            || (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== noMove);
    }

    let winFunction = () => {
        console.log("Winner! Player " + getPlayer())
        setAnnouncement("Winner! Player " + getPlayer())
        won = true;
        myConfetti({
            particleCount: 100,
            spread: 160
        });
    }

    let getSquares = (row) => {
        let values = [[row, 0], [row, 1], [row, 2]];

        return (<>{ values.map(([x,y]) => (<Square x={x} y={y} onClick={boardDecision} key={`${x}${y}`}/>)) }</>)
    }

    var myCanvas = document.getElementById('confetti');

    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });

    return (
        <div className='TTTContainer'>
        <canvas id="confetti"></canvas>
        <div className="Win"><strong>{announcement}</strong></div>
            <div className="TicTacToe">
                <table>
                    <tbody>
                        <tr>
                            {getSquares(0)}
                        </tr>
                        <tr>
                            {getSquares(1)}
                        </tr>
                        <tr>
                            {getSquares(2)}
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className='Refresh' onClick={()=>window.location.reload()}>Restart Game</button>
        </div>
    )
}
