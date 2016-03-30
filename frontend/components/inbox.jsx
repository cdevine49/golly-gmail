var React = require('react');
var PropTypes = React.PropTypes;

var Inbox = React.createClass({

  getInitialState: function() {
    return {
      emailPreviews: emails.all()
    };
  },

  componentDidMount: function() {
    this.newEmailListener = InboxStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.newEmailListener.remove();
  },

  onChange: function () {
    this.setState({emailPreviews: emails.all()});
  },

  render: function() {
    return (
      <ul>
        {this.state.emailPreviews.map(function (email) {
          return <EmailPreview key={email.id} email={email} />;
        })}
      </ul>
    );
  }

});

module.exports = Inbox;
