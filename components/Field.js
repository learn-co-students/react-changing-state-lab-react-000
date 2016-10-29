const React = require('react');

class Field extends React.Component {

  render () {
    const { player, onClick } = this.props;
    const disableButton = player != null;
    return (
      <button 
        className='field' 
        disabled={disableButton}
        onClick={onClick} >
        {player}
      </button>
    );
  }
}

module.exports = Field;
