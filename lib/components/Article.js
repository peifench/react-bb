import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  article: { padding: 10 },
};

const dateDisplay = (string) =>
  new Date(string).toDateString();

const Article = (props) => {
  const { article, author } = props;
  return (
    <div style={styles.article}>
      <div>{article.title}</div>
      <div>{dateDisplay(article.date)}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

const StoreProvider = (Component) => {
  const ContainerComponent = (props, context) => {
    const { article } = props;
    const author = context.store.lookupAuthor(article.authorId);
    return (
      <Component {...props} author={author} />
    );
  };

  ContainerComponent.contextTypes = {
    store: PropTypes.object,
  };

  ContainerComponent.displayName = `${Component.name}Container`;

  return ContainerComponent;
};

export default StoreProvider(Article);
