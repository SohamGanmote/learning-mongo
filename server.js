const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();

const dbURI =
	"mongodb+srv://soham:Soham123@mango.ql1ijob.mongodb.net/Mango_tutorial?retryWrites=true&w=majority&appName=mango";

mongoose
	.connect(dbURI)
	.then((data) => {
		console.log("MongoDB connected!");
		app.listen(3000, () => {
			console.log("Server started on : 3000 !!");
		});
	})
	.catch((err) => {
		console.log("Stupid ", err);
	});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req, res) => {
	res.send({ message: "Server is running" });
});
