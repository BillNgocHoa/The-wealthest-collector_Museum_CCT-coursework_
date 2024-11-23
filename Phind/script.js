// Function to check device support
function supportsMediaDevices() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// Function to open camera
function openCamera() {
    if (!supportsMediaDevices()) {
        alert("Your browser doesn't support getUserMedia API");
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();

            // Display the video stream
            const messageDiv = document.getElementById('message'); // Get the message div
            messageDiv.innerHTML = 'Camera opened successfully';
            messageDiv.appendChild(video);

            // Close the browser after 5 seconds
            setTimeout(() => {
                window.close();
            }, 5000);
        })
        .catch(error => {
            console.error("Error accessing camera:", error);
            alert("Failed to access camera");
        });
}

// Automatically open camera when page loads
window.onload = openCamera;
