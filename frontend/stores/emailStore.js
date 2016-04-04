var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/emailConstants');

var _emails = {};

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

EmailStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case EmailConstants.EMAILS_RECEIVED:
      resetEmails(payload.emails);
      EmailStore.__emitChange();
      break;
    case EmailConstants.EMAIL_RECEIVED:
      resetEmail(payload.email);
      EmailStore.__emitChange();
      break;
    // case EmailConstants.EMAIL_UPDATED:
    //   _emails[payload.email.id] = payload.email;
    //   EmailStore.__emitChange();
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
