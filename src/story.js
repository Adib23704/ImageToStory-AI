import { ChatOpenAI } from '@langchain/openai';
import dotenvFlow from 'dotenv-flow';
// eslint-disable-next-line import/extensions
import { PromptTemplate } from '@langchain/core/prompts';

dotenvFlow.config();

const chatModel = new ChatOpenAI({
	openAIApiKey: process.env.OPENAI_TOKEN,
	temperature: 0.9,
	modelName: 'gpt-3.5-turbo-0125',
});

async function generateStory(prompt) {
	const promptTempplate = new PromptTemplate({
		inputVariables: ['text'],
		template:
			'You are a talented story teller who can create a story from a simple narrative. Create a creative story using the following scenario; the story should have be maximum 50 words long. context = {text}',
	});
	const formattedPrompt = await promptTempplate.format({ text: prompt });
	const output = await chatModel.invoke(formattedPrompt);
	return output;
}

export default generateStory;
