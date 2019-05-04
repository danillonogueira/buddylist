class ContactsView extends View {
  template(model) {
    return `
      ${model
        .getContacts()
        .map((contact) => {
          return `
            <ul>
              <li>${contact._name}</li>
              <li>${contact._surname}</li>
              <li>${contact._tel}</li>
              <li>${contact._email}</li>
            </ul>
          `
        })
        .join('')
      }
    `;
  }
}