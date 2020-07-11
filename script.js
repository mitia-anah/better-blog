
// grab the elements we need
const myPost = document.querySelector('#post-list');
const postTitle = document.querySelector('#postTitle');
const postContent = document.querySelector('textarea');
postContent.classList.add("post-content");
const deleteBtn = document.querySelector('btn', 'btn-sm', 'btn-light', 'btn-delete');
const date = document.querySelector('.card-footer', 'text-muted');
const newPostForm = document.querySelector('form');
const submitBtn = document.querySelector('.btn-primary');
const newForm = document.querySelector('#form-card');

// add the event listener on the submit, click
 submitBtn.addEventListener('click', ($event) => {
    $event.preventDefault();

    //creat html 
    const myHTMLPost = `
    <div class="card">
        <img class="card-img-top"
        src="https://picsum.photos/500/200"
        alt="Card image cap"/>

        <div class="card-body">
            <h5 class="card-title">${postTitle.value}</h5>

            <p class="card-text">${postContent.value}</p>

            <button class="btn btn-sm btn-light btn-delete">Delete entry</button>

            <div class="card-footer text-muted ">10/07/20202</div>
        </div>
    </div>
    `;

    myPost.innerHTML += myHTMLPost;

    newPostForm.reset();
});
 console.log(myPost);


const buttonHideForm = document.getElementById('show-form');

buttonHideForm.addEventListener('click', ($event) => {
  if ($event.target.value ===  ".hidden") {
    buttonHideForm.setAttribute('show-form', 'Add a post');
  } else {
      return buttonHideForm;
  }
});

// To hide the form, you can hide the element with the id _#form-card_.
const hiddenForm = document.getElementById('show-form');

hiddenForm.addEventListener('click', ($event) => {
    newForm.style.display = "none";
});

const errorMessage = document.querySelector('#error-message');

postContent.addEventListener('input', ($event) => {
  if ($event.target.value.length < 20) {
      errorMessage.style.display = 'block';
  } else {
      errorMessage.style.display = 'none';
  }
});