console.log('this is from index');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

let clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', function () {
  console.log('you just clicked');
});

function normalFunction() {
  console.log('this is a normal function');
}

const arrowFunction = () => 1 + 2;
// console.log('this is an arrow function');
// return 1 + 2;
normalFunction();
arrowFunction();
console.log(arrowFunction());


// loop
const arr = [1, 2, 3, 4, 5];
for (const number of arr) console.log(number);
