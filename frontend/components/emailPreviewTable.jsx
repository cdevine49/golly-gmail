var React = require('react');
var EmailStore = require('../stores/emailStore');
var ApiUtil = require('../utils/apiUtil');
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
    this.setState({ emails: EmailStore.all()} );
  },

  render: function () {

    var emailPreviews = this.state.emails.map(function (email, i) {
      return (
        <li key={ i }>
          <Link to={"/inbox/" + email.id}>
            <h4>{ email.from }</h4>
            <h4>{ email.subject }</h4>
            <p>{ email.body }</p>
          </Link>
        </li>
      );
    });

    if (emailPreviews.length === 0) {
      emailPreviews = <p>Loading emails...</p>;
    }
    return (
      <section className="emails">
        {this.props.children}
        <ul>
          { emailPreviews }
        </ul>

      </section>
    );
  }


});

module.exports = EmailPreviewTable;
