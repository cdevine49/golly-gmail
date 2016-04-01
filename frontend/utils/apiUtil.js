var ApiActions = require('../actions/apiActions');

ApiUtil = {

  fetchEmails: function() {
    $.ajax({
      type: 'GET',
      url: 'api/emails',
      datatype: 'json',
      success: function (emails) {
        ApiActions.receiveEmails(emails);
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      }
    });
  },

  // fetchEmailChain: function(id) {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'api/email_chains',
  //     datatype: 'json',
  //     data: {mailbox_id: id},
  //     success: function (emails) {
  //       ApiActions.receiveEmailChain(chain);
  //     },
  //     error: function () {
  //       console.log('ApiUtil#fetchEmailChains error');
  //     }
  //   });
  // },

};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
