const express = require('express')
const app = express()
const path = require('path')
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.listen(2000,()=>{
    console.log('lestin port 2000');
})