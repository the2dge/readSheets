// Replace this URL with your Cloud Function's URL
const CLOUD_FUNCTION_URL = 'https://us-central1-readgsheets-400903.cloudfunctions.net/function-1';

async function fetchPhotos() {
    try {
        let response = await fetch(CLOUD_FUNCTION_URL);
        let data = await response.json();

        displayPhotos(data);
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
}

function displayPhotos(photos) {
    const container = document.getElementById('photos-container');

    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo-item';

        const imgElement = document.createElement('img');
        imgElement.src = photo.url;
        imgElement.alt = photo.description;
        imgElement.width = 300; // or any desired width


        const descElement = document.createElement('p');
        descElement.innerText = `${photo.number} - ${photo.description}`;
        
        photoDiv.appendChild(descElement);
        photoDiv.appendChild(imgElement);
         
        container.appendChild(photoDiv);
    });
}

// Call fetchPhotos when the page loads
fetchPhotos();
