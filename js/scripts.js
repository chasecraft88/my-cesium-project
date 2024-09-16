Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NDY3N2IwOC05NGIzLTRiMzYtOTZhMS02ZDk4YTliNjM5MzIiLCJpZCI6MjQxNjg3LCJpYXQiOjE3MjYzNTYyNDB9.FAFLAvtOGYBFNai5-0d_5BgY6CFCaWTQhGZ__h5V1J8';

const viewer = new Cesium.Viewer('cesiumContainer', {
    shouldAnimate: true
});

// Example: Show loading overlay and hide it after initialization
const loadingOverlay = document.getElementById('loadingOverlay');
viewer.scene.postRender.addEventListener(function() {
    loadingOverlay.style.display = 'none';
});

// Add event listeners for your interactive elements here
document.getElementById('riddleSubmit').addEventListener('click', function() {
    const answer = document.getElementById('riddleAnswer').value;
    if (answer.toLowerCase() === 'keyboard') {
        alert('Correct!');
    } else {
        alert('Try again.');
    }
});
