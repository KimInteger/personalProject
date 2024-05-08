const root = document.getElementById('root');
const rootS = root.style;

rootS.display = 'flex';
rootS.flexDirection = 'row';
rootS.alignItems = 'center';
rootS.justifyContent = 'center';
rootS.margin = '2vh 0';
rootS.width = '90vw';
rootS.height = '90vh';
rootS.border = '3px solid black';
rootS.flexWrap = 'nowrap';
rootS.overflowX = 'hidden';
rootS.columnGap = '100px';

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
  div.className = 'stage';
  root.appendChild(div);
}

function leftBtn(){
  let div = document.getElementsByClassName('stage');
  if(root.style.justifyContent === 'flex-start'){
    root.style.justifyContent = 'center';
    root.style.columnGap = '100px';
    for(let i = 0; i < div.length; i++){
      div[i].style.margin = '';
    }
  } else if(root.style.justifyContent === 'center'){
    root.style.justifyContent = 'flex-end';
    root.style.columnGap = '';
    for(let i = 0; i < div.length; i ++ ){
      div[i].style.marginRight = '5vw';
      div[i].style.marginLeft = '';
    }
    div[2].style.marginRight = '10vw';
  } else if(root.style.justifyContent === 'flex-end'){
    root.style.justifyContent = 'flex-start';
    root.style.columnGap = '';
    for(let i = 0; i < div.length; i ++){
      div[i].style.marginRight = '';
      div[i].style.marginLeft = '5vw';
    }
    div[0].style.marginLeft = '10vw';
  } else {
    console.error('error');
  }
}
// 실행이 안되서 무엇이 문제인가 확인해 보기 위하여, roo.style을 콘솔에 찍어본 결과 justifyContent부분이 없는 것을 확인할 수 있었다.
// CSS로 적용한 것은 DOM tree로 합쳐지기 전까지 들어가지 않는 다는 것을 망각했다.
// 아이고.

function rightBtn(){
  let div = document.getElementsByClassName('stage');
  if(root.style.justifyContent === 'flex-end'){
    root.style.justifyContent = 'flex-start';
    root.style.columnGap = '';
    for(let i = 0; i < div.length; i ++){
      div[i].style.marginRight = '';
      div[i].style.marginLeft = '5vw';
    }
    div[0].style.marginLeft = '10vw';
  } else if (root.style.justifyContent === 'flex-start'){
    root.style.justifyContent = 'center';
    root.style.columnGap = '100px';
    for(let i = 0; i < div.length; i++){
      div[i].style.margin = '';
    }
  } else if (root.style.justifyContent === 'center') {
    root.style.justifyContent = 'flex-end';
    root.style.columnGap = '';
    for(let i = 0; i < div.length; i ++ ){
      div[i].style.marginRight = '5vw';
      div[i].style.marginLeft = '';
    }
    div[2].style.marginRight = '10vw';
  } else {
    console.error('error');
  }
}

leftM.addEventListener('click', leftBtn);

rightM.addEventListener('click', rightBtn);