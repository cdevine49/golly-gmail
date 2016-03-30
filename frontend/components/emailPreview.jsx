var React = require('react');
var PropTypes = React.PropTypes;

var EmailPreviews = React.createClass({

  render: function() {
    return (
      <ul>
        <li>Subject: {this.props.email.subject}</li>
        <li>Body: {this.props.email.body}</li>
      </ul>
    );
  }

});

module.exports = EmailPreviews;
