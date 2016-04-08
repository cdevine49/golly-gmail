var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ComposeForm = React.createClass({

  getInitialState: function() {
    return {
      minimized: false,
      subject: "",
      body: "",
      to: "",
      imageUrl: null,
      imageFile: null
    };
  },

  handleSubjectChange: function (e) {
    this.setState({subject: e.currentTarget.value});
  },

  handleBodyChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  handleToChange: function (e) {
    this.setState({to: e.currentTarget.value});
  },

  _handleMinimize: function () {
    this.setState({minimized: !this.state.minimized});
  },

  handleFileChange: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      this.setState({ imageUrl: reader.result, imageFile: file });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.resetFile();
    }
  },

  resetForm: function () {
    this.setState({
      subject: "",
      body: "",
      to: "",
      imageUrl: null,
      imageFile: null
    });
  },

  createEmail: function (e) {
    e.preventDefault();
    if (this.state.to.slice(-15) === "@gollygmail.com") {
      var formData = new FormData();
      formData.append("email[subject]", this.state.subject);
      formData.append("email[body]", this.state.body);
      formData.append("email[to]", this.state.to);
      if (this.state.imageFile) {
        formData.append("email[image]", this.state.imageFile);
      }
      ApiUtil.createEmail(formData, this.resetForm.bind(this));
      this.props.onClose();
    } else {
      console.log("Not a valid email");
    }
  },

  render: function() {
    return (
      <section className='compose-form-container'>
        <div className='compose-form-header group'>
          <button className='compose-form-header-minimize' onClick={this._handleMinimize}>New Message</button>
          <button className='compose-form-header-close' onClick={this.props.onClose}>X</button>
        </div>
        <form onSubmit={this.createEmail} className={!this.state.minimized ? 'compose-form' : 'hidden'}>
          <input
            type="textarea"
            placeholder="Recipient"
            className='compose-form-recipient'
            onChange={this.handleToChange}
            value={this.state.to}
            />
        <br/>
          <input
            type="text"
            placeholder="Subject"
            className='compose-form-subject'
            onChange={this.handleSubjectChange}
            value={this.state.subject}
            />
        <br/>
        <label>
          <textarea
            className='compose-form-body'
            onChange={this.handleBodyChange}
            value={this.state.body}></textarea>
        </label>
        <div className='compose-form-footer'>
          <button className='compose-form-button'>Send</button>
          <input
            type='file'
            className='compose-form-image-file'
            onChange={this.handleFileChange}>
          </input>

        </div>
        </form>
      </section>
    );
  }

});

module.exports = ComposeForm;
