var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/emailConstants');

var _emails = [];

var EmailStore = new Store(AppDispatcher);

EmailStore.all = function () {
  return _emails.slice();
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
  }
};

var resetEmails = function (emails) {
  _emails = emails;
};

window.EmailStore = EmailStore;

module.exports = EmailStore;
