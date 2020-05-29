window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    console.log('Desktop');
  } else {
    console.log('mobile');
  }
});