var React = require('react');
var PropTypes = React.PropTypes;

var ReportSpam = React.createClass({

  render: function() {
    return (
      <li>
        <button className='report-spam'>RS</button>
      </li>
    );
  }

});

module.exports = ReportSpam;
