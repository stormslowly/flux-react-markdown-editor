'use strict';
var dispatcher = require('../dispatchers/EditorDispatcher.js');
var constant = require('../constants/EditorConstant.js');

var EditorActions = {
  updateTitle: function (title) {
    dispatcher.dispatch({
      actionType: constant.updateTitle,
      title: title
    });
  },
  updateContent: function (content) {
    dispatcher.dispatch({
      actionType: constant.updateContent,
      content: content
    });
  }
};


module.exports = EditorActions;
