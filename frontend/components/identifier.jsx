// var React = require('react');
// var PropTypes = React.PropTypes;
// var ApiUtil = require('../utils/apiUtil');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
//
//
// var Identifier = React.createClass({
//   mixins: [LinkedStateMixin],
//
//   getInitialState: function() {
//     return {
//       username: null
//     };
//   },
//
//   enterUsername: function (e) {
//     e.preventDefault();
//     ApiUtil.fetchUsername(this.state.username);
//   },
//
//   render: function() {
//     return (
//       <form role="form">
//         <input type='text' valueLink={this.linkState('username')} placeholder="Enter your Email"/>
//         <button type='submit' onClick={this.enterUsername}>Next</button>
//       </form>
//     );
//   }
//
// });
//
// module.exports = Identifier;
