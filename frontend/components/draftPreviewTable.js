var React = require('react');
var DraftStore = require('../stores/draftStore');
var MarkStore = require('../stores/markStore');
var SessionStore = require('../stores/sessionStore');
var ApiUtil = require('../utils/apiUtil');
var Checkboxes = require('./checkbox');
var Link = require('react-router').Link;
var History = require('react-router').History;

var DraftPreviewTable = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { drafts: null };
  },

  componentDidMount: function () {
    this.draftStoreToken = DraftStore.addListener(this._onChange);
    this.markStoreToken = MarkStore.addListener(this._onChange);
    ApiUtil.fetchDrafts(this.props.route.path, 1, this.props.location.query);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchDrafts(newProps.route.path, 1, newProps.location.query);
  },

  componentWillUnmount: function () {
    this.draftStoreToken.remove();
    this.markStoreToken.remove();
  },

  nextPage: function () {
    var meta = DraftStore.meta();
    ApiUtil.fetchDrafts(this.props.route.path, meta.page + 1, this.props.location.query);
  },

  previousPage: function () {
    var meta = DraftStore.meta();
    ApiUtil.fetchDrafts(this.props.route.path, meta.page - 1, this.props.location.query);
  },

  _onChange: function () {
    this.setState({ drafts: DraftStore.all().sort(
      function(x, y) {
        return Date.parse(y.created_at) - Date.parse(x.created_at);}
      )
    });
  },

  render: function () {
    var drafts = this.state.drafts || [];
    var draftPreviews = drafts.map(function (email, i) {
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

    if (!this.state.drafts) {
      emailPreviews = <p>Loading drafts...</p>;
    } else if (emailPreviews.length === 0) {
      emailPreviews = <p>This mailbox is empty</p>;
    }

    var meta = DraftStore.meta();
    var firstOnPage = (meta.total_count > 0) ? (((meta.page - 1) * 50) + 1) : 0;
    var draftsOnPage = meta.total_count > (meta.page * 50) ? (meta.page * 50) : meta.total_count;
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
              <p className='total-on-page'>{ draftsOnPage }</p>
              <p className='just-of'>of</p>
              <p className='total-emails-in-database'>{meta.total_count}</p></span>
          </div>
        </nav>
        <div className='email-previews-table'>
          { draftPreviews }
        </div>

      </section>
    );
  }
});

// <p className='pages-and-drafts'>{ firstOnPage + '-' + draftsOnPage} + ' ' <p className='just-of'>of</p> ' ' + {meta.total_count}</p>
// <p className='pages-left'>{ firstOnPage + '-' + draftsOnPage}</p>
// <p className='just-of'>' of '</p>
// <p className='pages-right'>{meta.total_count}</p>

module.exports = DraftPreviewTable;
