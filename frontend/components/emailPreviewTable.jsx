var React = require('react');
var EmailStore = require('../stores/emailStore');
var ApiUtil = require('../utils/apiUtil');
var Checkboxes = require('./checkbox');
var Link = require('react-router').Link;

var EmailPreviewTable = React.createClass({

  getInitialState: function () {
    return { emails: [] };
  },

  componentDidMount: function () {
    this.emailStoreToken = EmailStore.addListener(this._onChange);
    ApiUtil.fetchEmails();
  },


  componentWillUnmount: function () {
    this.emailStoreToken.remove();
  },

  _onChange: function () {
    this.setState({ emails: EmailStore.all().sort(
      function(x, y) {
        return Date.parse(y.created_at) - Date.parse(x.created_at);}
      )
    });
  },

  render: function () {

    var emailPreviews = this.state.emails.map(function (email, i) {
      return (
        <div key={ i } className={'email-preview-item group' + (email.read ? ' email-read' : ' email-unread')}>
          <Checkboxes email={email}/>
          <Link className={'email-preview-sender email-preview-link' + (email.read ? ' normal' : ' bold')} to={"/inbox/" + email.id}>{ email.from_name }</Link>
          <Link
            className={'email-preview-subject email-preview-link'  + (email.read ? ' normal' : ' bold')}
            to={"/inbox/" + email.id}>{ email.subject ? (email.subject.length > 80 ? email.subject.slice(0, 80) + '...' : email.subject) : '(no subject)' }</Link>
          <span className={ (email.body) ? 'subject-dash-body' : 'hidden' }>-</span>
          <Link className='email-preview-body email-preview-link' to={"/inbox/" + email.id}>{ email.subject.length > 80 ? email.body.slice(0, 20) : email.body.slice(0, (100 - email.subject.length)) }</Link>
        </div>
      );
    });

    if (emailPreviews.length === 0) {
      emailPreviews = <p>Loading emails...</p>;
    }
    return (
      <section className="email-previews-table-container">
        {this.props.children}
        <div className='email-previews-table'>
          { emailPreviews }
        </div>

      </section>
    );
  }
});

module.exports = EmailPreviewTable;
