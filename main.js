const div = document.querySelector('div');

let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;


div.addEventListener('mousedown', () => {
    div.style.background = 'gray';
})

div.addEventListener('mousemove', (e) => {
    divx = e.clientX;
    divY = e.clientY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
})

div. addEventListener('mouseup', () => {
    div.style.background = 'black'
})