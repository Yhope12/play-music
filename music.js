const songElement = document.getElementById("songElement");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeUpBtn = document.getElementById("volumeUpBtn");
const volumeDownBtn = document.getElementById("volumeDownBtn");
const volumePercentage = document.getElementById("volumePercentage");
const skipForward = document.getElementById("skipForward");
const skipBackward = document.getElementById("skipBackward");
const currentPlayingTime = document.getElementById("currentPlayingTime");

playBtn.onclick = () => {
  songElement.play();
};
pauseBtn.onclick = () => {
  songElement.pause();
};
volumeUpBtn.onclick = () => {
  let realVolumePercentage = parseInt(songElement.volume * 100);
  volumePercentage.innerText = `${realVolumePercentage}%`;
  if (songElement.volume < 1) {
    songElement.volume = (realVolumePercentage + 10) / 100;
  }
};
volumeDownBtn.onclick = () => {
  let realVolumePercentage = parseInt(songElement.volume * 100);
  volumePercentage.innerText = `${realVolumePercentage}%`;
  if (songElement.volume > 0.1) {
    songElement.volume = (realVolumePercentage - 10) / 100;
  }
};
muteBtn.onclick = () => {
  songElement.volume = 0;
  volumePercentage.innerText = `0%`;
};
skipForward.onclick = () => {
  const totalSecond = parseInt(songElement.duration);
  const second = parseInt(songElement.currentTime);
  if (second < totalSecond) {
    songElement.currentTime = second + 5;
  }
};
skipBackward.onclick = () => {
  const second = parseInt(songElement.currentTime);
  songElement.currentTime = second - 5;
};
songElement.addEventListener("timeupdate", () => {
  const second = parseInt(songElement.currentTime);
  const displayMinute = parseInt(second / 60);
  const displaySecond = parseInt(second % 60);
  currentPlayingTime.innerText = `0${displayMinute}:${displaySecond} / 03:03`;
});
