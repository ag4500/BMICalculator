import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setData, addData } from '../../actions';
const BmiForm = ({ change }) => {
	const getState = useSelector((state) => state.bmiReducers);
	const dispatch = useDispatch();
	const { weight, height } = getState.data;
	const handleChange = (e) => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		dispatch(setData({ ...getState.data, [name]: value, date }));
	};
	const handleSubmit = () => {
		change(getState.data);
		dispatch(addData(getState.data));
		dispatch(setData({ weight: '', height: '' }));
	};
	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={weight}
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={height}
						onChange={(event) => handleChange(event)}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={getState.weight === '' || getState.height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired,
};

export default BmiForm;
