var React = require('react');
var SearchStore = require('../stores/searchStore');
var ApiUtil = require('../utils/apiUtil');
var Link = require('react-router').Link;

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

  handleInput: function (e) {
    var query = e.currentTarget.value;
   this.setState({ query: query }, function () {
     if (query.length > 2) {
       this.search();
     }
   }.bind(this));
  },

  search: function () {
    ApiUtil.search(this.state.query, 1);
  },

  results: function () {
    return SearchStore.all().map(function (result, i) {
      if (result._type === "Email") {
        return (
          <div key={i} className='search-result-item-container group'>
            <div className='search-result-email-pic'></div>
            <li className='search-result-fixed-li'>
              <Link className='search-result-fixed-link search-result-subject' to={"/inbox/" + result.id}>{ result.subject }</Link>
              <Link className='search-result-fixed-link search-result-name' to={"/inbox/" + result.id}>{ result.from_name }</Link>
            </li>
          </div>
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
        <ul className='search-results-fixed'>
          { this.results() }
        </ul>
      </article>
    );
  }

});

module.exports = Search;
