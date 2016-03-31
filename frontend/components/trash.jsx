var React = require('react');
var PropTypes = React.PropTypes;

var Trash = React.createClass({

  render: function() {
    return (
      <li>
        <button className='trash'>TR</button>
      </li>
    );
  }

});

module.exports = Trash;
