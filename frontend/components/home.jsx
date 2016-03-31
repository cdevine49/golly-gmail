var React = require('react');
var TopNav = require('./topNav.jsx');

// var Labels = require('./labels.jsx');
var Mailbox = require('./mailbox.jsx');

var Home = React.createClass({

  render: function() {
    return (
      <div>
        <TopNav />
        <SideNav mailboxes={mailboxes}/>
        <main className='content group'>
          <Mailbox mailboxes={mailboxes}/>
        </main>
      </div>
    );
  }

  // <Labels />
});

module.exports = Home;
