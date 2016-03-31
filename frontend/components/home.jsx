var React = require('react');
var TopNav = require('./topNav.jsx');
var SideNav = require('./sideNav.jsx');
// var Labels = require('./labels.jsx');
var Inbox = require('./inbox.jsx');

var Home = React.createClass({

  render: function() {
    return (
      <div>
        <TopNav />
        <main className='content group'>
          <SideNav />
          <Inbox />
        </main>
      </div>
    );
  }

  // <SideNav />
  // <Labels />
});

module.exports = Home;
