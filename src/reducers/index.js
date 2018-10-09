import { 
    ADD_ARCTICLE,
    SET_KEYWORD
 } from '../actions'

const initialState = {
    keyword: "2",
    articles: [
        'строка 1',
        'строка 2',
        'строка 3'
    ]
};

const rootReducer = (state = initialState, action) => {
    console.log('Редьюсер должен сработать', action)
    switch (action.type) {
        case ADD_ARCTICLE:
            // return Object.assign({}, state, { // Old style
            //     articles: action.payload
            // });
            return {...state, articles: [...state.articles, action.payload]} // do not use push, cause it alters the original array, you may use Array.prototype.concat instead
            // Using concat(), slice(), and …spread for arrays
            // Using Object.assign() and …spread for objects
        case SET_KEYWORD:
            return {...state, keyword: action.payload }
        default:
            return state;
    }
};

export default rootReducer;