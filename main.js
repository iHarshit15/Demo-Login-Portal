//Single Element
//const form = document.getElementById('my-form');
//console.log(document.querySelector('h1'));

//Multiple Element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));


// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

//ul.remove();

//ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'Hello';

// ul.children[1].innerText = 'Brad';

// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = '#ccc'
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
}); 