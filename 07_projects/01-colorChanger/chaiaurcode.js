console.log('harsh');
const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    //   body.style.color = 'white';
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    //   body.style.color = 'black';
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    //   body.style.color = 'white';
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    //   body.style.color = 'black';
    // }

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        body.style.color = 'white';
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        body.style.color = 'black';
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        body.style.color = 'white';
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        body.style.color = 'black';
        break;
    }
  });
});
