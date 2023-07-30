// create web server
const express = require('express');
const app = express();
const PORT = 3000;
// create a router
const commentRouter = require('./routes/comments');
// create a path to the router
app.use('/comments', commentRouter);
// start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});