const React = require('react');

class Status extends React.Component {
    render () {
        const { winner } = this.props;
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
        return (
            <div
                className="status"
                style={statusStyle}
            >
                {winner ? `${winner} wins` : 'Tie'}
            </div>
        );
    }
}

module.exports = Status;
