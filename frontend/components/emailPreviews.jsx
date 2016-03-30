var React = require('react');
var PropTypes = React.PropTypes;

var EmailPreviews = React.createClass({

  render: function() {
    return (
      <ul>
        <li>(this.props.email.subject)</li>
        <li>(this.props.email.body)</li>
      </ul>
    );
  }

});

module.exports = EmailPreviews;
