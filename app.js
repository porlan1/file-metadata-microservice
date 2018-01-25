const express = require('express');
var multer  = require('multer');
var upload = multer({ dest: './uploads/'});
var app = express();

app.use(express.static(__dirname));

app.post('/submit_file', upload.single('fileSubmission'), (req, res, next)=>{
	if (req.file) {
		res.send('Your file is ' + req.file.size + ' bytes');
	} else {
		res.status(500).send('Something went wrong!');
	}
});

app.listen(3000);