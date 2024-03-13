const imageUpload = document.getElementById('imageUpload');
const uploadButton = document.getElementById('uploadButton');
const imagePreview = document.getElementById('imagePreview');
const previewImage = document.getElementById('previewImage');
const noImageMessage = document.getElementById('noImageMessage');

imageUpload.addEventListener('change', () => {
	const file = this.files[0];

	// Inside the change event listener for the file input
	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', () => {
			previewImage.src = reader.result;
			imagePreview.style.display = 'block';
			noImageMessage.style.display = 'none';
			uploadButton.style.display = 'none';
			previewImage.style.display = 'block'; // Show preview image
		});

		reader.readAsDataURL(file);
	} else {
		previewImage.src = '';
		imagePreview.style.display = 'none';
		noImageMessage.style.display = 'block';
		uploadButton.textContent = 'Select Image';
		previewImage.style.display = 'none'; // Hide preview image
	}
});
