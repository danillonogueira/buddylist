class Contact {
  constructor(name, surname, tel, email) {
    this._name = name;
    this._surname = surname;
    this._tel = tel;
    this._email = email;
    Object.freeze(this);
  }

  getName() {
    return this.name;
  }

  getSurame() {
    return this.surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  getTel() {
    return this.tel;
  }

  getEmail() {
    return this.email;
  }
}