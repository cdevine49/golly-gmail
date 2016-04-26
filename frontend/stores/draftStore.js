var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var DraftConstants = require('../constants/draftConstants');

var _drafts = {};
var _newDraft = null;
var _meta = {};

var DraftStore = new Store(AppDispatcher);

DraftStore.all = function () {
  var drafts = [];
  for (var id in _drafts) {
    drafts.push(_drafts[id]);
  }
  return drafts;
};

DraftStore.find = function (id) {
  return _drafts[id];
};

DraftStore.newDraft = function () {
  return _newDraft;
};

DraftStore.meta = function () {
  return $.extend(true, {}, _meta);
};

DraftStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case DraftConstants.DRAFTS_RECEIVED:
      resetDrafts(payload.drafts);
      _meta = payload.meta;
      DraftStore.__emitChange();
      break;
    case DraftConstants.DRAFT_RECEIVED:
      resetDraft(payload.draft);
      DraftStore.__emitChange();
      break;
  }
};

var newDraft = function (draft) {
  _newDraft = draft;
};

var resetDrafts = function (drafts) {
  _drafts = {};
  drafts.forEach(function (draft) {
    _drafts[draft.id] = draft;
  });
};

var resetDraft = function (draft) {
  _newDraft = draft;
  _drafts[draft.id] = draft;
};

window.DraftStore = DraftStore;

module.exports = DraftStore;
