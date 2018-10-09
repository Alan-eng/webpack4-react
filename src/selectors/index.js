import { createSelector } from 'reselect';

export const getArticles = (state) => state.articles; //this is input-selectors. It is created as ordinary non-memoized selector functions because it does not transform the data it select.
export const getKeyword = (state) => state.keyword;

export const getFirstArticle = createSelector(
    [getArticles],
    (articles) => {
        return articles[0];
    }
)

export const getFilteredArticles = createSelector(
    [getArticles, getKeyword],
    (articles, keyword) =>  articles.filter(
        article => article.includes(keyword)
    )
)