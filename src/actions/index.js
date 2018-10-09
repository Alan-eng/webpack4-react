export const ADD_ARCTICLE = "ADD_ARCTICLE"
export const SET_KEYWORD = "SET_KEYWORD"


export const addArticle = article => ({
    type: ADD_ARCTICLE,
    payload: article
})

export const setKeyword = keyword => ({
    type: SET_KEYWORD,
    payload: keyword
})

export default addArticle // this is action creator