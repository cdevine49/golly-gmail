var React = require('react');
var TopNav = require('./topNav');
var SideNav = require('./sideNav');
var ComposeForm = require('./composeForm');
var DraftStore = require('../stores/draftStore');

var ClickActions = require('../actions/clickActions');

var App = React.createClass({

  getInitialState: function() {
    return {
      composeForms: [],
      draft: null
    };
  },

  componentDidMount: function() {
    this.draftStoreToken = DraftStore.addListener(this._onCreate);
  },

  componentWillUnMount: function () {
    this.draftStoreToken.remove();
  },

  _onCreate: function () {
    this.setState({draft: DraftStore.newDraft()});
  },

  _createDraft: function () {
      this.setState({ composeForms: this.state.composeForms.concat([<ComposeForm key={this.state.composeForms.length} close={this._closeForm.bind(null, this.state.composeForms.length)} draft={null} />]) });
  },

  _closeForm: function (index) {
    this.setState({ composeForms: this.state.composeForms.slice(0, index).concat(this.state.composeForms.slice(index + 1)) });
  },

  _click: function (e) {
    ClickActions.receiveClick();
  },

_updateDraft: function (email) {
  this.setState({ composeForms: this.state.composeForms.concat([<ComposeForm key={this.state.composeForms.length} close={this._closeForm.bind(null, this.state.composeForms.length)} draft={email} />]) });
},

  render: function() {
    var children = React.Children.map(this.props.children, function(child) {
    return React.cloneElement(child, {
      updateDraft: this._updateDraft});
    }.bind(this));

    return (
      <main onClick={this._click}>
        <TopNav />
        <SideNav onCompose={this._createDraft} />
        {this.state.composeForms}
        <div>{children}</div>
      </main>
    );
  }

});

module.exports = App;
