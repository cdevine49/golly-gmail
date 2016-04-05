var ApiActions = require('../actions/apiActions');

ApiUtil = {

  fetchEmails: function(path, page) {
    debugger
    $.ajax({
      type: 'GET',
      url: 'api/emails',
      dataType: 'json',
      data: {path: path, page: page},
      success: function (emails) {
        debugger
        ApiActions.receiveEmails(emails);
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      }
    });
  },

  createEmail: function(formData, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/emails',
      processData: false,
      contentType: false,
      datatype: 'json',
      data: formData,
      success: function (email) {
        ApiActions.receiveEmail(email);
        callback && callback();
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      },
    });
  },

  toggleMarked: function(email) {
    $.ajax({
      type: 'PATCH',
      url: 'api/emails/' + email.id,
      datatype: 'json',
      data: {email: {marked: !email.marked}},
      success: function (email) {
        ApiActions.receiveEmail(email);
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      }
    });
  },

  toggleStarred: function(email) {
    $.ajax({
      type: 'PATCH',
      url: 'api/emails/' + email.id,
      datatype: 'json',
      data: {email: {starred: !email.starred}},
      success: function (email) {
        ApiActions.receiveEmail(email);
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      }
    });
  },

  toggleImportant: function(email) {
    $.ajax({
      type: 'PATCH',
      url: 'api/emails/' + email.id,
      datatype: 'json',
      data: {email: {important: !email.important}},
      success: function (email) {
        ApiActions.receiveEmail(email);
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      }
    });
  },

  toggleRead: function(email) {
    $.ajax({
      type: 'PATCH',
      url: 'api/emails/' + email.id,
      datatype: 'json',
      data: {email: {read: !email.read}},
      success: function (email) {
        ApiActions.receiveEmail(email);
      },
      error: function () {
        console.log('ApiUtil#fetchEmails error');
      }
    });
  },

  login: function(credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: credentials,
      success: function(currentUser) {
        ApiActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function() {
        console.log('ApiUtil#login error');
      },
    });
  },

  signin: function(credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/users",
      dataType: "json",
      data: {user: credentials},
      success: function(currentUser) {
        ApiActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function() {
        console.log('ApiUtil#signin error');
      },
    });
  },

  logout: function() {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function() {
        ApiActions.logout();
      },
      error: function() {
        console.log('ApiUtil#logout error');
      },
    });
  },

  fetchCurrentUser: function(completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function(currentUser) {
        ApiActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
