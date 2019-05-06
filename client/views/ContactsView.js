class ContactsView extends View {
  template(model) {
    return `
      ${model
        .getContacts()
        .map((contact, index) => {
          return `
            <ul class="view__contact">
              <li>${contact._name}</li>
              <li>${contact._surname}</li>
              <li>${contact._tel}</li>
              <li>${contact._email}</li>
            </ul>
            <button class="view__edit"  data-index="${index}">edit</button>
            <button class="view__remove"  data-index="${index}">remove</button>
          `
        })
        .join('')
      }
    `;
  }
}