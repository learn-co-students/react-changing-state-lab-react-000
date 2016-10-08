const React = require('react');

class Field extends React.Component {
    render () {
        const { player, winner, onClick } = this.props;
        const buttonStyle = {
            border: '1px solid black',
            float: 'left',
            width: '33.33%',
            height: '33.33%',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '40px'
        }
        return (
            <button
                className="field"
                style={buttonStyle}
                disabled={!!player || !!winner}
                onClick={onClick}
            >
                {player}
            </button>
        );
    }
}

Field.propTypes = {
    player: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired
}

module.exports = Field;
