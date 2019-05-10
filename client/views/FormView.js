class FormView extends View {
  template(model) {
    return `
      <div class="form__control">
        <label for="name">name</label>
        <input 
          type="text"
          name= "name"
          class="form__name"
        >
      </div>      
      <div class="form__control">
        <label for="surname">surname</label>
        <input 
          type="text"
          name="surname"
          class="form__surname"
        >
      </div>        
      <div class="form__control">
        <label>telephone</label>
        <input 
          type="text"
          name="telephone"
          class="form__tel"
        >
      </div>       
      <div class="form__control">
        <label>email</label>
        <input 
          type="text"
          name="email"
          class="form__email"
        >
      </div>
      ${
        (!model.getEditingStatus())
          ? model.createBtn
          : model.editBtn
      }
      <div class="form__control">
        <button class="form__clear">clear</button>
      </div>
      <div class="form__control">
        <button class="form__delete">delete all</button>
      </div>       
    `;
  }
}