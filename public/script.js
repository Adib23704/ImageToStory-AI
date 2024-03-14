const API_URL = 'http://localhost:8080/generate';

const imageUpload = document.getElementById('imageUpload');
const uploadButton = document.getElementById('uploadButton');
const imagePreview = document.getElementById('imagePreview');
const previewImage = document.getElementById('previewImage');
const noImageMessage = document.getElementById('noImageMessage');
let analyzingText;
let captionHeader;
let storyHeader;
let captionText;
let storyText;

function sendImageFile(file) {
	const formData = new FormData();
	formData.append('image', file);

	fetch(API_URL, {
		method: 'POST',
		body: formData,
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Failed to send image to the API');
			}
			return response.json();
		})
		.then((data) => {
			if (analyzingText) {
				analyzingText.remove();
			}

			captionHeader = document.createElement('h2');
			captionHeader.textContent = 'Caption:';
			imagePreview.appendChild(captionHeader);

			captionText = document.createElement('p');
			captionText.textContent = data.caption;
			captionText.classList.add('gen-text');
			imagePreview.appendChild(captionText);

			storyHeader = document.createElement('h2');
			storyHeader.textContent = 'Story:';
			imagePreview.appendChild(storyHeader);

			storyText = document.createElement('p');
			storyText.textContent = data.story;
			storyText.classList.add('gen-text');
			imagePreview.appendChild(storyText);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

imageUpload.addEventListener('change', (event) => {
	const file = event.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', () => {
			previewImage.src = reader.result;
			imagePreview.style.display = 'block';
			noImageMessage.style.display = 'none';
			uploadButton.style.display = 'none';
			previewImage.style.display = 'block';
			analyzingText = document.createElement('p');
			analyzingText.textContent = 'Analyzing';
			imagePreview.appendChild(analyzingText);

			sendImageFile(file);
		});

		reader.readAsDataURL(file);
	} else {
		previewImage.src = '';
		imagePreview.style.display = 'none';
		noImageMessage.style.display = 'block';
		uploadButton.textContent = 'Select Image';
		previewImage.style.display = 'none';

		if (analyzingText) {
			analyzingText.remove();
		}

		if (captionText) {
			captionText.remove();
		}

		if (storyText) {
			storyText.remove();
		}

		if (storyHeader) {
			storyHeader.remove();
		}

		if (captionHeader) {
			captionHeader.remove();
		}
	}
});
