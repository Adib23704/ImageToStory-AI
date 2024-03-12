import 'dotenv/config';
import { HfInference } from '@huggingface/inference';
import fs from 'fs';

const hgInference = new HfInference(process.env.HUGGINGFACE_TOKEN);

async function captioner(img) {
	const output = await hgInference.imageToText({
		data: fs.readFileSync(img),
		model: 'Salesforce/blip-image-captioning-base',
	});
	return output.generated_text;
}

export default captioner;
