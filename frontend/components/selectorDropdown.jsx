var React = require('react');

var SelectorDropdown = React.createClass({

  getInitialState: function() {
    return {
      listVisible: false
    };
  },

  _onBoxClick: function (e) {
    this.setState({listVisible: !this.state.listVisible});
  },

// Add a click event to the li with className="menu" to toggle listVisible
  render: function() {
    return (
      <li>
        <button className='selector' onClick={this._onBoxClick}>SD</button>
        <ul className={ this.state.listVisible ? "dropdown" : "hidden" }>
          <li>All</li>
          <li>None</li>
          <li>Read</li>
          <li>Unread</li>
          <li>Starred</li>
          <li>Unstarred</li>
        </ul>
      </li>
    );
  }

});

module.exports = SelectorDropdown;
