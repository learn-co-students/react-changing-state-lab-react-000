const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
    render () {
        const { board, winner, onClick } = this.props
        const boardStyle = {
            border: '1px solid black',
            margin: '0',
            width: '100vw',
            height: '80vh'
        }
        const fields = board.map((token, index) =>
            <Field
                key={index}
                player={token}
                onClick={onClick.bind(null, index)}
                winner={winner}
            />
        )
        return (
            <div
                className="board"
                style={boardStyle}
            >
                {fields}
            </div>
        );
    }
}

Board.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    board: React.PropTypes.array.isRequired
}

module.exports = Board;
