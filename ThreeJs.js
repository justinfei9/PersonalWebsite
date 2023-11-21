// Define canvas
const canvas = document.getElementById('threeCanvas');

// Initialize scene
const scene = new THREE.Scene();

// Set up camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Initialize renderer
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create cube
const geometry = new THREE.BoxGeometry(1, 1.5, 1);
const texture = new THREE.TextureLoader().load('error.png');
const material = new THREE.MeshStandardMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Handle window resizing
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

// Set initial camera position
camera.position.z = 2;

// Animate Cube and Sphere
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    renderer.render(scene, camera);
}

// Start animation
animate();
