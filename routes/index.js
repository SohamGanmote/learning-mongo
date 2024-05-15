const express = require("express");
const blog = require("../controllers/blog");

const router = express.Router();

router.post("/add-blog", blog.createBlog);
router.get("/all-blogs", blog.getAllBlogs);
router.get("/get-blog/:id", blog.getBlogById);
router.put("/update-blog", blog.updateBlogById);
router.delete("/delete-blog/:id", blog.deleteBlogById);

module.exports = router;
