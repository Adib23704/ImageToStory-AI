import express from 'express';
import bodyParser from 'body-parser';
import captioner from './captioner.js';
import generateStory from './story.js';

const app = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../public'));
app.set('views', '../views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

async function main() {
	// captioner('./img/img.png').then((output) => {
	// 	console.log('output :>> ', output);

	// 	generateStory(output).then((story) => {
	// 		console.log('story :>> ', story.content);
	// 	});
	// });

	app.listen(port, () => {
		console.log(`Server Running on port http://localhost:${port}`);
	});
}

main();
