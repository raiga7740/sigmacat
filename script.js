particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#22c55e" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 2, random: true },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      straight: true
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});
