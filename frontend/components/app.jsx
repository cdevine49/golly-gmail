var React = require('react');
var TopNav = require('./topNav');
var SideNav = require('./sideNav');

var App = React.createClass({

  render: function() {
    return (
      <main>
        <TopNav />
        <SideNav />
        {this.props.children}
      </main>
    );
  }

});

module.exports = App;
