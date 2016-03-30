var React = require('react');
var PropTypes = React.PropTypes;

var MoreOptions = React.createClass({
  getInitialState: function() {
    return {
      listVisible: false
    };
  },

  _onClick: function () {
    this.setState({listVisible: !this.state.listVisible});
  },
  
  render: function() {
    return (
      <li>


      </li>
    );
  }

});

module.exports = MoreOptions;
