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
      sent: false,
      imageUrl: null,
      imageFile: null
    };
  },

  componentWillUnmount: function () {
    clearInterval(this.draftTimer);
  },

  _handleMinimize: function () {
    this.setState({minimized: !this.state.minimized});
  },

  updateEmail: function (id, sent, e) {
    if (sent) { e.preventDefault(); }
    if (this.state.to.slice(-15) === "@gollygmail.com" || !sent) {
      var formData = new FormData();
      formData.append("email[subject]", this.state.subject);
      formData.append("email[body]", this.state.body);
      formData.append("email[to]", this.state.to);
      formData.append("email[sent]", sent);
      if (this.state.imageFile) {
        formData.append("email[image]", this.state.imageFile);
      }
      if (id && sent) {
        ApiUtil.updateEmail(formData, id, this.props.close);
        formData.append("email[received]", true);
        ApiUtil.createEmail(formData);
      } else if (id) {
        ApiUtil.updateEmail(formData, id);
      } else if (sent) {
        ApiUtil.createEmail(formData);
        formData.append("email[received]", true);
        ApiUtil.createEmail(formData, this.props.close);
      } else {
        ApiUtil.createEmail(formData, this._setId);
      }
    } else {
      console.log("Not a valid email");
    }
    clearInterval(this.draftTimer);
    this.draftTimer = 0;
  },

  _setId: function (id) {
    this.setState({ id: id});
  },

  _closeForm: function (e) {
    if (this.draftTimer) {
      this.updateEmail(this.state.id, false, e);
    }
    this.props.close();
  },

  _handleChange: function (option, e) {
    switch (option) {
      case "To":
        this.setState({to: e.currentTarget.value});
        break;
      case "Subject":
        this.setState({subject: e.currentTarget.value});
        break;
      case "Body":
        this.setState({body: e.currentTarget.value});
        break;
      case "File":
        var file = e.currentTarget.files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
          this.setState({ imageUrl: reader.result, imageFile: file });
          // ApiUtil.updateEmail(this.state.Draftid, { imageUrl: reader.result, imageFile: file });
        }.bind(this);

        if (file) {
          reader.readAsDataURL(file);
        } else {
          this.resetFile();
        }
        break;
    }

    clearInterval(this.draftTimer);
    this.draftTimer = setInterval(this.updateEmail.bind(null, this.state.id, false), 3000);
  },

  render: function() {
    return (
      <section className='compose-form-container'>
        <div className='compose-form-header group'>
          <button className='compose-form-header-minimize' onClick={this._handleMinimize}>New Message</button>
          <button className='compose-form-header-close' onClick={this._closeForm}>X</button>
        </div>
        <form onSubmit={this.updateEmail.bind(null, this.state.id, true)} className={!this.state.minimized ? 'compose-form' : 'hidden'}>
          <input
            type="textarea"
            placeholder="Recipient"
            className='compose-form-recipient'
            onChange={this._handleChange.bind(null, "To")}
            value={this.state.to}
            />
        <br/>
          <input
            type="text"
            placeholder="Subject"
            className='compose-form-subject'
            onChange={this._handleChange.bind(null, "Subject")}
            value={this.state.subject}
            />
        <br/>
        <label>
          <textarea
            className='compose-form-body'
            onChange={this._handleChange.bind(null, "Body")}
            value={this.state.body}></textarea>
        </label>
        <div className='compose-form-footer'>
          <button className='compose-form-button'>Send</button>
          <input
            type='file'
            className='compose-form-image-file'
            onChange={this._handleChange.bind(null, "File")}>
          </input>

        </div>
        </form>
      </section>
    );
  }

});

module.exports = ComposeForm;
