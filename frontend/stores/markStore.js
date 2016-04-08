var Store = require('flux/utils').Store;
var MarkConstants = require('../constants/markConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var MarkStore = new Store(AppDispatcher);

var _emails = {};

MarkStore.all = function () {
  var emails = [];
  for (var id in _emails) {
    emails.push(_emails[id]);
  }
  return emails;
};

MarkStore.includes = function (id) {
  if (_emails[id]) {
    return true;
  } else {
    return false;
  }
};


MarkStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case MarkConstants.EMAIL_MARKED:
      resetEmail(payload.email);
      MarkStore.__emitChange();
      break;
  }
};

var resetEmail = function (email) {
  if (_emails[email.id]) {
    delete _emails[email.id];
  } else {
    _emails[email.id] = email;
  }
};

module.exports = MarkStore;
