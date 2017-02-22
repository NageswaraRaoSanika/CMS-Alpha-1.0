import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//initialize article state
const articlesStateInit = {
    articles:{},
    isFetchingArticles:false
};

//reducer actions

const articles = (state = articlesStateInit , action ) =>{

  switch(action.type){
    case "FETCH_ARTICLES": {
      return {
        ...state,
        articles: action.payload,
        isFetchingArticles:false
      }
    }
    
    case 'API_REJECTED':{
       return {
            ...state,
          articles: action.payload,
          isFetchingArticles:false
        }
    }

    case 'LOADING_ARTICLES':{
       return {
            ...state,
          isFetchingArticles:true
        }
    }

    default:
      return state

  }
}


//users reducer

const usersStateInit = {
    users:[],
    isFetchingUsers:false
}

const users = (state = usersStateInit ,action ) =>{ 
    return state
}

//combine Reducers
const rootReducer = combineReducers({
  articles,
  users,
  routing: routerReducer
})

export default rootReducer
