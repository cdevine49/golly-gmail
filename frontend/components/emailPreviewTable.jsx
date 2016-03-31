var React = require('react');
var EmailStore = require('../stores/emailStore');
var ApiUtil = require('../utils/apiUtil');
var EmailPreview = require('./emailPreview');


var EmailPreviewTable = React.createClass({

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

      <div>
        {(this.state.emailPreviews.length > 0 ?
          <ul>
            {this.state.emailPreviews.map(function (email) {
              return <EmailPreview
                key={email.id}
                from={email.from}
                to={email.to}
                subject={email.subject}
                body={email.body}
                checked={email.checked}
                starred={email.starred}
                important={email.important} />;
            })}
          </ul> :
          <article>
            <p>Your Primary tab is empty.</p>
            <p>Personal messages and messages that don’t appear in other tabs will be shown here.</p>
          </article>
        )}

      </div>
    );
  }


});

module.exports = EmailPreviewTable;
