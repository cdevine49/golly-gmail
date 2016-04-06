var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/searchConstants');

SearchActions = {
  receiveResults: function(response) {
    var action = {
      actionType: SearchConstants.RESULTS_RECEIVED,
      searchResults: resonse.search_results,
      meta: response.meta
    };
    AppDispatcher.dispatch(action);
  },
};

module.exports = SearchActions;
