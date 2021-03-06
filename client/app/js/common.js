

function setFocus(elem) {
  elem.focus();
}

function hideElem(elem) {
  elem.style.display = 'none';
}

function showElem(elem) {
  elem.style.display = 'block';
}

function create() {
  const template = document.querySelector('#card');
  const clone = template.content.cloneNode(true);
  const h5 = clone.querySelectorAll('h5');
  h5[0].innerHTML = document.getElementById('formGroupTitle').value;
  template.parentNode.appendChild(clone);


}

function formOfSubmit() {
  const submitForm = document.getElementById('submit-form');
  const btnPlus = document.getElementsByClassName('myBtn')[0];
  const focusOn = document.getElementById('exampleInputEmail1');

  hideElem(btnPlus);
  showElem(submitForm);
  setFocus(focusOn);
}

function regNewUser() {
  const user = document.getElementById('exampleInputLogin').value;

  const password = document.getElementById('exampleInputPassword').value;
  const name = document.getElementById('exampleInputName').value;
  const email = document.getElementById('exampleInputEmail').value;


  const b = JSON.stringify({
    user, password, name, group: '', email,
  });
  fetch('/api/users', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: b,
  }).then(response => response.json())
    .then(data => console.log(data));
}
