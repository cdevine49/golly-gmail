var React = require('react');
var EmailStore = require('../stores/emailStore');
var ApiUtil = require('../utils/apiUtil');
var History = require('react-router').History;

var EmailDetails = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: null,
      imageUrl: null,
      imageFile: null
    };
  },

  componentDidMount: function() {
    this.emailStoreToken = EmailStore.addListener(this._onChange);
    // ApiUtil.fetchEmails(this.props.route.path.slice(0, -4), 1, this.props.location.query);
    // fetching all emails kind of hacky, fix later
    ApiUtil.fetchEmail(this.props.route.path.slice(0, -4), parseInt(this.props.params.id)); //Experiment
  },

  componentWillUnmount: function () {
    this.emailStoreToken.remove();
  },

  _onChange: function () {
    if (EmailStore.find(this.props.params.id) && !EmailStore.find(this.props.params.id).read) {
      ApiUtil.toggleRead(EmailStore.find(this.props.params.id));    }
    if (EmailStore.find(this.props.params.id)) {
      this.setState({ email: EmailStore.find(this.props.params.id) });
    } else {
      this.context.router.push(this.props.route.path.slice(0, -4));
    }
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchEmail(this.props.route.path.slice(0, -4), newProps.params.id);
    // if (EmailStore.find(newProps.params.id)) {
      // this.setState({ email: EmailStore.find(newProps.params.id) });
      // won't work for older emails because of hacky fetch all emails
    // }
    // if (EmailStore.find(newProps.params.id) && !EmailStore.find(newProps.params.id).read) {
      // ApiUtil.toggleRead(EmailStore.find(newProps.params.id));
    // }
  },


  // <div className='navbar-left-buttons'>
  //   <div className='select'></div>
  //   <div className='refresh'></div>
  //   <div className='more-options'></div>
  // </div>
  // <div className='page-count navbar-right-buttons group'>
  //   <button className={'nav-button next-page-button'} onClick={this.nextPage} disabled={nextDisabled}>N</button>
  //   <button className={'nav-button previous-page-button'} onClick={this.previousPage} disabled={prevDisabled}>P</button>
  //   <span className='pages-and-emails group'>
  //     <p className='first-on-page'>{ firstOnPage }</p>
  //     <p className='dash-between'>-</p>
  //     <p className='total-on-page'>{ emailsOnPage }</p>
  //     <p className='just-of'>of</p>
  //     <p className='total-emails-in-database'>{meta.total_count}</p></span>
  //   </div>
  render: function() {
    if (!this.state.email) {
      return <p>Loading the email...</p>;
    }
    return (
      <section className="email-details-container">
        <nav className='header-navbar group'>
        </nav>
        <section className='email-detail-view'>
          <h2 className='email-detail-subject'>{ this.state.email.subject }</h2>
          <p className='email-detail-from-email'>{ this.state.email.from_email }</p>
          <h2 className='email-detail-body'>{ this.state.email.body }</h2>
          <a href={this.state.email.image_url}><img className={this.state.email.image_url ? 'email-attachment-preview' : 'hidden'} src = {this.state.email.image_url}/></a>
        </section>
      </section>
    );
  }

});

module.exports = EmailDetails;
