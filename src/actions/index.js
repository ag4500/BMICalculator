export const SET_DATA = 'SET_DATA';
export const ADD_DATA = 'ADD_DATA';
export const BMI_STATE = 'BMI_STATE';
export const BMI_DATA = 'BMI_DATA';
export const USER_NAME = 'USER_NAME';
export const SET_USER_NAME='SET_USER_NAME'
export const setData = (payload) => ({
	type: SET_DATA,
	payload,
});
export const addData = (payload) => ({
	type: ADD_DATA,
	payload,
});
export const setBmiState = (payload) => ({
	type: BMI_STATE,
	payload,
});
export const setBmiData = (payload) => ({
	type: BMI_DATA,
	payload,
});
export const addusername= (payload) => ({
	type: USER_NAME,
	payload,
});
export const setusername= (payload) => ({
	type: SET_USER_NAME,
	payload,
});
