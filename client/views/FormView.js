class FormView extends View {
  template() {
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
      <div class="form__control">       
        <button type="submit" class="form__create">create</button>
      </div>
      <div class="form__control">
        <button class="form__empty">clear</button>
      </div>
      <div class="form__control">
        <button class="form__delete">delete all</button>
      </div>       
    `;
  }
}