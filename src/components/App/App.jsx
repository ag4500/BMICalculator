import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setBmiState, setBmiData } from '../../actions';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import BmiForm from '../BmiForm/BmiForm';
import { useSelector, useDispatch } from 'react-redux';
import Info from '../Info/Info';
import Bar from '../Bar/Bar';
import { getData, storeData } from '../../helpers/localStorage';
const App = () => {
	const bmistateData = useSelector((state) => state.bmiReducers);
	const dispatch = useDispatch();
	useEffect(() => {
		storeData('data', bmistateData.bmiState);
		const date = bmistateData.bmiState.map((obj) => obj.date);
		const bmi = bmistateData.bmiState.map((obj) => obj.bmi);
		let newData = { date, bmi };
		dispatch(setBmiData(newData));
	}, [bmistateData.bmiState]);

	const handleChange = (val) => {
		let heightInM = val.height / 100;
		val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
		val.id = uuidv4();
		let newVal = [...bmistateData.bmiState, val];
		let len = newVal.length;
		if (len > 7) newVal = newVal.slice(1, len);
		dispatch(setBmiState(newVal));
	};

	const handleDelete = (id) => {
		storeData('lastState', bmistateData.bmiState);
		let newState = bmistateData.bmiState.filter((i) => {
			return i.id !== id;
		});
		dispatch(setBmiState(newState));
	};

	const handleUndo = () => {
		dispatch(setBmiState(getData('lastState')));
	};

	return (
		<div className="container">
			<div className="row center">
				<h1 className="white-text"> BMI Tracker </h1>
			</div>
			<div className="row">
				<div className="col m12 s12">
					<BmiForm change={handleChange} />
					<Bar
						labelData={bmistateData.bmidata.date}
						bmiData={bmistateData.bmidata.bmi}
					/>
					<div>
						<div className="row center">
							<h4 className="white-text">7 Day Data</h4>
						</div>
						<div className="data-container row">
							{bmistateData.bmiState.length > 0 ? (
								<>
									{bmistateData.bmiState.map((info) => (
										<Info
											key={info.id}
											id={info.id}
											weight={info.weight}
											height={info.height}
											date={info.date}
											bmi={info.bmi}
											deleteCard={handleDelete}
										/>
									))}
								</>
							) : (
								<div className="center white-text">
									No log found
								</div>
							)}
						</div>
					</div>
					{getData('lastState') !== null ? (
						<div className="center">
							<button
								className="calculate-btn"
								onClick={handleUndo}
							>
								Undo
							</button>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};
export default App;
