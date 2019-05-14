class FormHelper {
  constructor() {
    this._inputName = $('.form__name');
    this._inputSurname = $('.form__surname');
    this._inputTel = $('.form__tel');
    this._inputEmail = $('.form__email');
    this._createBtn =  $('.form__create');
    this._editBtn = $('.form__edit');
    Object.freeze(this);
  }

  clearForm() {
    [
      this._inputName,
      this._inputSurname,
      this._inputTel,
      this._inputEmail
    ].forEach(input => input.value = '');
    this.resetAndHideEditBtn();
    this.showCreateBtn();
  }

  fillForm(contact) {
    this._inputName.value = contact.name;
    this._inputSurname.value = contact.surname;
    this._inputTel.value = contact.tel;
    this._inputEmail.value = contact.email;
  }

  resetAndHideEditBtn() {
    this._editBtn.setAttribute('hidden', '');
    this._editBtn.removeAttribute('data-index');
  }

  hideCreateBtn() {
    this._createBtn.setAttribute('hidden', '');
  }

  showCreateBtn() {
    this._createBtn.removeAttribute('hidden');
  }

  createContact() {
    return new Contact(
      this._inputName.value,
      this._inputSurname.value,
      this._inputTel.value,
      this._inputEmail.value
    );
  }

  showEditBtnAndSetIndex(index) {
    this._editBtn.removeAttribute('hidden');
    this._editBtn.setAttribute('data-index', index);
  }
}