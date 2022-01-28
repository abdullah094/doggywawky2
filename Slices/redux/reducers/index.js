import myState from './globalState'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    myState
})

export default rootReducer