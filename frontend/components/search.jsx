var React = require('react');
var SearchStore = require('../stores/searchStore');
var ClickStore = require('../stores/clickStore');
var ApiUtil = require('../utils/apiUtil');
var Link = require('react-router').Link;

var Search = React.createClass({

  getInitialState: function() {
    return {
      query: "",
      result: "",
      searchBox: false
    };
  },

  componentDidMount: function() {
    this.searchStoreToken = SearchStore.addListener(this._onChange);
    this.clickStoreToken = ClickStore.addListener(this._handleAppClick);
  },

  componentWillUnmount: function () {
    this.searchStoreToken.remove();
    this.clickStoreToken.remove();
  },

  _onChange: function () {
    this.setState({ result: SearchStore.all() });
  },

  _handleAppClick: function (e) {
    this.setState({searchBox: false});
  },

  _handleSearchBoxClick: function (e) {
    e.stopPropagation();
    if (e.target.type === "text") {
      this.setState({ searchBox: true });
    }
  },

  handleInput: function (e) {
    var query = e.currentTarget.value;
   this.setState({ query: query, searchBox: true }, function () {
     if (query.length === 0) {
       this.setState({ searchBox: false});
     } else {
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
              <Link className='search-result-fixed-link search-result-subject'
                to={ {pathname: '/search-results/' + result.id, query: {query: this.state.query} }}>
                { result.subject }</Link>
              <Link className='search-result-fixed-link search-result-name'
                to={ {pathname:'/search-results/' + result.id, query: {query: this.state.query} }}>
                { result.from_name }</Link>
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
    }.bind(this));
  },


  render: function() {
    return (
      <article>
        <form onClick={this._handleSearchBoxClick} className='searchbar group'>
          <input type='text'
            onChange={this.handleInput}
            value={this.state.query}></input>
        </form>
        <Link to={ {pathname:'/search-results/', query: {query: this.state.query} }}  className='search-button'>B</Link>
        <ul className={ this.state.searchBox ? 'search-results-fixed' : 'search-results-fixed hidden' }>
          { this.results() }
        </ul>
      </article>
    );
  }

});

module.exports = Search;
