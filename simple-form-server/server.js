//pass =L9ENaEscYv6jVEg;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const hostname = "localhost";
const port = 3001;

app.use(cors());

mongoose.connect(process.env.DATABASE_ACCESS, () =>
	console.log("MongoDB is connected..")
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/server", (req, res) => {
	const userSchema = new mongoose.Schema({
		firstname: String,
		lastname: String,
		contact: Number,
		email: String,
		photo: String,
	});

	let User;

	if (mongoose.models.user) {
		User = mongoose.model("user");
	} else {
		User = mongoose.model("user", userSchema);
	}

	createUser = async () => {
		const user = new User(req.body);
		user
			.save()
			.then((data) => {
				res.json(data);
			})
			.catch((error) => {
				res.json(data);
			});
	};
	createUser();
});

app.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}/`);
});
