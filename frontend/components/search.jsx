var React = require('react');
var SearchStore = require('../stores/searchStore');
var ApiUtil = require('../utils/apiUtil');

var Search = React.createClass({

  getInitialState: function() {
    return {
      query: "",
      result: ""
    };
  },

  componentDidMount: function() {
    this.searchStoreToken = SearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.searchStoreToken.remove();
  },

  _onChange: function () {
    this.setState({ result: SearchStore.all() });
  },

  handleInput: function (event) {
    var query = e.currentTarget.value;
   this.setState({ query: query }, function () {
     if (query.length > 2) {
       this.search();
     }
   }.bind(this));
  },

  // nextPage: function () {
  //   var meta = SearchStore.meta();
  //   Apiutil.search(this.state.query, meta.page + 1);
  // },

  search: function () {
    ApiUtil.search(this.state.query, 1);
  },

  results: function () {
    return SearchStore.all().map(function (result) {
      if (result._type === "Post") {
        return (
          <Link key={ result.id }>
            Post #{ result.id }: { result.title }
          </Link>
        );

      } else {
        return (
          <Link key={ result.id }>
            User #{ result.id }: { result.name }
          </Link>
        );
      }
    });
  },

  render: function() {
    return (
      <article>
        <form className='searchbar group'>
          <input type='text' onChange={this.handleInput} value={this.state.query}></input>
          <button className='search-button'>B</button>
        </form>
        <div>
          { this.results() }
        </div>
      </article>
    );
  }

});

module.exports = Search;
