export const ADD_ARCTICLE = "ADD_ARCTICLE"


const addArticle = article => ({
    type: ADD_ARCTICLE,
    payload: article
})

export default addArticle // this is action creator