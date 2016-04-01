var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ComposeForm = React.createClass({

  getInitialState: function() {
    return {
      subject: "",
      body: "",
      // to: null,
      // from: SessionStore.current_user.id
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

    ApiUtil.createEmail();
  },

  render: function() {
    return (
      <form onSubmit={this.createEmail}>
        <label>Subject
            <input
              type="text"
              placeholder="Subject"
              onChange={this.handleSubjectChange}
              />
          </label>
          <br/>
          <label>Body
            <input
              type="textarea"
              onChange={this.handleBodyChange}
              />
          </label>
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
