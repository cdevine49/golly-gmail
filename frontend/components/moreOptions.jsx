var React = require('react');
var PropTypes = React.PropTypes;

var MoreOptions = React.createClass({
  getInitialState: function() {
    return {
      listVisible: false,
      anySelected: false
    };
  },

  _onBoxClick: function () {
    this.setState({listVisible: !this.state.listVisible});
  },


// Add a click event to the li with className="menu" to toggle listVisible

render: function() {
    return (
      <li className="menu">
        <ul className={ this.state.anySelected ? "dropdown" : "hidden" }>
          {this.state.listVisible ?

            [<li>Mark as read</li>,
            <li>Mark as not important</li>,
            <li>Add to tasks</li>,
            <li>Add star</li>,
            <li>Filter messages like these</li>,
            <li>Mute</li>] :
          [<li>Mark all as read</li>,
          <li>Select messages to see more actions</li>]
        }
        </ul>
      </li>
    );
  }

});

module.exports = MoreOptions;
