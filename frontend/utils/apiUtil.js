
ApiUtil = {
  fetchEmails: function () {
    $.ajax({
      type: 'GET',
      url: 'api/emails',
      datatype: 'json',
      success: function (emails) {
        EmailActions.receiveAllEmails(emails);
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      }
    });
  }

};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
