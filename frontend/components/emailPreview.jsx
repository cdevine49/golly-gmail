var React = require('react');
var PropTypes = React.PropTypes;

var EmailPreviews = React.createClass({

  // getInitialState: function() {
  //   return {
  //     selected: false,
  //   };
  // },

  // componentDidMount: function() {
  //   this.singleEmailListener = EmailStore.addListener(this._onChange);
  // },
  //
  // componentWillUnmount: function () {
  //   this.singleEmailListener.remove();
  // },

  // starred: this.props.email.starred,
  // important: this.props.email.important,

  render: function() {
    return (
      <main>
        <form className="email-attribute-form">
          <input type="checkbox"
            id="attributes"
            name='email[checked]'
            defaultChecked={this.props.email.checked} >
          </input>
          <input type="checkbox"
            id="attributes"
            name='email[starred]'
            defaultChecked={this.props.email.checked} >
          </input>
          <input type="checkbox"
            id="attributes"
            name='email[important]'
            defaultChecked={this.props.email.checked} >
          </input>
        </form>
        <ul>
          <li>Subject: {this.props.email.subject}</li>
          <li>Body: {this.props.email.body}</li>
        </ul>
      </main>
    );
  }

});

module.exports = EmailPreviews;
