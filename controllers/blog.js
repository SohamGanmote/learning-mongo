const Blog = require("../models/blog");

const createBlog = async (req, res) => {
	try {
		const { title, snippet, body } = req.body;
		const blog = new Blog({
			title,
			snippet,
			body,
		});
		const result = await blog.save();
		res.send({ message: "Data insertion successful", result });
	} catch (err) {
		await res.send({ message: "Failed!", error: err });
	}
};

const getAllBlogs = async (req, res) => {
	try {
		res.send({ message: "Data fetching successful", data: await Blog.find() });
	} catch (err) {
		await res.send({ message: "Failed!", error: err });
	}
};

const getBlogById = async (req, res) => {
	try {
		const { id } = req.params;
		res.send({
			message: "Data fetching successful",
			data: await Blog.findById(id),
		});
	} catch (err) {
		await res.send({ message: "Failed!", error: err });
	}
};

module.exports = { createBlog, getAllBlogs, getBlogById };
