import './style.scss';

const selectBtn = document.querySelector('.select__btn');
const selectList = document.querySelector('.select__list');
const arrow = document.querySelector('.select__arrow');
const selectInput = document.querySelector('.select-input');

// появление списка при нажатии на кнопку

selectBtn.addEventListener('click', () => {
  event.preventDefault();
  selectBtn.classList.toggle('select__btn--focus');
  selectList.classList.toggle('select__list--visible');
  arrow.classList.toggle('select__arrow--up');
});

// выбор элемента из списка

document.querySelectorAll('.select__item').forEach(function (selectItem) {
  selectItem.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.select__btn-text').innerText = this.innerText;
    selectList.classList.remove('select__list--visible');
    arrow.classList.remove('select__arrow--up');
    selectBtn.classList.remove('select__btn--focus');
    selectInput.value = this.dataset.value;
  });
});

// закрытие списка при нажатии по документу

document.addEventListener('click', function (e) {
  if (e.target !== selectBtn && selectList) {
    selectBtn.classList.remove('select__btn--focus');
    selectList.classList.remove('select__list--visible');
    arrow.classList.remove('select__arrow--up');
  }
});
