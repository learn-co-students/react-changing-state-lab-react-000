const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };
    
    this.getWinner = this.getWinner.bind(this, solutions)
    // this.isComplete = this.isComplete.bind(this, solutions)
    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
  }

  handleClick (i, ev) {
    ev.preventDefault();
    let newBoard = this.state.board;
    newBoard[i] = this.state.turn;
    let newTurn = this.state.turn == 'X' ? 'O' : 'X'
    this.setState({board: newBoard, turn: newTurn})
  }

  getWinner () {
    let winCombo = solutions.reduce((prev, current) => {
      if (
        this.state.board[current[0]] == this.state.board[current[1]] && 
        this.state.board[current[1]] == this.state.board[current[2]] &&
        this.state.board[current[0]] != null
      ){
        return current
      }else{
        return prev || false
      }
    }, false)
    if (winCombo){return this.state.board[winCombo[0]]}
  }

  isComplete (solutions) {
    return this.state.board.indexOf(null) == -1 || this.getWinner()
  }

  render () {
    console.log(`The board in Game is ${this.state.board}`)
    return (
      <div className='game' >
        <Board 
          board={this.state.board} 
          onClick={this.handleClick}
        />
        {this.isComplete() ? <Status winner={this.getWinner()}/> : ''}
      </div>
    );
  }
}

module.exports = Game;
