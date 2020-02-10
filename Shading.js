function ChangeSphere() {
  sphereTable.forEach(x => {
    scene.remove(x);
  });

  var sphereGeom = new THREE.SphereGeometry(40, 10, 10);
  var colors = [
    0x00ff00,
    0x00ff00,
    0x00ff00,
    0xffff00,
    0xffff00,
    0xffff00,
    0xff0000,
    0xff0000,
    0xff0000
  ];
  for (var i = 0; i < 9; i++) {
    var sphere;

    if (flatShading) {
      var material1 = new THREE.MeshBasicMaterial({
        color: colors[i]
      });
      var sphere = new THREE.Mesh(sphereGeom.clone(), material1);
      sphere.position.set(-400 + i * 100, 40, -300);
    } else if (GouroudShading) {
      var material2 = new THREE.MeshLambertMaterial({
        color: colors[i]
      });

      var sphere = new THREE.Mesh(sphereGeom.clone(), material2);
      sphere.position.set(-400 + i * 100, 40, -300);
    } else {
      var material3 = new THREE.MeshPhongMaterial({
        color: colors[i]
      });

      var sphere = new THREE.Mesh(sphereGeom.clone(), material3);
      sphere.position.set(-400 + i * 100, 40, -300);
    }

    sphereTable.push(sphere);
    scene.add(sphere);
  }
}
