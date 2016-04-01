var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ComposeForm = React.createClass({

  getInitialState: function() {
    return {
      subject: "",
      body: "",
      to: 3, //THIS NEEDS TO BE CHANGED WHEN ALLOWING 'REAL' EMAILING
    };
  },

  handleSubjectChange: function (e) {
    this.setState({subject: e.currentTarget.value});
  },

  handleBodyChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  createEmail: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("email[subject]", this.state.subject);
    formData.append("email[body]", this.state.body);
    formData.append("email[to]", this.state.to);
    ApiUtil.createEmail(formData);
    this.setState({ subject: '', body: '' });
  },

  render: function() {
    return (
      <form onSubmit={this.createEmail}>
        <label>Subject
            <input
              type="text"
              placeholder="Subject"
              onChange={this.handleSubjectChange}
              value={this.state.subject}
              />
          </label>
          <br/>
          <label>Body
            <input
              type="textarea"
              onChange={this.handleBodyChange}
              value={this.state.body}
              />
          </label>
          <button>Submit</button>
      </form>
    );
  }

  // render: function () {
  //   return(
  //     <li></li>
  //   );
  // }

});

module.exports = ComposeForm;
