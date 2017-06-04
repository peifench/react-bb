import React from 'react';
import storeProvider from '../data-api/storeProvider';

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

const extraProps = (store, originalProps) => {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
};

export default storeProvider(extraProps)(Article);
