console.log('it works');

const div = document.getElementById('post-list');
const header = document.querySelector('#postTitle');
const paragraph = document.querySelector('.form-control');
const image = document.querySelector('img');
const date = document.querySelector('.card-footer', 'text-muted');
const button = document.querySelector('btn', 'btn-primary');


const divCard= document.createElement('div');
const newImage = document.createElement('img');
const divCardBody = document.createElement('div');
const newHeader = document.createElement('h5');
const newParagraph = document.createElement('p');
const newDate = document.createElement('div');
const newButton = document.createElement('button');


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

const buttonHideForm = document.getElementById('show-form');
const hiddenForm = document.getElementById('form-card');

buttonHideForm.addEventListener('click', ($event) => {
  if ($event.target.value ===  ".hidden") {
    buttonHideForm.setAttribute('show-form', 'Add a post');
  } else {
      return buttonHideForm;
  }
});

hiddenForm.addEventListener('click', ($event) => {
    hidden
  });



// const button = document.querySelector('btn', 'btn-sm btn-light', 'btn-delete');

// button.addEventListener('click', ($event) => {
// $event.preventDefault();
// newHeader.textContent = `${header.value}`;
// newParagraph.textContent = `${paragraph.value}`;
// div.appendChild(divCard);
// });

