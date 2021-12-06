import React from 'react';
import { addusername, setusername } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import '../components/App/App.css';
const User = (props) => {
	const data = useSelector((state) => state.bmiReducers);
	const dispatch = useDispatch();
	const lastRecords = data.username.slice(-5);
	const handleChange = (e) => {
		dispatch(setusername(e.target.value));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (data.setUsername == '') {
			alert('Field Cannot Be Empty');
		} else {
			dispatch(addusername(data.setUsername));
			dispatch(setusername((data.setUsername = '')));
			props.history.push('/calculator');
		}
	};
	return (
		<>
			<form className="container" onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						value={data.setUsername}
						name="setUsername"
						placeholder="Enter UserName"
						onChange={(event) => handleChange(event)}
					></input>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<div className="data">
				{lastRecords ? (
					lastRecords.map((i) => (
						<div className="text">
							<span>{i}</span>
						</div>
					))
				) : (
					<h1 className="text">"No Data Availanle"</h1>
				)}
			</div>
		</>
	);
};
export default User;
