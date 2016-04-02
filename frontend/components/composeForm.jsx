var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ComposeForm = React.createClass({

  getInitialState: function() {
    return {
      subject: "",
      body: "",
      to: ""
    };
  },

  handleSubjectChange: function (e) {
    this.setState({subject: e.currentTarget.value});
  },

  handleBodyChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  handleToChange: function (e) {
    this.setState({to: e.currentTarget.value});
  },

  createEmail: function (e) {
    e.preventDefault();
    if (this.state.to.slice(-15) === "@gollygmail.com") {
      var formData = new FormData();
      formData.append("email[subject]", this.state.subject);
      formData.append("email[body]", this.state.body);
      formData.append("email[to]", this.state.to);
      ApiUtil.createEmail(formData);
      this.setState({ subject: '', body: '', to: '' });
      this.props.onSubmit();
    } else {
      console.log("Not a valid email");
    }
  },

  render: function() {
    return (
      <form onSubmit={this.createEmail}>
        <label>To:
            <input
              type="text"
              placeholder=""
              onChange={this.handleToChange}
              value={this.state.to}
              />
          </label>
          <br/>
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
