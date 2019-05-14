import { Contacts } from '../models/Contacts';
import { ContactsView } from '../views/ContactsView';
import { FormView } from '../views/FormView';
import { FormHelper } from '../helpers/FormHelper';
import { $ } from '../helpers/Alias'

export class Controller {
  constructor() {
    this._contacts = new Contacts();
    this._contactsView = new ContactsView('.view');
    this._formView = new FormView('.form');
    this.renderViews();
    this._formHelper = new FormHelper();
  }

  renderViews() {
    this._formView.update();
    this._contactsView.update(this._contacts);
  }

  clearClick(event) {
    event.preventDefault();
    this._formHelper.clearForm();
  }

  createClick(event) { 
    event.preventDefault(); 
    try {
      this._contacts.registerContact(this._formHelper.createContact());
      this._formHelper.clearForm();
      this._contactsView.update(this._contacts);
    } catch(err) {
      console.log(err);
      alert('It was not possible to register contact');
    }
  }

  editClick(event) {
    event.preventDefault();
    this._contacts.editContact(
      this._formHelper.createContact(), 
      parseInt($('.form__edit').getAttribute('data-index'))
    );
    this._formHelper.clearForm();
    this._contactsView.update(this._contacts);
  }

  deleteAllClick(event) {
    event.preventDefault();
    this._contacts.deleteContacts();
    this._contactsView.update(this._contacts);
    this._formHelper.clearForm();
  }

  contactListClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('view__remove')) {
      const index = parseInt(event.target.getAttribute('data-index'));
      this._contacts.removeContact(index);
      this._contactsView.update(this._contacts);
      this._formHelper.clearForm();  
    }

    if (event.target.classList.contains('view__edit')) {
      const index = parseInt(event.target.getAttribute('data-index'));
      const contact = this._contacts.getContact(index);
      this._formHelper.showEditBtnAndSetIndex(index);
      this._formHelper.hideCreateBtn();
      this._formHelper.fillForm({ ...contact });
    }  
  }
}