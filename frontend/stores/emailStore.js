var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/emailConstants');

var _emails = {};
var _meta = {};

var EmailStore = new Store(AppDispatcher);

EmailStore.all = function () {
  var emails = [];
  for (var id in _emails) {
    emails.push(_emails[id]);
  }
  return emails;
};

EmailStore.find = function (id) {
  return _emails[id];
};

EmailStore.meta = function () {
  return $.extend(true, {}, _meta);
};

EmailStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case EmailConstants.EMAILS_RECEIVED:
    debugger
      resetEmails(payload.emails);
      _meta = payload.meta;
      EmailStore.__emitChange();
      break;
    case EmailConstants.EMAIL_RECEIVED:
      resetEmail(payload.email);
      EmailStore.__emitChange();
      break;
  }
};

var resetEmails = function (emails) {
  _emails = {};
  emails.forEach(function (email) {
    _emails[email.id] = email;
  });
};

var resetEmail = function (email) {
  _emails[email.id] = email;
};

window.EmailStore = EmailStore;

module.exports = EmailStore;
