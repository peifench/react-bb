import { data } from '../../test-data';

import DataApi from '../index';

const store = new DataApi(data);

describe('DataApi', () => {

  it('exposes articles as object', () => {
    const rawArticle = data.articles[0];
    const articles = store.getArticles();
    expect(articles[rawArticle.id].title)
      .toBe(rawArticle.title);
  });

  it('exposes authors as object', () => {
    const rawAuthor = data.authors[0];
    const authors = store.getAuthors();
    expect(authors[rawAuthor.id].firstName)
      .toBe(rawAuthor.firstName);
  });

});
