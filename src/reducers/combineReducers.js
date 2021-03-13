import { combineReducers } from 'redux';
import getCountryList from './getCountryList';

export default combineReducers(
    {
        getcounlist: getCountryList
    }
);