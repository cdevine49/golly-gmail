var React = require('react');
var MarkActions = require('../actions/markActions');
var MarkStore = require('../stores/markStore');
var EmailStore = require('../stores/emailStore');

var Checkboxes = React.createClass({

  getInitialState: function() {
    return {
      marked: MarkStore.includes(this.props.email.id)
    };
  },

  componentDidMount: function() {
    this.emailStoreToken = EmailStore.addListener(this._onChange);
    this.markStoreToken = MarkStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.emailStoreToken.remove();
    this.markStoreToken.remove();
  },

  _onChange: function () {
    this.setState({ marked: MarkStore.includes(this.props.email.id) });
    // if (this.props.email.id === 319 || this.props.email.id === 185) {
    //   debugger
    // }
  },

  _marked: function (e) {
    // e.preventDefault();
    MarkActions.markEmail(this.props.email);
    // ApiUtil.toggleMarked(this.props.email);
  },

  _starred: function (e) {
    e.preventDefault();
    ApiUtil.toggleStarred(this.props.email);
  },

  _important: function (e) {
    e.preventDefault();
    ApiUtil.toggleImportant(this.props.email);
  },

  // checked={this.props.email.marked}></input></span>
  // if (this.props.email.id === 319 || this.props.email.id === 185) {
  //   console.log(MarkStore.all());
  //   debugger
  // }
  render: function() {
    return (
      <div>
        <span className='marked-box'><input
          type='checkbox'
          onChange={this._marked}
          checked={this.state.marked}></input></span>
        <span className='starred-box'><input
           type='checkbox'
           onChange={this._starred}
           checked={this.props.email.starred}></input></span>
        <span className='important-box'><input
          type='checkbox'
          onChange={this._important}
          checked={this.props.email.important}></input></span>
      </div>
    );
  }

});

module.exports = Checkboxes;
