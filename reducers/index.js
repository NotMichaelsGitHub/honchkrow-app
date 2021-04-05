import {combineReducers} from 'redux';
import Crows from './crows';

const allReducers = combineReducers({
    crows: Crows
})

export default allReducers