const main = document.querySelector('main#main');
if (main) {
  main.remove();
}

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.innerHTML = "Jyew is the champion";

document.body.appendChild(newHeader);
