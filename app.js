import 'dotenv/config'
import { HfInference } from "@huggingface/inference";
const fs = require('fs');

const hgInference = new HfInference(process.env.HUGGINGFACE_TOKEN);

async function main() {
	const output = await hgInference.imageToText({
		data: fs.readFileSync('./img/img.png'),
		model: 'Salesforce/blip-image-captioning-base',
	});
	console.log('output :>> ', output);
}

main();