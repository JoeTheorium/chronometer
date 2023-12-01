const stopWatch = documment.getElementById('stopWatch');
const playPauseButton = documment.getElementById('play-pause');
const sphere = documment.getElementById('sphere');

let stopWatchInterval;
let runningTime = 0;

const playPause = () => {
  const isPaused = !playPauseButton.classList.contains('running');
  if (isPaused) {
    playPauseButton.classList.add('running');
    start();
  }
  else {
    playPauseButton.classList.remove('running');
    pause();
  }
}

const start = () => {
  sphere.style.animation = 'rotation 60s linear infinite';
  let startTime = Date.now() - runningTime;
  sphere.style.animationPlayState = 'running';
  stopWatchInterval = setInterval( () => {
    runningTime = Date.now() - startTime;
    stopWatch.textContent = calculateTime(runningTime);
  }, 1000)
}

const calculateTime = runningTime => {
  const total_seconds = Math.floor(runningTime / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, '0');
  const display_minutes = total_minutes.toString().padStart(2, '0');

  return `${display_minutes}:${display_seconds}`;
}
