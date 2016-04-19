var React = require('react');
var TopNav = require('./topNav');
var SideNav = require('./sideNav');
var ComposeForm = require('./composeForm');
var EmailStore = require('../stores/emailStore');

var ClickActions = require('../actions/clickActions');

var App = React.createClass({

  getInitialState: function() {
    return {
      composeForm: false,
      draft: null
    };
  },

  componentDidMount: function() {
    this.emailStoreToken = EmailStore.addListener(this._onCreate);
  },

  componentWillUnMount: function () {
    this.emailStoreToken.remove();
  },

  _onCreate: function () {
    this.setState({draft: EmailStore.newDraft()});
  },

  _createDraft: function () {
    if (!this.state.composeForm) {
      var formData = new FormData();
      formData.append("email[subject]", '');
      formData.append("email[body]", '');
      formData.append("email[to]", '');
      ApiUtil.createEmail(formData, this._openForm);
    } else {
      this._openForm();
    }
  },

  _openForm: function () {
    this.setState({ composeForm: !this.state.composeForm });
  },

  _click: function (e) {
    ClickActions.receiveClick();
  },

  render: function() {

    return (
      <main onClick={this._click}>
        <TopNav />
        <SideNav onCompose={this._createDraft} />
        {this.state.composeForm ? <ComposeForm draft={this.state.draft}/> : ''}
        {this.props.children}
      </main>
    );
  }

});

module.exports = App;
