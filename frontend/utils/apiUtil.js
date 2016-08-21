var ApiActions = require('../actions/apiActions');
var SearchActions = require('../actions/searchActions');
var Faye = require ('faye/browser/faye-browser.js');

ApiUtil = {

  fetchEmails: function (path, query) {
    var searchParam;
    if (query) {
      searchParam = query.query;
    } else {
      query = null;
    }
    path = path === '/' ? '/inbox/1' : path;
    $.ajax({
      type: 'GET',
      url: 'api/emails',
      dataType: 'json',
      data: {path: path.split('/')[1], page: parseInt(path.split('/')[2]), query: searchParam},
      success: function (response) {
        ApiActions.receiveEmails(response);
      },
      error: function () {

      }
    });
  },

  fetchDrafts: function (path, page, query) {
    var searchParam;
    if (query) {
      searchParam = query.query;
    } else {
      query = null;
    }
    $.ajax({
      type: 'GET',
      url: 'api/emails',
      dataType: 'json',
      data: {path: path, page: page, query: searchParam},
      success: function (response) {
        ApiActions.receiveDrafts(response);
      },
      error: function () {

      }
    });
  },

  fetchEmail: function (path, id) {
    $.ajax({
      type: 'GET',
      url: 'api/emails/' + id,
      dataType: 'json',
      data: {path: path, id: id},
      success: function (email) {
        email && ApiActions.receiveEmail(email);
      },
      error: function () {

      }
    });
  },

  fetchDraft: function (id) {
    $.ajax({
      type: 'GET',
      url: 'api/emails/' + id,
      dataType: 'json',
      data: {id: id},
      success: function (draft) {
        draft && ApiActions.receiveDraft(draft);
      },
      error: function () {

      }
    });
  },

  createEmail: function (formData, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/emails',
      processData: false,
      contentType: false,
      datatype: 'json',
      data: formData,
      success: function (draft) {
        ApiActions.receiveDraft(draft);
        callback && callback(draft.id);
        if (window.location.hash.split('/')[1] === 'drafts') {
          ApiUtil.fetchEmails('/drafts/' + window.location.hash.split('/')[2].split('?')[0]);
        }
      },
      error: function () {

      },
    });
  },

  updateEmail: function (formData, id, callback) {
    $.ajax({
      type: 'PATCH',
      url: 'api/emails/' + id,
      processData: false,
      contentType: false,
      datatype: 'json',
      data: formData,
      success: function (email) {
        if (email.sent) {
          ApiActions.receiveEmail(email);
          callback && callback();
          if (window.location.hash.split('/')[1] === 'outbox') {
            ApiUtil.fetchEmails('/outbox/' + window.location.hash.split('/')[2].split('?')[0]);
          }
        } else if (window.location.hash.split('/')[1] === 'drafts') {
          ApiUtil.fetchEmails('/drafts/' + window.location.hash.split('/')[2].split('?')[0]);
          // ApiActions.receiveDraft(email);
        }

      },
      error: function () {

      },
    });
  },

  toggleStarred: function (email) {
    $.ajax({
      type: 'PATCH',
      url: 'api/emails/' + email.id,
      datatype: 'json',
      data: {email: {starred: !email.starred}},
      success: function (email) {
        ApiActions.receiveEmail(email);
      },
      error: function () {

      }
    });
  },

  toggleImportant: function (email) {
    $.ajax({
      type: 'PATCH',
      url: 'api/emails/' + email.id,
      datatype: 'json',
      data: {email: {important: !email.important}},
      success: function (email) {
        ApiActions.receiveEmail(email);
      },
      error: function () {

      }
    });
  },

  toggleRead: function (email) {
    $.ajax({
      type: 'PATCH',
      url: 'api/emails/' + email.id,
      datatype: 'json',
      data: {email: {read: !email.read}},
      success: function (email) {
        ApiActions.receiveEmail(email);
      },
      error: function () {

      }
    });
  },

  login: function (credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: credentials,
      success: function (currentUser) {
        ApiActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function () {

      },
    });
  },

  signup: function (credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/users",
      dataType: "json",
      data: {user: credentials},
      success: function (currentUser) {
        ApiActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function () {

      },
    });
  },

  usernames: function () {
    $.ajax({
      type: "GET",
      url: "/api/users",
      dataType: "json",
      success: function (usernames) {
        ApiActions.users(usernames);
      },
      error: function () {

      },
    });
  },

  logout: function (callback) {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function () {
        ApiActions.logout();
        callback && callback();
      },
      error: function () {

      },
    });
  },

  fetchCurrentUser: function (completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function (currentUser) {
        ApiActions.currentUserReceived(currentUser);
      },
      error: function () {

      },
      complete: function () {
        completion && completion();
      }
    });
  },

  search: function (query, page) {
    $.ajax({
      type: "GET",
      url: "/api/searches",
      dataType: "json",
      data: {query: query, page: page},
      success: function (response) {
        SearchActions.receiveResults(response);
      },
      error: function () {

      }
    });
  },

  subscribe: function (userId) {
    url = 'http://' + window.location.host + '/faye';
    var pushClient = new Faye.Client(url);
    var subscription = pushClient.subscribe('/' + userId, function(data) {
      if (data.text === 'NEW_EMAIL' && window.location.hash.split('/')[1] === 'inbox') {
        ApiUtil.fetchEmails('/inbox/' + window.location.hash.split('/')[2].split('?')[0]);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
