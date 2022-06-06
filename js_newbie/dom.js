const container = document.querySelector('#container');

const content =document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
const para = document.createElement('p');
para.style.color="red";
para.textContent="hey i'm red";
container.appendChild(para);

const h3=document.createElement('h3');
h3.style.color="blue";
h3.textContent="i'm blue h3";
container.appendChild(h3);

const div2 =document.createElement('div');
div2.style.backgroundColor="pink";
div2.style.border="black";

const h1=document.createElement('h1');
h1.textContent="i'm in div";
div2.appendChild(h1);
const p=document.createElement('p');
p.textContent="me too !";
div2.appendChild(p);
container.appendChild(div2);

