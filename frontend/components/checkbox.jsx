var React = require('react');
var MarkActions = require('../actions/markActions');
var MarkStore = require('../stores/markStore');
var EmailStore = require('../stores/emailStore');

var Checkboxes = React.createClass({

  getInitialState: function() {
    return {
      marked: MarkStore.includes(this.props.email.id)
    };
  },

  componentDidMount: function() {
    this.emailStoreToken = EmailStore.addListener(this._onChange);
    this.markStoreToken = MarkStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.emailStoreToken.remove();
    this.markStoreToken.remove();
  },

  _onChange: function () {
    this.setState({ marked: MarkStore.includes(this.props.email.id) });
  },

  _marked: function (e) {
    MarkActions.markEmail(this.props.email);
  },

  _starred: function (e) {
    e.stopPropagation();
    ApiUtil.toggleStarred(this.props.email);
  },

  _important: function (e) {
    e.stopPropagation();
    ApiUtil.toggleImportant(this.props.email);
  },

  render: function() {
    return (
      <div>
        <span className='marked-box'><input
          type='checkbox'
          onChange={this._marked}
          checked={this.state.marked}></input></span>

        {this.props.email.starred ?
        <div className='starred-box starred'  onClick={this._starred}>★</div> :
        <div className='starred-box unstarred'  onClick={this._starred}>☆</div>}



        <div className={'important-box' + (this.props.email.important ? ' important' : ' unimportant')} onClick={this._important}>!</div>
      </div>
    );
  }

});

module.exports = Checkboxes;
