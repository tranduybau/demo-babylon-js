var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

	// Create the scene space
	var scene = new BABYLON.Scene(engine);
	
	// Add a camera to the scene and attach it to the canvas
	var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 5), scene);
	camera.attachControl(canvas, true);

	BABYLON.SceneLoader.Append("./DamagedHelmet.gltf", "", scene, function (scene) {
		// Create a default arc rotate camera and light.
		scene.createDefaultCameraOrLight(true, true, true);
		scene.createDefaultEnvironment();

		// The default camera looks at the back of the asset.
		// Rotate the camera by 180 degrees to the front of the asset.
		scene.activeCamera.alpha += Math.PI;
	});

	return scene;
};
/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
	scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
	engine.resize();
});