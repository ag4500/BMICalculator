import {
	ADD_DATA,
	SET_DATA,
	BMI_STATE,
	BMI_DATA,
	USER_NAME,
	SET_USER_NAME,
} from '../actions';
import { getData } from '../helpers/localStorage';
const getDatalocalStorage = () => getData('data') || [];
const getUSerlocalStorage = () => {
	const dataJsonString = localStorage.getItem('user') || '[]';
	return JSON.parse( dataJsonString );
};
const setUSerlocalStorage = (user) => {
	const recordsJsonString = JSON.stringify(user);
	localStorage.setItem('user', recordsJsonString);
};
const initialState = {
	data: {
		weight: '',
		height: '',
		date: '',
	},
	bmiState: getDatalocalStorage(),
	bmidata: {},
	username: getUSerlocalStorage(),
	setUsername: '',
};
export default function bmiReducers(state = initialState, action) {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				data: action.payload,
			};
		case ADD_DATA:
			return {
				...state,
				data: action.payload,
			};
		case BMI_DATA:
			return {
				...state,
				bmidata: action.payload,
			};
		case BMI_STATE:
			return {
				...state,
				bmiState: action.payload,
			};
		case SET_USER_NAME:
			return {
				...state,
				setUsername:action.payload,
			};
		case USER_NAME:
			const username = [...state.username,action.payload];
			setUSerlocalStorage(username);
			return {
				...state,
				username
			};
		default:
			return state;
	}
}
