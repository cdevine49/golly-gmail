var ApiActions = require('../actions/apiActions');

ApiUtil = {

  // fetchUsername: function (username) {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'api/users',
  //     datatype: 'json',
  //     data: { username: username },
  //     success: function (username) {
  //       SignInActions.receiveUserName(username);
  //     },
  //     error: function () {
  //       console.log('ApiUtil#fetchUsername error');
  //     }
  //   });
  // },


  fetchAllEmails: function () {
    $.ajax({
      type: 'GET',
      url: 'api/emails',
      datatype: 'json',
      success: function (emails) {
        ApiActions.receiveAllEmails(emails);
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      }
    });
  }

};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
