const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    console.log(`The board in Board is ${board}`)
    const displayFields = board.map( (player, index) => {
      let spacer = ((index+1) % 3 == 0) ? <br /> : ''
      return (
        <span>
          <Field player={player} onClick={onClick.bind(null, index)} key={index}/> 
          {spacer}
        </span>
      )
    })
    
    return (
      <div className='board'>
        {displayFields}
      </div>
    );
  }
}

module.exports = Board;
