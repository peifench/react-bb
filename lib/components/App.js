import React from 'react';
import ArticleList from './ArticleList';

class App extends React.Component {
  state = {
    articles: this.props.store.getArticles(),
    authors: this.props.store.getAuthors(),
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
