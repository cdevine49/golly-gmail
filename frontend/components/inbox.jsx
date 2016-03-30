var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var EmailStore = require('../stores/emailStore');
var EmailPreview = require('./emailPreview');


var Inbox = React.createClass({

  getInitialState: function() {
    return {
      emailPreviews: EmailStore.all()
    };
  },

  componentDidMount: function() {
    this.newEmailListener = EmailStore.addListener(this._onChange);
    ApiUtil.fetchAllEmails();
  },

  componentWillUnmount: function () {
    this.newEmailListener.remove();
  },

  _onChange: function () {
    this.setState({emailPreviews: EmailStore.all()});
  },

  render: function() {

    return (

      <main>
        {(this.state.emailPreviews.length > 0 ?
          <ul>
            {this.state.emailPreviews.map(function (email) {
              return <EmailPreview key={email.id} email={email} />;
            })}
          </ul> :
          <article>
            <p>Your Primary tab is empty.</p>
            <p>Personal messages and messages that don’t appear in other tabs will be shown here.</p>
          </article>
        )}

      </main>
    );
  }

});

module.exports = Inbox;
