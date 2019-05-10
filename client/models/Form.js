class Form {
  constructor() {
    this._isEditing = false;
    this._dataIndex = false;
    this.createBtn = `
      <div class="form__control">       
        <button
          class="form__create"
          type="submit"
        >
          create    
        </button>
      </div>
    `;
    this.editBtn = `
      <div class="form__control">       
        <button 
          class="form__edit"
          data-index 
        >
          edit
        </button>
      </div>
    `;
  }

  getEditingStatus() {
    return this._isEditing;
  }

  switchEditingStatus() {
    if (!this.getEditingStatus()) {
      this._isEditing = true;
      return true;
    }

    this._isEditing = false;
  }
  
  getDataIndex() {
    return this._dataIndex;
  }

  setDataIndex(index) {
    this._dataIndex = index;
  }
}