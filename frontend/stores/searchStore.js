var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/searchConstants');
var SearchStore = new Store(AppDispatcher);

var _searchResults = [];
var _meta = {};

SearchStore.all = function () {
  return _searchResults.slice();
};

SearchStore.meta = function () {
  return $.extend(true, {}, _meta);
};

SearchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SearchConstants.RESULTS_RECEIVED:
      _searchResults = payload.searchResults;
      _meta = payload.meta;
      SearchStore.__emitChange();
      break;
  }
};

module.exports = SearchStore;
