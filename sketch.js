// https://sciencesims.com/sims/earth-in-orbit-simple/
function setup() {
  createCanvas(windowWidth, windowHeight);
  background3D(11)

  // Sun
  noStroke();
  theSun = sphere(0,0,5)
  theSun.texture("jpg/sun-texture-512.jpg")
  theSun.color('#e5bc29')

  // Earth
  noStroke();
  theEarth = sphere(50,0,4)
	theEarth.rotation.y = 0.0;
  theEarth.texture("jpg/earth-color.jpg")
  theEarth.receiveShadow = true;
  theEarth.rotation.x = -0.4101524; //x is z

  stroke('white');
  line_axis = line(0,-200,0,200,0,0);
	theEarth.add( line_axis );

  // makes an x-y-z coordinate axis
  stroke('red');
  line(-200,0,200,0); // X axis
  stroke('blue');
  line(0,0,0,0,-200,200); // Z axis
  stroke('green');
  line(0,-200,0,200,0,0); // Y axis

  //Light
  fill(color('#404040'))
  ambientLight()
  noFill()
  fill(color('#F8FF91'))
  pointLight(0,0)
  noFill()

  sky = skybox('jpg/milky-way-and-stars-2048.jpg',200)
  sky.rotation.x = degToRad(-62.6)

  //Controls, only in 3D
  var control = orbitControls()
  control.origin = createVector(165, -74, -41)
  control.target = theSun.position
  control.enableZoom = false;
  control.enablePan = false;

  //enter 3D mode
  toggle3DMode()
}

function draw() {
  //Earth
  theEarth.position.x = 50*Math.sin(frameCount *18 * .0005);
  theEarth.position.z = -50*Math.cos(frameCount *18 * .0005); //Note z-coordinate is all inverted in order to compatible for 2D Mode

	theEarth.rotation.y = frameCount *18 * .005;
}
