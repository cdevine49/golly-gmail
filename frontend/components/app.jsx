var React = require('react');
var TopNav = require('./topNav');
var SideNav = require('./sideNav');
var ClickActions = require('../actions/clickActions');

var App = React.createClass({

  _click: function (e) {
    ClickActions.receiveClick();
  },

  render: function() {
    return (
      <main onClick={this._click}>
        <TopNav />
        <SideNav />
        {this.props.children}
      </main>
    );
  }

});

module.exports = App;
