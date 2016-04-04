var AppDispatcher = require('../dispatcher/dispatcher');
var ClickConstants = require('../constants/clickConstants');

ClickActions = {
  receiveClick: function() {
    var action = {
      actionType: ClickConstants.APP_CLICKED
    };
    AppDispatcher.dispatch(action);
  },
};

module.exports = ClickActions;
