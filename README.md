# Image2Story AI

Image2Story AI is a web application that generates stories based on images using AI. Upload an image, and the application will analyze it to create a captivating story.

## Features

- Upload an image to generate a story.
- Get both a caption and a detailed story for the uploaded image.
- Modern and intuitive user interface.

## Requirements

- Node.js
- npm (Node.js package manager)
- An OpenAI & a HuggingFace account for API Keys.
- OpenAI API Key - [Get from here](https://platform.openai.com/api-keys)
- HuggingFace API Key - [Get from here](https://huggingface.co/settings/tokens)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Adib23704/ImageToStory-AI.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment values:

   - Make a copy of `.env.example` file.
   - Rename the copied file to `.env`
   - Open the file using notepad and configure the required values.
   - __Optional:__ You may change the `API_URL` variable in `/public/script.js` if you are deploying the web under a domain/server.

4. Start the server:

   ```bash
   npm start
   ```

5. Open your web browser and navigate to http://localhost:3000 to access the application.

## Usage

1. Open the application in your web browser.
2. Click on the "Select Image" button to choose an image from your device.
4. The application will analyze the image and generate a caption and a detailed story.
5. View the generated caption and story below the image.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the application.

## License

This project is licensed under the [MIT License](LICENSE).