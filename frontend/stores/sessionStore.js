var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/sessionConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var SessionStore = new Store(AppDispatcher);
var ApiUtil = require('../utils/apiUtil');

var _currentUser;
var _currentUserFetched = false;

SessionStore.currentUser = function () {
  return _currentUser;
};

SessionStore.isLoggedIn = function () {
  return !!_currentUser;
};

SessionStore.currentUserFetched = function () {
  return _currentUserFetched;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      _currentUserFetched = true;
      // ApiUtil.subscribe(currentUser.id);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _currentUser = null;
      _currentUserFetched = false;
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
