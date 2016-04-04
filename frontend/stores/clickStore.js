var Store = require('flux/utils').Store;
var ClickConstants = require('../constants/clickConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ClickStore = new Store(AppDispatcher);

ClickStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ClickConstants.APP_CLICKED:
      ClickStore.__emitChange();
      break;
  }
};

module.exports = ClickStore;
