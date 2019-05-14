class Contact {
  constructor(name, surname, tel, email) {
    this.name = name;
    this.surname = surname;
    this.tel = tel;
    this.email = email;
    Object.freeze(this);
  }
}