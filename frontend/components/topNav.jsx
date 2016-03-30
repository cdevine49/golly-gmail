var React = require('react');
var SelectorDropDown = require('./selectorDropdown');
var Refresh = require('./refresh');
var MoreOptions = require('./moreOptions');

var TopNav = React.createClass({

  getInitialState: function() {
    return {
      anySelected: false
    };
  },

  render: function() {
    return (
      <ul>
        { this.state.anySelected ?
        [<SelectorDropDown />,
        <Refresh />,
        <MoreOptions />] :
        [
          <SelectorDropDown />,
          <MoreOptions />,
          <Archive />,
          <ReportSpam />,
          <Trash />,
          <MoveTo />,
          <Labels />,
        ]
        }
      </ul>
    );
  }

});

module.exports = TopNav;
