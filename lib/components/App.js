import React from 'react';
import ArticleList from './ArticleList';

class App extends React.Component {
  state = {
    articles: this.props.store.getArticles(),
    authors: this.props.store.getAuthors(),
  };
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
