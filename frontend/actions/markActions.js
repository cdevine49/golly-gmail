var AppDispatcher = require('../dispatcher/dispatcher');
var MarkConstants = require('../constants/markConstants');

MarkActions = {
  markEmail: function(email) {
    var action = {
      actionType: MarkConstants.EMAIL_MARKED,
      email: email
    };
    AppDispatcher.dispatch(action);
  },
};

module.exports = MarkActions;
