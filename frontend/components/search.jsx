var React = require('react');

var Search = React.createClass({

  getInitialState: function() {
    return {
      inputVal: ""
    };
  },

  handleInput: function (event) {
   this.setState({ inputVal: event.currentTarget.value });
  },

  render: function() {
    return (
      <form className='searchbar group'>
        <input type='text' onChange={this.handleInput} value={this.state.inputVal}></input>
        <button className='search-button'>B</button>
      </form>
    );
  }

});

module.exports = Search;
