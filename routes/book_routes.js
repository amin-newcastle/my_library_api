const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send('List my books');
});

router.get("/book/new", (req, res) => {
    res.send('New book form');
});
// Create
router.post("/book/", (req, res) => {
    res.send('Create new book');
});
// Read
router.get("/book/:isbn", (req, res) => {
    res.send(`Get book with the ID ${req.params.isbn}`);
});
// Update
router.put("/book/:isbn", (req, res) => {
    res.send(`Update book with the ID ${req.params.id}`);
});
// Delete
router.delete("/book/:isbn", (req, res) => {
    res.send(`Delete the book with the ID ${req.params.id}`);
});

module.exports = router;