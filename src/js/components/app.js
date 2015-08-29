/** @jsx React.DOM */
'use strict';
var React = require('react');
var marked = require('marked');

var EditorStore = require('../stores/EditorStore.js');
var EditorActions = require('../actions/EditorActions.js');


var Editor = React.createClass({
  displayName: 'Editor',
  _onContentChange: function(event) {
    var text = event.target.value;
    EditorActions.updateContent(text);
  },
  render: function() {
    return (<div>
              <h1>{this.props.title}</h1>
              <textarea id="editor"
                        placeholder="write some markdown"
                        ref="editor"
                        cols="30"
                        rows="10"
                        onChange={this._onContentChange}>
              </textarea>
            </div>);
  }
});

var Preview = React.createClass({
  displayName: 'Preview',
  render: function() {
    return (< div dangerouslySetInnerHTML={ { __html: marked(this.props.value) } }>
              < /div>);
  }
});

var App = React.createClass({
  displayName: 'MarkDownEditor',
  getInitialState: function() {
    return {
      content: '',
      title: 'this is a title'
    };
  },
  componentDidMount: function() {
    EditorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    EditorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(EditorStore.getArticle());
  },
  render: function() {
    return (
      <div>
        <Editor id='id1'
                markdown={this.state.content}
                title={ this.state.title}
                className='editor' />
        <Preview value={this.state.content}/>
      </div>
    );
  }
});



module.exports = App;
