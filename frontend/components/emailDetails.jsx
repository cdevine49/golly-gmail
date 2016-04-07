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
      email: null
    };
  },

  componentDidMount: function() {
    this.emailStoreToken = EmailStore.addListener(this._onChange);
    ApiUtil.fetchEmails(this.props.route.path.slice(0, -4), 1, this.props.location.query);
    // fetching all emails kind of hacky, fix later
  },

  componentWillUnmount: function () {
    this.emailStoreToken.remove();
  },

  _onChange: function () {
    debugger
    if (EmailStore.find(this.props.params.id)) {
      this.setState({ email: EmailStore.find(this.props.params.id) });
    }
    if (EmailStore.find(this.props.params.id) && !EmailStore.find(this.props.params.id).read) {
      ApiUtil.toggleRead(EmailStore.find(this.props.params.id));    }
  },

  componentWillReceiveProps: function (newProps) {
    if (EmailStore.find(newProps.params.id)) {
      this.setState({ email: EmailStore.find(newProps.params.id) });
      // won't work for older emails because of hacky fetch all emails
    }
    if (EmailStore.find(newProps.params.id) && !EmailStore.find(newProps.params.id).read) {
      ApiUtil.toggleRead(EmailStore.find(newProps.params.id));
    }
  },

  render: function() {
    debugger
    if (!this.state.email) {
      return <p>Loading the email...</p>;
    }

    return (
      <section className='email-detail-view'>
        <h2>{ this.state.email.subject }</h2>
        <h2>{ this.state.email.body }</h2>
        <a className={this.state.email.image_url ? 'email-attachment-download' : 'hidden'} href={this.state.email.image_url }>attachment</a>
      </section>
    );
  }

});

module.exports = EmailDetails;
