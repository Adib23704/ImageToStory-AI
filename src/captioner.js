import dotenvFlow from 'dotenv-flow';
import { HfInference } from '@huggingface/inference';
import fs from 'fs';

dotenvFlow.config();
const hgInference = new HfInference(process.env.HUGGINGFACE_TOKEN);

async function captioner(img) {
	const output = await hgInference.imageToText({
		data: fs.readFileSync(img),
		model: 'Salesforce/blip-image-captioning-base',
	});
	if (fs.existsSync(img)) {
		fs.rmSync(img);
	}
	return output.generated_text;
}

export default captioner;
