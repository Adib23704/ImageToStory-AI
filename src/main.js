import express from 'express';
import multer from 'multer';
import fs from 'fs';
import dotenvFlow from 'dotenv-flow';

import captioner from './captioner.js';
import generateStory from './story.js';

dotenvFlow.config();

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
		console.log('Received file, procceding to generate story.\n');

		captioner(`./img/${req.file.filename}`).then((output) => {
			console.log(`Caption generated: ${output}\n`);

			generateStory(output).then((story) => {
				console.log(`Story generated: ${story.content}\n`);

				if (fs.existsSync(`./img/${req.file.filename}`)) {
					fs.rmSync(`./img/${req.file.filename}`);

					console.log('Deleted the image file.\n');
				}

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
