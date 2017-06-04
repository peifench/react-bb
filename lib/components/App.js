import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Perf from 'react-addons-perf';

class App extends React.PureComponent {
  state = this.props.store.getState();
  getChildContext() {
    return { store: this.props.store };
  }
  static childContextTypes = {
    store: PropTypes.object,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ random: Math.random() });
    }, 1000);
    // Perf
    setTimeout(() => {
      Perf.start();
    }, 0);
    setTimeout(() => {
      Perf.stop();
      Perf.printWasted();
    }, 10000);
  }
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
