var React = require('react')
var ReactDOM = require('react-dom')

var React = require('react');
var PropTypes = React.PropTypes;

var Gmail = React.createClass({

  render: function() {
    return (
      <div>Working</div>
    );
  }

});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Gmail />,
    document.getElementById('root')
  );
});

module.exports = Gmail;
