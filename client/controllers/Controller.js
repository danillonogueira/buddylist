class Controller {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._contacts = new Bind(
      new Contacts(),
      new ContactsView('.view'),
      'registerContact', 'deleteContacts', 'removeContact'
    );
    this._formView = new FormView('.form'); 
    this.init();
    this._inputName = $('.form__name');
    this._inputSurname = $('.form__surname');
    this._inputTel = $('.form__tel');
    this._inputEmail = $('.form__email');  
  }

  init() {
    this._formView.update();
  }

  createContact() {
    return new Contact(
      this._inputName.value,
      this._inputSurname.value,
      this._inputTel.value,
      this._inputEmail.value
    )
  }

  requestContactRegistering() {
    try {
      event.preventDefault();
      this._contacts.registerContact(this.createContact());
      this.emptyForm();
    } catch(err) {
      console.log(err);
      alert('It was not possible to register the contact');
    }
  }

  emptyForm() {
    event.preventDefault();
    [
      this._inputName,
      this._inputSurname,
      this._inputTel,
      this._inputEmail
    ].forEach(input => input.value = '');  
  }

  requestContactsRemoval() {
    event.preventDefault();
    this._contacts.deleteContacts();
  }

  requestContactRemoval(event) {
    if (event.target.classList.contains('view__remove')) {
      this._contacts.removeContact(parseInt(event.target.getAttribute('data-index')));     
    }
  }
}