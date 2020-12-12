import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

class App extends Component {
	state = {
		information: {
			firstname: "",
			lastname: "",
			contact: "",
			email: "",
			photo: "",
		},
	};

	handelChange = ({ currentTarget: input }) => {
		const information = { ...this.state.information };
		information[input.name] = input.value;
		this.setState({ information });
	};

	handelSubmit = (e) => {
		e.preventDefault();
		const userData = { ...this.state.information };
		// POST DATA TO THE SERVER
		axios
			.post("http://localhost:3001/server", userData)
			.then(function (response) {
				console.log("All set 👍");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	render() {
		const { information } = this.state;
		return (
			<div className="design">
				<h1>Form</h1>
				<form onSubmit={this.handelSubmit}>
					<div className="form-group">
						<label htmlFor="firstname">First Name</label>
						<input
							value={information.firstname}
							onChange={this.handelChange}
							id="firstname"
							name="firstname"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Last Name</label>
						<input
							value={information.lastname}
							onChange={this.handelChange}
							id="lastname"
							name="lastname"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email ID</label>
						<input
							value={information.email}
							onChange={this.handelChange}
							id="email"
							name="email"
							type="email"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="contact">Phone No.</label>
						<input
							value={information.contact}
							onChange={this.handelChange}
							id="contact"
							name="contact"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="photo">Upload Photo</label>
						<input
							value={information.photo}
							onChange={this.handelChange}
							id="photo"
							name="photo"
							type="file"
							className="form-control-file"
						/>
					</div>

					<button className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default App;
