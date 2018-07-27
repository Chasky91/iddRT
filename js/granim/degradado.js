var granimInstance = new Granim({
  element: '#canvas-interactive',
  name: 'interactive-gradient',
  elToSetClassOn: '.canvas-interactive-wrapper',
  direction: 'diagonal',
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  states : {
      "default-state": {
          gradients: [
              ['#6BA8EB', '#5669F0'],
              ['#5669F0', '#6BA8EB'],
              ['#6BA8EB', '#5669F0']
          ],
          transitionSpeed: 10000
      },
  }
});
