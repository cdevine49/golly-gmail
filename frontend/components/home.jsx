var React = require('react');
// var Search = require('./search.jsx');
var TopNav = require('./topNav.jsx');
// var SideNav = require('./sideNav.jsx');
// var Labels = require('./labels.jsx');
var Inbox = require('./inbox.jsx');

var Home = React.createClass({

  render: function() {
    return (
      <div>
        <TopNav />
        <Inbox />
      </div>
    );
  }

  // <Search />
  // <SideNav />
  // <Labels />
});

module.exports = Home;