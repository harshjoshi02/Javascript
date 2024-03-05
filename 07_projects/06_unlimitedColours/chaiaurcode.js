// generating the random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    // console.log(color);
    // document.body.style.backgroundColor = color;
    return color;
  };
  
  // console.log(randomColor());
  let startInterval;
  
  const startChanging = function () {
    document.body.style.backgroundColor = randomColor();
  };
  
  // const stopChanging = function () {
  //   clearInterval(startInterval);
  // };
  
  document.querySelector('#start').addEventListener('click', function () {
    if (!startInterval) {
      startInterval = setInterval(startChanging, 1000);
    }
  });
  
  // document.querySelector('#stop').addEventListener('click', startChanging);
  
  document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(startInterval);
    startInterval = null;
  });
  