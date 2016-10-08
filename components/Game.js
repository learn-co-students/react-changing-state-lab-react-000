const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            turn: 'X'
        };

        this.handleReset = this.handleReset.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleReset (event) {
        event.preventDefault()
        this.setState({
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            turn: 'X',
        })
    }

    handleClick (index, event) {
        event.preventDefault();
        let board = this.state.board
        board[index] = this.state.turn
        let turn = (this.state.turn === "X" ? "O" : "X")
        this.setState({
            board: board,
            turn: turn
        })
    }

    getWinner () {
        const results = solutions.map(
            (solution) => solution.map((index) => this.state.board[index]).join('')
        )

        const row = results.find(
            (result) => result === 'XXX' || result === 'OOO'
        );

        return row && row[0]
    }

    isComplete () {
        return !!this.getWinner() || this.state.board.every((field) => field);
    }

    render () {
        const { turn } = this.state
        const statusStyle = {
            height: '6vh',
            width: '100vw',
            border: '1px solid black',
            paddingTop: '40px',
            textAlign: 'center',
            fontSize: '28px',
            backgroundColor: 'blue',
            color: 'white',
        }
        const resetStyle = {
            height: '10vh',
            width: '100vw',
            border: '1px solid black',
            paddingTop: '18px',
            textAlign: 'center',
            fontSize: '28px',
            backgroundColor: 'orange',
            color: 'white',
        }
        return (
            <div className="game">
                <Board
                    board={this.state.board}
                    onClick={this.handleClick}
                    winner={this.getWinner()}
                />
                {this.isComplete() ?
                    <Status
                        winner={this.getWinner()}
                        style={statusStyle}
                    />
                    :
                    <div style={statusStyle}>{turn} make your move</div>
                }
                <button
                    className="game__reset"
                    onClick={this.handleReset}
                    style={resetStyle}
                >
                    Reset
                </button>
            </div>
        );
    }
}

module.exports = Game;
