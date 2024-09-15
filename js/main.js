require('dotenv').config();
Cesium.Ion.defaultAccessToken = process.env.CESIUM_ACCESS_TOKEN;
var viewer = new Cesium.Viewer('cesiumContainer', {
  imageryProviderViewModel: Cesium.createWorldImagery(),
  selectedImageryProviderViewModel: Cesium.createWorldImagery(),
  terrainProviderViewModel: Cesium.createWorldTerrain(),
  selectedTerrainProviderViewModel: Cesium.createWorldTerrain(),
  baseLayerPicker: false,
  sceneModePicker: false,
  timeline: false,
  animation: false
});

var tileset = new Cesium.Cesium3DTileset({
  url: 'https://assets.cesium.com/22879/tileset.json'
});
viewer.scene.primitives.add(tileset);

viewer.scene.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(-122.4194, 37.7749, 5000.0),
  orientation: {
    heading: Cesium.Math.toRadians(90.0),
    pitch: Cesium.Math.toRadians(-45.0),
    roll: 0.0
  }
});

function toggleUI(id) {
  var popup = document.getElementById(id);
  popup.style.display = (popup.style.display === 'none') ? 'block' : 'none';
}

var toggleQuizButton = document.createElement('button');
toggleQuizButton.textContent = 'Toggle Quiz';
toggleQuizButton.className = 'button';
toggleQuizButton.onclick = function() { toggleUI('quiz-popup'); };
document.body.appendChild(toggleQuizButton);

var toggleStoryButton = document.createElement('button');
toggleStoryButton.textContent = 'Toggle Story';
toggleStoryButton.className = 'button';
toggleStoryButton.onclick = function() { toggleUI('story-popup'); };
document.body.appendChild(toggleStoryButton);

var toggleRiddleButton = document.createElement('button');
toggleRiddleButton.textContent = 'Toggle Riddle';
toggleRiddleButton.className = 'button';
toggleRiddleButton.onclick = function() { toggleUI('riddle-popup'); };
document.body.appendChild(toggleRiddleButton);

viewer.scene.globe.show = false;
viewer.scene.postRender.addEventListener(function() {
  viewer.scene.globe.show = true;
  document.getElementById('loadingOverlay').style.display = 'none';
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Quiz submitted!');
});

document.getElementById('riddleSubmit').addEventListener('click', function() {
  var answer = document.getElementById('riddleAnswer').value.toLowerCase();
  if (answer === 'piano') {
    alert('Correct! The answer is piano.');
  } else {
    alert('Try again!');
  }
});
