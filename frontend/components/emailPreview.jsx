var React = require('react');
var PropTypes = React.PropTypes;

var EmailPreviews = React.createClass({

  getInitialState: function() {
    return {
      selected: false,
    };
  },

  componentDidMount: function() {
    this.singleEmailListener = EmailStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.singleEmailListener.remove();
  },


  render: function() {
    return (
      <main>
        <form className="email-attribute-form">
          <input type="checkbox"
            id="attributes"
            name='email[checked]'
            defaultChecked={this.props.checked} >
          </input>
          <input type="checkbox"
            id="attributes"
            name='email[starred]'
            defaultChecked={this.props.starred} >
          </input>
          <input type="checkbox"
            id="attributes"
            name='email[important]'
            defaultChecked={this.props.important} >
          </input>
        </form>
        <ul>
          <li>From: {this.props.from}</li>
          <li>Subject: {this.props.subject}</li>
          <li>Body: {this.props.body}</li>
        </ul>
      </main>
    );
  }

});

module.exports = EmailPreviews;
