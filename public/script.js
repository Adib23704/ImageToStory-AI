const API_URL = 'http://localhost:8080/generate';

const imageUpload = document.getElementById('imageUpload');
const uploadButton = document.getElementById('uploadButton');
const imagePreview = document.getElementById('imagePreview');
const previewImage = document.getElementById('previewImage');
const noImageMessage = document.getElementById('noImageMessage');

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
			console.log(data);
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

			sendImageFile(file);
		});

		reader.readAsDataURL(file);
	} else {
		previewImage.src = '';
		imagePreview.style.display = 'none';
		noImageMessage.style.display = 'block';
		uploadButton.textContent = 'Select Image';
		previewImage.style.display = 'none';
	}
});
