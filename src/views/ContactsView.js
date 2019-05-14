import { View } from './View';

export class ContactsView extends View {
  template(model) {
    return `
      ${model
        .getContacts()
        .map((contact, index) => {
          return `
            <ul class="view__contact">
              <li>${contact.name}</li>
              <li>${contact.surname}</li>
              <li>${contact.tel}</li>
              <li>${contact.email}</li>
            </ul>
            <button 
              class="view__edit" 
              data-index="${index}"
            >
              edit
            </button>
            <button 
              class="view__remove" 
              data-index="${index}"
            >
              remove        
            </button>
          `
        })
        .join('')
      }
    `;
  }
}