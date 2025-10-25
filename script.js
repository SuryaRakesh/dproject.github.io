import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

const container = document.getElementById('viewer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);
camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

document.getElementById('fileInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  const ext = file.name.split('.').pop().toLowerCase();

  if (ext === 'glb' || ext === 'gltf') {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      scene.clear();
      scene.add(gltf.scene);
    });
  } else if (ext === 'stl') {
    const loader = new STLLoader();
    loader.load(url, (geometry) => {
      const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
      const mesh = new THREE.Mesh(geometry, material);
      scene.clear();
      scene.add(mesh);
    });
  }
});

window.calculateCost = function () {
  const volume = parseFloat(document.getElementById('volume').value);
  const materialCost = parseFloat(document.getElementById('materialCost').value);
  const total = (volume * materialCost).toFixed(2);
  document.getElementById('result').innerText = `Estimated Cost: $${total}`;
};

window.calculateCost = function () {
  const volume = parseFloat(document.getElementById('volume').value);
  const materialCost = parseFloat(document.getElementById('materialCost').value);
  const total = (volume * materialCost).toFixed(2);
  document.getElementById('result').innerText = `Estimated Cost: $${total}`;
};
