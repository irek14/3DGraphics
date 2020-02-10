function MakeDay() {
  scene.remove(spotlightBulb);
  scene.add(lightbulb);

  spotlight.intensity = 0;
  light.intensity = 1;
}

function MakeNight() {
  scene.remove(lightbulb);
  scene.add(spotlightBulb);

  spotlight.intensity = 1;
  light.intensity = 0;
}
