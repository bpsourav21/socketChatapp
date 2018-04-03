var React = require('react');
var Topbar = require('./topbar');
var History = require('react-router').History;

var App = React.createClass({
  mixins: [History],

  componentDidUpdate: function () {
    var pathKlass = "." + this.props.location.pathname.replace(/\//g, '-');
    $("a").removeClass("clicked");
    $("a").filter( $(pathKlass) ).addClass("clicked");
  },

  _handleClick: function (e) {
    e.preventDefault();
    this.history.pushState({}, e.target.name, {});
  },

  render: function(){
    return (
      <div>
       <h1>hello</h1>
    </div>
    );
  }
});

module.exports = App;
