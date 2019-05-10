class Controller {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._contacts = new Bind(
      new Contacts(),
      new ContactsView('.view'),
      'registerContact', 
      'deleteContacts', 
      'removeContact', 
      'editContact'
    );
    this._form = new Bind(
      new Form(),
      new FormView('.form'),
      // 'switchEditingStatus'
    );
    this._inputName = $('.form__name');
    this._inputSurname = $('.form__surname');
    this._inputTel = $('.form__tel');
    this._inputEmail = $('.form__email'); 
  }

  clearForm() {
    [
      this._inputName,
      this._inputSurname,
      this._inputTel,
      this._inputEmail
    ].forEach(input => input.value = '');
    // this._form.setDataIndex(false);
  }

  fillForm(contact) {
    this._inputName.value = contact.name;
    this._inputSurname.value = contact.surname;
    this._inputTel.value = contact.tel;
    this._inputEmail.value = contact.email;
    console.log(this._inputName.value);
    console.log(this._inputSurname.value);
    console.log(this._inputTel.value);
    console.log(this._inputEmail.value);
  }

  createContact() {
    return new Contact(
      this._inputName.value,
      this._inputSurname.value,
      this._inputTel.value,
      this._inputEmail.value
    )
  }

  clearClick() {
    event.preventDefault();
    this.clearForm();
  }

  createClick() { 
    event.preventDefault(); 
    try {
      this._contacts.registerContact(this.createContact());
      this.clearForm();
    } catch(err) {
      console.log(err);
      alert('It was not possible to register the contact');
    }
  }

  // editClick(event) {

  // }

  deleteAllClick() {
    event.preventDefault();
    this._contacts.deleteContacts();
  }

  contactListClick(event) {
    if (event.target.classList.contains('view__remove')) {
      const index = parseInt(event.target.getAttribute('data-index'));
      this._contacts.removeContact(index);  
    }

    if (event.target.classList.contains('view__edit')) {
      const index = parseInt(event.target.getAttribute('data-index'));
      const contact = this._contacts.getContact(index);
      /**
       * THESE TWO ARE THE DAMN PROBLEM
       */
      this._form.switchEditingStatus();     
      this._form.setDataIndex(index);
      this.fillForm({ ...contact });
    }
  }
}
