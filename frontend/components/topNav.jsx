var React = require('react');
var Search = require('./search.jsx');
var SelectorDropDown = require('./selectorDropdown');
var Refresh = require('./refresh');
var MoreOptions = require('./moreOptions');
var Archive = require('./archive');
var ReportSpam = require('./reportSpam');
var Trash = require('./trash');
var MoveTo = require('./moveto');
var Labels = require('./labels');

var TopNav = React.createClass({

  getInitialState: function() {
    return {
      anySelected: false
    };
  },

  render: function() {
    return (
      <header>
        <nav>
          <Search />
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
        </nav>
      </header>
    );
  }

});

module.exports = TopNav;
