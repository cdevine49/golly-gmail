var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var MailboxConstants = require('../constants/mailboxConstants');

var _mailboxes = [];

var MailboxStore = new Store(AppDispatcher);

MailboxStore.all = function () {
  return _mailboxes.slice();
};

MailboxStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case MailboxConstants.MAILBOXES_RECEIVED:
      resetMailboxes(payload.mailboxes);
      MailboxStore.__emitChange();
      break;
  }
};

var resetMailboxes = function (mailboxes) {
  _mailboxes = mailboxes;
};

window.MailboxStore = MailboxStore;

module.exports = MailboxStore;
