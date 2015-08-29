'use strict';
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var editorDispatch = require('../dispatchers/EditorDispatcher.js');
var constant = require('../constants/EditorConstant.js');

var _editorStorage = {
  title: 'this is the tilte',
  content: ''
};

var EditorStore = objectAssign({}, EventEmitter.prototype, {

  getArticle: function () {
    return _editorStorage;
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (l) {
    this.on('change', l);
  },
  removeChangeListener: function (l) {
    this.removeListener('change', l);
  }

});

editorDispatch.register(function (event) {
  switch (event.actionType) {
  case constant.updateContent:
    _editorStorage.content = event.content;
    EditorStore.emitChange();
    break;
  default:
    console.error('ooops'); //eslint-disable-line no-console
  }
});


module.exports = EditorStore;
