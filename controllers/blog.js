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

const deleteBlogById = async (req, res) => {
	try {
		const { id } = req.params;
		res.send({
			message: "successful",
			data: await Blog.deleteMany({ _id: id }),
		});
	} catch (err) {
		await res.send({ message: "Failed!", error: err });
	}
};

const updateBlogById = async (req, res) => {
	try {
		const { id, title, snippet, body } = req.body;
		res.send({
			message: "Data update successful",
			data: await Blog.updateMany({ _id: id }, { title, snippet, body }),
		});
	} catch (err) {
		await res.send({ message: "Failed!", error: err });
	}
};

module.exports = {
	createBlog,
	getAllBlogs,
	getBlogById,
	deleteBlogById,
	updateBlogById,
};
