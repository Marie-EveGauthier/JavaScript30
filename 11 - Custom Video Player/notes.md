# 11 - Custom Video Player

### Topics covered
- [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [`<input type="range"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

### Notes
- transform a `string` in `number` with `parseFloat`

#### Range Input
Interesting and clear [smashing article](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/)

How to style the input to change the background-color depending of the value selected : [inspiration](https://nikitahl.com/style-range-input-css)

- 2 parts : `track` and `thumb`
- it renders very differently depending of the browser
- to style it, we use the element-attribute selector `input[type='range']`
  1. remove the default styles applied by each browser
  2. style the track
    - `::-webkit-slider-runnable-track`
      _Targets the **track** in Chrome, Safari, and Edge Chromium._
    - `::-moz-range-track`
      _Targets the **track** in Firefox._
    - Required properties: `height` and `background`
  3. style the thumb
    - `::-webkit-slider-thumb`
      _Targets the **thumb** in Chrome, Safari, and Edge Chromium._
    - `::-moz-range-thumb`
      _Targets the **thumb** in Firefox._
    - Required properties: `height` and `background`
    - By default, the WebKit browser doesn't center the thumb on the track
    - Formula to center the thumb : `(track height in pixels / 2) - (thumb height in pixels /2)`


#### Video element

- the only _attribute_ related to the state of the `video` is `paused`
- attributes _playing_ or _stopped_ don't exist
- otherwise, `video` has the _events_ `play` and `pause`
```
  function handlePlayButton() {
  if (video.paused) {
    video.play
  } else {
    video.pause()
  }
}
```


#### Modify html in javascript
1. Grab the `element` wiht a `querySelector`
2. Use _element_.**textContent** to define the content

Example in this exercice : how we change the icon for the toggle button depending of the video's state
```
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  playButton.textContent = icon
}
```

#### Fullscreen API

To make a video fullscreen, we need the [`Fullscreen API`](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
