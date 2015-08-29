/** @jsx React.DOM */
'use strict';
var React = require('react');
var marked = require('marked');
var Editor = React.createClass({
  displayName: 'Editor',
  render: function() {
    return (<div>
              <textarea id="editor"
                        value={this.props.markdown}
                        ref="editor"
                        cols="30"
                        rows="10">
              </textarea>
            </div>);
  }
});

var Preview = React.createClass({
  displayName: 'Preview',
  render: function() {
    return (<div dangerouslySetInnerHTML={ { __html: marked(this.props.value) } }>
            </div>);
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      markdown: '```console.log(x)```'
    };
  },

  displayName: 'App',

  render: function() {
    return (
      <div>
        <Editor id='id1'
                markdown={this.state.markdown}
                className='editor' />
        <Preview value={this.state.markdown}/>
      </div>
    );
  }
});



module.exports = App;
