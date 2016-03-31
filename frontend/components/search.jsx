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
      <nav>
        <form className='searchbar'>
          <input type='text' onChange={this.handleInput} value={this.state.inputVal}></input>
        </form>
      </nav>
    );
  }

});

module.exports = Search;
