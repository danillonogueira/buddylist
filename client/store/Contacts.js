class Contacts {
  constructor() {
    this._contacts = [];
    Object.freeze(this);
  }

  getContacts() {
    return [].concat(this._contacts);
  }

  deleteContacts() {
    this._contacts.length = 0;
    console.log(this._contacts);
  }

  registerContact(contact) {
    this._contacts.push(contact);
    console.log(this._contacts);
  }

  removeContact(contactId) {
    this._contacts.splice(contactId, 1);
    console.log(this._contacts);
  }

  editContact(id) {

  } 
}