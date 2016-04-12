var Store = require('flux/utils').Store;
var UserConstants = require('../constants/userConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);

var _users = [];

UserStore.usernameExists = function (username) {
  return _users.indexOf(username) !== -1;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USERS:
      payload.users.forEach(function(user) {
        _users.push(user.username);
      });
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
