import captioner from './captioner.js';
import generateStory from './story.js';

async function app() {
	captioner('./img/img.png').then((output) => {
		console.log('output :>> ', output);

		generateStory(output).then((story) => {
			console.log('story :>> ', story.content);
		});
	});
}

app();
