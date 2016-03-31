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
      <header className='header group'>
        <nav className='topnav-above group'>
          <h1 className='topnav-logo'>GollyGmail</h1>
          <Search />
        </nav>
        <nav className='topnav-below group'>
          <ul className='topnav-buttons'>
            { this.state.anySelected ?
              [<SelectorDropDown />,
              <Refresh />,
              <MoreOptions />] :
              [
                <SelectorDropDown />,
                <Archive />,
                <ReportSpam />,
                <Trash />,
                <MoveTo />,
                <Labels />,
                <MoreOptions />
              ]
            }
            </ul>
          </nav>
      </header>
    );
  }

});

module.exports = TopNav;
