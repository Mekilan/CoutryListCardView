import axios from 'axios';

export const fetchCountryList = () => async dispatch => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    dispatch({ type: 'FETCH_COUNTRY', payload: response.data });
};

