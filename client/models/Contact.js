class Contact {
  constructor(name, surname, tel, email) {
    this._name = name;
    this._surname = surname;
    this._tel = tel;
    this._email = email;
    Object.freeze(this);
  }

  getFullName() {
    return `${this._name} ${this._surname}`;
  }
}