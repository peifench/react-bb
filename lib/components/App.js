import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

class App extends React.Component {
  state = this.props.store.getState();
  getChildContext() {
    return { store: this.props.store };
  }
  static childContextTypes = {
    store: PropTypes.object,
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}

export default App;
