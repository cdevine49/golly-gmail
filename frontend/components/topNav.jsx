var React = require('react');
var Search = require('./search.jsx');


var TopNav = React.createClass({

  getInitialState: function() {
    return {
      anySelected: false
    };
  },

  render: function() {
    return (
      <header className='header group'>
        <nav className='topnav-above group'>
          <div />
        </nav>
      </header>
    );
  }

});

module.exports = TopNav;
