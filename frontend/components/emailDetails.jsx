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
    ApiUtil.fetchEmails();
  },

  componentWillUnmount: function () {
    this.emailStoreToken.remove();
  },

  _onChange: function () {
    this.setState({ email: EmailStore.find(this.props.params.id) });
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ email: EmailStore.find(newProps.params.id) });
  },

  render: function() {
    if (!this.state.email) {
      return <p>Loading the email...</p>;
    }

    return (
      <section className='email-detail-view'>
        <h2>{ this.state.email.subject }</h2>
        <h2>{ this.state.email.body }</h2>
        <a href={this.state.email.image_url }>attachment</a>
      </section>
    );
  }

});

module.exports = EmailDetails;
