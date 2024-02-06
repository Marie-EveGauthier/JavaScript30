/** Get elements */

// const video = document.querySelector(video);
//  scripts.js:3 Uncaught ReferenceError:
// Cannot access 'video' before initialization
// => i didn't put apostrophe around the tag name :/

const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.player__button.toggle');

const volumeRange = player.querySelector('input[name="volume"]');
const playbackRateRange = player.querySelector('input[name="playbackRate"]');

//Wes uses the same selector for both sliders (volume and playbackRate)
const ranges = player.querySelectorAll('.player__slider')
// const skip10Button = document.querySelector(`.player__button[data-skip="-10"]`);
// const skip25Button = document.querySelector(`.player__button[data-skip="25"]`);
// WES uses the same selector for both
const skipButtons = document.querySelectorAll('[data-skip]');

/** Build the functions to make these elements do something*/

/**
 * Default color for input range
 * 1st playbackRate
 * 2nd volume
 */
const minPlaybackRate = playbackRateRange.min
const maxPlaybackRate = playbackRateRange.max
const valuePlaybackRate = playbackRateRange.value

let percentagePlaybackRate = valuePlaybackRate
percentagePlaybackRate = (valuePlaybackRate - minPlaybackRate) / (maxPlaybackRate - minPlaybackRate) * 100

playbackRateRange.style.backgroundSize = `${percentagePlaybackRate}% 100%`

const minVolume = volumeRange.min
const maxVolume = volumeRange.max
const valueVolume = volumeRange.value

let percentageVolume = valueVolume
percentageVolume = (valueVolume - minVolume) / (maxVolume - minVolume) * 100

volumeRange.style.backgroundSize = `${percentageVolume}% 100%`

/**
 * Instead of playing with a class that is added/removed when the video is manually played/paused
 * (because it can be by other ways)
 * Wes is using video event to detect what is its state
 * These event handlers are added at the bottom of the file
 * with other handlers
 *  */

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  playButton.textContent = icon
}

async function playVideo() {
  try {
    await video.play()
    // playButton.classList.add('playing');
  } catch (error) {
    // playButton.classList.remove('playing');
  }
}
function handlePlayButton() {
  if (video.paused) {
    playVideo()
  } else {
    video.pause()
    // playButton.classList.remove('playing');
  }
}

/**
 * Wes transforms in a concise 2 lines code this ^ function
 * function togglePlay() {
 *  const method = video.paused ? 'play' : 'pause'
 *  video[method]()
 * }
 *  */


/**
 * When I first did it, I selected an element for each of the input
 * and mainly repeat the same method for both with a different name
 * It is done this way because I use the event.target to change the color
 * of the track.
 *
 * But again, Wes does it with a simple and concine 1 line code !!!!
 * It is possible because he gave to the input the name of the video's property
 */

// WES:
function handleRangeUpdate() {
  video[this.name] = this.value
}
function modifyVolum(evt) {
  const { value } = evt.target
  const { min } = evt.target
  const { max } = evt.target

  video.volume = value;

  let percentage = value
  percentage = (value - min) / (max - min) * 100

  evt.target.style.backgroundSize = `${percentage}% 100%`

}


function modifySpeed(evt) {
  const { value } = evt.target
  const { min } = evt.target
  const { max } = evt.target

  video.playbackRate = value

  let percentage = value
  percentage = (value - min) / (max - min) * 100

  evt.target.style.backgroundSize = `${percentage}% 100%`
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}
/** Hook up the event listeners */

playButton.addEventListener('click', handlePlayButton)
playVideo()

// Wes also wants to be able to click on the video to toggle play/pause
video.addEventListener('click', handlePlayButton)

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

video.addEventListener('timeupdate', handleProgress)

volumeRange.addEventListener('input', modifyVolum)

playbackRateRange.addEventListener('input', modifySpeed)


skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


/**
 * Challenge : make the video goes fullscreen
 *
 */
const toggleFullScreen = player.querySelector('.toggleFullScreen')

function toggleMaximise() {
  console.log('should maximise')
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
toggleFullScreen.addEventListener('click', toggleMaximise)
