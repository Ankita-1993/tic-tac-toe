import ReactDOM from 'react-dom';
import './index.css';
import React, { Component } from 'react';
function Square(props) {
    return (
        <button className = 'square' onClick={props.onClick}>
            {props.value}
        </button>
    );   
}
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = { squares: Array(9).fill(null), xIsNext: true, };
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        if (calulateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X': 'O';
        this.setState({squares: squares, xIsNext: !this.state.xIsNext, });
    }
    renderSquare(i) { 
        return (
            <Square 
                value = {this.state.squares[i]}
                onClick = {() => this.handleClick(i)}   />
        );
    }
    render() {
        const winner = calulateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X': 'O');
        }
        return (
            <div>
                <div className = 'status'>
                    {status}
                </div>
                <div className = 'board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = 'board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className = 'board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
class Game extends Component {
    render() { 
        return (  
            <div className = 'game'>
                <div className = 'game-board'>
                    <Board/>
                </div>
                <div className = 'game-info'>
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
