
class NotesUiAdapter {
  constructor(document) {
    this._document = document
  }

  updateTitle(index, text) {
    this._document.getElementsByClassName('note-selector-title')[index].innerText = text
  }

  clearTitles() {
    this._document.getElementsByClassName('note-selectors')[0].innerHTML = ''
  }

  addTitle(text) {
    var container = this._document.getElementsByClassName('note-selectors')[0]
    var newTitle = `
      <div class="note-selector active">
        <p class="note-selector-title">${text}</p>
      </div>
      `
    container.innerHTML = newTitle + container.innerHTML
  }

  clearMainText() {
    this._document.getElementsByClassName('note-editor-input')[0].value = ''
  }

}
