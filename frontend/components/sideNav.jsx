var React = require('react');

var SideNav = React.createClass({

  openComposeForm: function () {

  },

  handleClick: function () {

  },

  render: function() {
    return (
      <nav className='sidenav'>
        <button className='compose-button'>Compose</button>
        <ul className='sidenav-links'>
          <li><a href="#" onClick={this.handleClick}>Inbox</a></li>
          <li><a href="#" onClick={this.handleClick}>Starred</a></li>
          <li><a href="#" onClick={this.handleClick}>Important</a></li>
          <li><a href="#" onClick={this.handleClick}>Drafts</a></li>
        </ul>
      </nav>
    );
  }

});

module.exports = SideNav;
