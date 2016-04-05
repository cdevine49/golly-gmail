var React = require('react');

var Checkboxes = React.createClass({

  // componentWillReceiveProps: function (newProps) {
  //
  // },

  _marked: function (e) {
    e.preventDefault();
    e.stopPropogation();
    ApiUtil.toggleMarked(this.props.email);
  },

  _starred: function (e) {
    e.preventDefault();
    e.stopPropogation();
    ApiUtil.toggleStarred(this.props.email);
  },

  _important: function (e) {
    e.preventDefault();
    e.stopPropogation();
    ApiUtil.toggleImportant(this.props.email);
  },

  render: function() {
    return (
      <div>
        <span className='marked-box'><input
          type='checkbox'
          onChange={this._marked}
          checked={this.props.email.marked}></input></span>
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
