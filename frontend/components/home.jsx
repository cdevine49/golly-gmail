var React = require('react');
var TopNav = require('./topNav.jsx');
var SideNav = require('./sideNav.jsx');

// var Labels = require('./labels.jsx');
var Mailbox = require('./mailbox.jsx');

var Home = React.createClass({

  render: function() {
    return (
      <div>
        <SideNav mailboxes={mailboxes}/>
        <main className='content group'>
          <Mailbox mailboxes={mailboxes}/>
        </main>
      </div>
    );
  }

  // <TopNav />
  // <Labels />
});

module.exports = Home;
