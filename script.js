console.log('it works');

const div = document.getElementById('post-list');
const header = document.querySelector('#postTitle');
const paragraph = document.querySelector('.form-control');


const divCard= document.createElement('div');
const image = document.createElement('img');
const divCardBody = document.createElement('div');
const newHeader = document.createElement('h5');
const newParagraph = document.createElement('p');

// add class to each element to its parent

divCard.classList.add('card');
divCardBody.classList.add('card-body');
newHeader.classList.add('card-title');
newParagraph.classList.add('card-text');

// join everything to the DOM

divCardBody.appendChild(newHeader);
divCardBody.appendChild(newParagraph);
divCard.appendChild(divCardBody);

div.appendChild(divCard);
console.log(div);

// Add event listener on the submit element
// const button = document.querySelector('btn', 'btn-sm btn-light', 'btn-delete');

// button.addEventListener('click', ($event) => {
// $event.preventDefault();
// newHeader.textContent = `${header.value}`;
// newParagraph.textContent = `${paragraph.value}`;
// div.appendChild(divCard);
// });