var React = require('react');
var ComposeForm = require('./composeForm.jsx');

var SideNav = React.createClass({

  getInitialState: function() {
    return {
      formOpen: false
    };
  },

  _composeForm: function () {
    this.setState({formOpen: !this.state.formOpen});
  },

  handleClick: function () {

  },

  render: function() {

    return (
      <nav className='sidenav'>
        <button className='compose-button' onClick={this._composeForm}>Compose</button>
        <ul className='sidenav-links'>
        </ul>
        {this.state.formOpen ? <ComposeForm onSubmit={this._composeForm}/> : ''}
      </nav>
    );
  }

});
// className='compose-form' formOpen={this.state.formOpen}
module.exports = SideNav;
