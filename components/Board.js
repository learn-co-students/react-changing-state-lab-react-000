const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    console.log(`The board in Board is ${board}`)
    const displayFields = board.map( (player, index) => {
      // let spacer = (index % 3 == 0 && index != 0) ? <br /> : ''
      return (
        <Field player={player} onClick={onClick.bind(null, index)} key={index}/>
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
