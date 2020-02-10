function update() {
  var delta = clock.getDelta(); // seconds.
  var moveDistance = 200 * delta; // 200 pixels per second
  var rotateAngle = (Math.PI / 2) * delta; // pi/2 radians (90 degrees) per second

  // move forwards/backwards/left/right
  if (keyboard.pressed("W")) {
    MovingCube.translateZ(-moveDistance);
    lightTarget.translateZ(-moveDistance);
  }
  if (keyboard.pressed("S")) {
    MovingCube.translateZ(moveDistance);
    lightTarget.translateZ(moveDistance);
  }
  if (keyboard.pressed("Q")) {
    MovingCube.translateX(-moveDistance);
    lightTarget.translateX(-moveDistance);
  }
  if (keyboard.pressed("E")) {
    MovingCube.translateX(moveDistance);
    lightTarget.translateX(moveDistance);
  }

  // rotate left/right/up/down
  var rotation_matrix = new THREE.Matrix4().identity();
  if (keyboard.pressed("A")) {
    MovingCube.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
    lightTarget.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
    var x = lightTarget.position.x - MovingCube.position.x;
    var z = lightTarget.position.z - MovingCube.position.z;

    lightTarget.position.x =
      x * Math.cos(rotateAngle) +
      z * Math.sin(rotateAngle) +
      MovingCube.position.x;
    lightTarget.position.z =
      z * Math.cos(rotateAngle) -
      x * Math.sin(rotateAngle) +
      MovingCube.position.z;
  }
  if (keyboard.pressed("D")) {
    MovingCube.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);
    lightTarget.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);
    var x = lightTarget.position.x - MovingCube.position.x;
    var z = lightTarget.position.z - MovingCube.position.z;

    lightTarget.position.x =
      x * Math.cos(-rotateAngle) +
      z * Math.sin(-rotateAngle) +
      MovingCube.position.x;
    lightTarget.position.z =
      z * Math.cos(-rotateAngle) -
      x * Math.sin(-rotateAngle) +
      MovingCube.position.z;
  }
  if (keyboard.pressed("R")) {
    MovingCube.rotateOnAxis(new THREE.Vector3(1, 0, 0), rotateAngle);
    lightTarget.rotateOnAxis(new THREE.Vector3(1, 0, 0), rotateAngle);
    var x = lightTarget.position.x - MovingCube.position.x;
    var y = lightTarget.position.y - MovingCube.position.y;

    lightTarget.position.x =
      x * Math.cos(rotateAngle) +
      y * Math.sin(rotateAngle) +
      MovingCube.position.x;
    lightTarget.position.y =
      y * Math.cos(rotateAngle) -
      x * Math.sin(rotateAngle) +
      MovingCube.position.y;
  }
  if (keyboard.pressed("F")) {
    MovingCube.rotateOnAxis(new THREE.Vector3(1, 0, 0), -rotateAngle);
    lightTarget.rotateOnAxis(new THREE.Vector3(1, 0, 0), -rotateAngle);
    var x = lightTarget.position.x - MovingCube.position.x;
    var y = lightTarget.position.y - MovingCube.position.y;

    lightTarget.position.x =
      x * Math.cos(-rotateAngle) +
      y * Math.sin(-rotateAngle) +
      MovingCube.position.x;
    lightTarget.position.y =
      y * Math.cos(-rotateAngle) -
      x * Math.sin(-rotateAngle) +
      MovingCube.position.y;
  }

  if (keyboard.pressed("U")) {
    lightTarget.translateZ(-moveDistance);
  }
  if (keyboard.pressed("J")) {
    lightTarget.translateZ(moveDistance);
  }
  if (keyboard.pressed("Y")) {
    lightTarget.translateX(-moveDistance);
  }
  if (keyboard.pressed("I")) {
    lightTarget.translateX(moveDistance);
  }

  if (keyboard.pressed("H")) {
    lightTarget.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
    var x = lightTarget.position.x - MovingCube.position.x;
    var z = lightTarget.position.z - MovingCube.position.z;

    lightTarget.position.x =
      x * Math.cos(rotateAngle) +
      z * Math.sin(rotateAngle) +
      MovingCube.position.x;
    lightTarget.position.z =
      z * Math.cos(rotateAngle) -
      x * Math.sin(rotateAngle) +
      MovingCube.position.z;
  }
  if (keyboard.pressed("K")) {
    lightTarget.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);
    var x = lightTarget.position.x - MovingCube.position.x;
    var z = lightTarget.position.z - MovingCube.position.z;

    lightTarget.position.x =
      x * Math.cos(-rotateAngle) +
      z * Math.sin(-rotateAngle) +
      MovingCube.position.x;
    lightTarget.position.z =
      z * Math.cos(-rotateAngle) -
      x * Math.sin(-rotateAngle) +
      MovingCube.position.z;
  }
  if (keyboard.pressed("O")) {
    lightTarget.rotateOnAxis(new THREE.Vector3(1, 0, 0), rotateAngle);
    var x = lightTarget.position.x - MovingCube.position.x;
    var y = lightTarget.position.y - MovingCube.position.y;

    lightTarget.position.x =
      x * Math.cos(rotateAngle) +
      y * Math.sin(rotateAngle) +
      MovingCube.position.x;
    lightTarget.position.y =
      y * Math.cos(rotateAngle) -
      x * Math.sin(rotateAngle) +
      MovingCube.position.y;
  }
  if (keyboard.pressed("L")) {
    lightTarget.rotateOnAxis(new THREE.Vector3(1, 0, 0), -rotateAngle);
    var x = lightTarget.position.x - MovingCube.position.x;
    var y = lightTarget.position.y - MovingCube.position.y;

    lightTarget.position.x =
      x * Math.cos(-rotateAngle) +
      y * Math.sin(-rotateAngle) +
      MovingCube.position.x;
    lightTarget.position.y =
      y * Math.cos(-rotateAngle) -
      x * Math.sin(-rotateAngle) +
      MovingCube.position.y;
  }

  movingLight.position.set(
    MovingCube.position.x,
    MovingCube.position.y + 40,
    MovingCube.position.z
  );
  movingLight.target = lightTarget;

  movingLightBulb.position = movingLight.position;

  if (keyboard.pressed("N")) {
    isDay = !isDay;
    if (isDay) {
      MakeDay();

      var skyBoxMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.BackSide
      });
    } else {
      var skyBoxMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.BackSide
      });
      MakeNight();
    }

    scene.remove(skyBox);
    var skyBoxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
    skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
    scene.add(skyBox);
  }
  if (keyboard.pressed("6")) {
    if (movingLight.intensity == 0) {
      movingLight.intensity = 0.7;
      movingLightBulb.visible = true;
    } else {
      movingLight.intensity = 0;
      movingLightBulb.visible = false;
    }
  }

  var relativeCameraOffset = new THREE.Vector3(0, 50, 200);

  var cameraOffset = relativeCameraOffset.applyMatrix4(MovingCube.matrixWorld);

  chaseCamera.position.x = cameraOffset.x;
  chaseCamera.position.y = cameraOffset.y;
  chaseCamera.position.z = cameraOffset.z;
  chaseCamera.lookAt(MovingCube.position);

  followCamera.lookAt(MovingCube.position);

  //camera.updateMatrix();
  //camera.updateProjectionMatrix();

  if (keyboard.pressed("1")) {
    chaseCameraActive = true;
    topCameraActive = false;
    followCameraActive = false;
  }
  if (keyboard.pressed("2")) {
    chaseCameraActive = false;
    topCameraActive = true;
    followCameraActive = false;
  }
  if (keyboard.pressed("3")) {
    chaseCameraActive = false;
    topCameraActive = false;
    followCameraActive = true;
  }
  if (keyboard.pressed("7")) {
    flatShading = false;
    GouroudShading = false;
    PhonShading = true;
    ChangeSphere();
  }
  if (keyboard.pressed("8")) {
    flatShading = false;
    GouroudShading = true;
    PhonShading = false;
    ChangeSphere();
  }
  if (keyboard.pressed("9")) {
    flatShading = true;
    GouroudShading = false;
    PhonShading = false;
    ChangeSphere();
  }

  if (keyboard.pressed("5")) {
    isFog = !isFog;
    if (isFog) scene.fog = new THREE.FogExp2(0x9999ff, 0.0023);
    else scene.fog = new THREE.FogExp2(0x9999ff, 0);
  }

  stats.update();
}
