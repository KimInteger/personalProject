const root = document.getElementById('root');

const leftM = document.getElementById('leftMove');

const rightM = document.getElementById('rightMove');

const partition = document.getElementById('partition');

for(let i = 0; i < 3; i++) {
  let div = document.createElement('div');
  div.style.backgroundColor = 'white';
  div.style.border = '3px solid black';
  div.style.display = 'flex';
  div.style.width = '70vw';
  div.style.height = '60vh';
  div.style.zIndex = 2;
  div.style.flexShrink = 0;
  root.appendChild(div);
}

function leftMove() {

}