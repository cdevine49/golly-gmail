var React = require('react');
var SelectorDropDown = require('./selectorDropdown');
var Refresh = require('./refresh');
var MoreOptions = require('./moreOptions');

var TopNav = React.createClass({

  render: function() {
    return (
      <ul>
        <SelectorDropDown />
        <Refresh />
        <MoreOptions />
      </ul>
    );
  }

});

module.exports = TopNav;
