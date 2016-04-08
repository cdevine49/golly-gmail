var React = require('react');
var EmailStore = require('../stores/emailStore');
var MarkStore = require('../stores/markStore');
var SessionStore = require('../stores/sessionStore');
var ApiUtil = require('../utils/apiUtil');
var Checkboxes = require('./checkbox');
var Link = require('react-router').Link;
var History = require('react-router').History;

var EmailPreviewTable = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { emails: null };
  },

  componentDidMount: function () {
    // if (!this.props.route.path) {
    //   this.context.router.push('inbox/');
    // }

    this.emailStoreToken = EmailStore.addListener(this._onChange);
    this.markStoreToken = MarkStore.addListener(this._onChange);
    ApiUtil.fetchEmails(this.props.route.path, 1, this.props.location.query);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchEmails(newProps.route.path, 1, newProps.location.query);
  },

  componentWillUnmount: function () {
    this.emailStoreToken.remove();
    this.markStoreToken.remove();
  },

  nextPage: function () {
    var meta = EmailStore.meta();
    ApiUtil.fetchEmails(this.props.route.path, meta.page + 1, this.props.location.query);
  },

  previousPage: function () {
    var meta = EmailStore.meta();
    ApiUtil.fetchEmails(this.props.route.path, meta.page - 1, this.props.location.query);
  },

  _onChange: function () {
    this.setState({ emails: EmailStore.all().sort(
      function(x, y) {
        return Date.parse(y.created_at) - Date.parse(x.created_at);}
      )
    });
  },

  render: function () {
    var emails = this.state.emails || [];
    var emailPreviews = emails.map(function (email, i) {
      var path = (this.props.location.pathname = "/" ? '/inbox/' : this.props.location.pathname ) + email.id;
      return (
        <div key={ i } className={'email-preview-item group' + (MarkStore.includes(email.id) ? ' email-marked' : ' email-unmarked') + (email.read ? ' email-read' : ' email-unread')}>
          <Checkboxes email={email}/>
          <Link className={'email-preview-sender email-preview-link' + (email.read ? ' normal' : ' bold')} to={path}>{ SessionStore.currentUser().gollygmail === email.from_email ? 'me' : email.from_name }</Link>
          <Link
            className={'email-preview-subject email-preview-link'  + (email.read ? ' normal' : ' bold')}
            to={path}>{ email.subject ? (email.subject.length > 80 ? email.subject.slice(0, 80) + '...' : email.subject) : '(no subject)' }</Link>
          <span className={ (email.body) ? 'subject-dash-body' : 'hidden' }>-</span>
          <Link className='email-preview-body email-preview-link' to={path}>{ email.subject.length > 80 ? email.body.slice(0, 20) : email.body.slice(0, (100 - email.subject.length)) }</Link>
          <Link className='email-preview-link end-content' to={path}></Link>
        </div>
      );
    }.bind(this));

    if (!this.state.emails) {
      emailPreviews = <p>Loading emails...</p>;
    } else if (emailPreviews.length === 0) {
      emailPreviews = <p>This mailbox is empty</p>;
    }

    var meta = EmailStore.meta();
    var firstOnPage = (meta.total_count > 0) ? (((meta.page - 1) * 50) + 1) : 0;
    var emailsOnPage = meta.total_count > (meta.page * 50) ? (meta.page * 50) : meta.total_count;
    var prevDisabled = (meta.page === 1);
    var nextDisabled = (meta.page * 50 >= meta.total_count);
    return (
      <section className="email-previews-table-container">
        {this.props.children}
        <nav className='header-navbar group'>
          <div className='navbar-left-buttons'>
            <div className='select'></div>
            <div className='refresh'></div>
            <div className='more-options'></div>
          </div>
          <div className='page-count navbar-right-buttons group'>
            <button className={'nav-button next-page-button'} onClick={this.nextPage} disabled={nextDisabled}>N</button>
            <button className={'nav-button previous-page-button'} onClick={this.previousPage} disabled={prevDisabled}>P</button>
            <span className='pages-and-emails group'>
              <p className='first-on-page'>{ firstOnPage }</p>
              <p className='dash-between'>-</p>
              <p className='total-on-page'>{ emailsOnPage }</p>
              <p className='just-of'>of</p>
              <p className='total-emails-in-database'>{meta.total_count}</p></span>
          </div>
        </nav>
        <div className='email-previews-table'>
          { emailPreviews }
        </div>

      </section>
    );
  }
});

// <p className='pages-and-emails'>{ firstOnPage + '-' + emailsOnPage} + ' ' <p className='just-of'>of</p> ' ' + {meta.total_count}</p>
// <p className='pages-left'>{ firstOnPage + '-' + emailsOnPage}</p>
// <p className='just-of'>' of '</p>
// <p className='pages-right'>{meta.total_count}</p>

module.exports = EmailPreviewTable;
