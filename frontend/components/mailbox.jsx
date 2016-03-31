var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SideNav = require('./sideNav.jsx');
var EmailStore = require('../stores/emailStore');
var EmailPreview = require('./emailPreview');


var Mailbox = React.createClass({

  getInitialState: function() {
    return {
      mailbox_id: 1
    };
  },

  handleChangeMailbox: function (id) {
    this.setState({mailbox_id: id});
  },

  render: function () {
    var mailbox = this.props.mailboxes.filter(function(mailbox){
      return mailbox.id === id;
    })[0];

    return (
      <div>
        <SideNav
          mailboxes={this.props.mailboxes}
          onClick={this.handleChangeMailbox}/>
        <Mailbox
          key={mailbox.id}
          emails={mailbox.emails} />
      </div>
    );
  }

  // getInitialState: function() {
  //   return {
  //     emailPreviews: EmailStore.all()
  //   };
  // },
  //
  // componentDidMount: function() {
  //   this.newEmailListener = EmailStore.addListener(this._onChange);
  //   ApiUtil.fetchAllEmails();
  // },
  //
  // componentWillUnmount: function () {
  //   this.newEmailListener.remove();
  // },
  //
  // _onChange: function () {
  //   this.setState({emailPreviews: EmailStore.all()});
  // },
  //
  // render: function() {
  //
  //   return (
  //
  //     <div>
  //       {(this.state.emailPreviews.length > 0 ?
  //         <ul>
  //           {this.state.emailPreviews.map(function (email) {
  //             return <EmailPreview
  //               key={email.id}
  //               from={email.from}
  //               to={email.to}
  //               subject={email.subject}
  //               body={email.from} />;
  //           })}
  //         </ul> :
  //         <article>
  //           <p>Your Primary tab is empty.</p>
  //           <p>Personal messages and messages that don’t appear in other tabs will be shown here.</p>
  //         </article>
  //       )}
  //
  //     </div>
  //   );
  // }

});

module.exports = Mailbox;
