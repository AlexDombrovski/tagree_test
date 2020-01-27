// checking a PHONE number
const checkingPhone = (value) => {
  event.preventDefault();
  const templatePhoneNumber = [
    /^8\d{3}\d{3}\d{2}\d{2}$/,
    /^8\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/,
    /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/,
    /^\+7\d{3}\d{3}\d{2}\d{2}$/
  ];

  const check = templatePhoneNumber.some(item => item.test(value));

  if (!check) {
    [...document.querySelectorAll('.general-input_phone')].forEach((number) => {
      number.classList.add('red-border');
    })
  } else if (check) {
    document.querySelector('.general-input_phone.red-border').classList.remove('red-border');
  }
};


// checking a FAX number
const checkingFax = (value) => {
  event.preventDefault();
  const templatePhoneNumber = [
    /^8\d{3}\d{3}\d{2}\d{2}$/,
    /^8\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/,
    /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/,
    /^\+7\d{3}\d{3}\d{2}\d{2}$/
  ];

  const check = templatePhoneNumber.some(item => item.test(value));

  if (!check) {
    document.querySelector('.general-input_fax').classList.add('red-border');
  } 
  else if (check) {
    document.querySelector('.general-input_fax.red-border').classList.toggle('red-border');
  }
};


// delete a product block in Products-form
const productOption = [...document.querySelectorAll('.products_option')];

productOption.forEach((option) => {
  option.addEventListener('click', () => {
    option.classList.add('hidden');
  })
})


// adding the new phone number 
const morePhonesButton = document.querySelector('.phone-numbers_more-button');
const allPhoneNumbers = document.querySelector('.phone-numbers');

morePhonesButton.onclick = () => {
  const newTelInputWrap = document.createElement('div');
  newTelInputWrap.className = ('phone-numbers_new');

  const newTelInput = document.createElement('input');
  newTelInput.className = ('general-input_phone');
  newTelInput.setAttribute('type', 'tel');
  newTelInputWrap.append(newTelInput);

  const deleteBtn = document.createElement('div');
  deleteBtn.className = ('phone-numbers_delete-button');
  deleteBtn.innerHTML = '&ndash;';
  newTelInputWrap.append(deleteBtn);

  allPhoneNumbers.after(newTelInputWrap);

  document.querySelector('.phone-numbers_delete-button').onclick = () => {
    document.querySelector('.phone-numbers_new').remove();
  }
}