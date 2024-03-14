import express from 'express';
import multer from 'multer';

import captioner from './captioner.js';
import generateStory from './story.js';

const app = express();
const port = process.env.PORT;

app.use(express.static('./public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, './img');
	},
	filename(req, file, cb) {
		cb(null, `${Date.now()}.png`);
	},
});
const upload = multer({ storage });

app.post('/generate', upload.single('image'), (req, res) => {
	try {
		if (!req.file) {
			throw new Error('No file uploaded');
		}

		captioner(`./img/${req.file.filename}`).then((output) => {
			generateStory(output).then((story) => {
				res.status(200).json({
					ok: true,
					story: story.content,
					caption: output,
				});
			});
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}

	return true;
});

async function main() {
	app.listen(port, () => {
		console.log(`Server Running on port http://localhost:${port}`);
	});
}

main();
