export class Contacts {
  constructor() {
    this._contacts = [];
    Object.freeze(this);
  }

  getContacts() {
    return [].concat(this._contacts);
  }
  
  getContact(index) {
    return this.getContacts()[index];
  }

  deleteContacts() {
    this._contacts.length = 0;
    console.log(this._contacts);
  }

  registerContact(contact) {
    this._contacts.push(contact);
    console.log(this._contacts);
  }

  removeContact(id) {
    this._contacts.splice(id, 1);
    console.log(this._contacts);
  }

  editContact(contact, id) {
    this.removeContact(id);
    this.registerContact(contact);
  } 
}