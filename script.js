document.getElementById('generateVideoBtn').addEventListener('click', generateVideo);

function generateVideo() {
    const text = document.getElementById('text').value;
    const voice = document.getElementById('voice').value;
    const style = document.getElementById('style').value;

    if (!text) {
        alert("Please enter the text for the video.");
        return;
    }

    const data = {
        text: text,
        voice: voice,
        style: style
    };

    // Simulating a backend API call
    alert("Generating video...");

    // Here, you would send `data` to your backend AI server for processing
    // For example:
    // fetch('/api/generateVideo', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(result => {
    //     document.getElementById('videoPlayer').src = result.videoUrl;
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });

    // Placeholder: Simulate a generated video URL
    const generatedVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
    document.getElementById('videoPlayer').src = generatedVideoUrl;
}




