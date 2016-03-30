var React = require('react');

var SelectorDropdown = React.createClass({

  getInitialState: function() {
    return {
      listVisible: false
    };
  },

  _onBoxClick: function () {
    this.setState({listVisible: !this.state.listVisible});
  },

  render: function() {
    return (
      <li>
        <ul class= { this.state.listVisible ? "dropdown" : "hidden" }>
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
