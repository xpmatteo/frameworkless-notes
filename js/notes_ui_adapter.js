
class NotesUiAdapter {
  constructor(document) {
    this._document = document
  }

  updateTitle(index, text) {
    this.$('note-selector-title', index).innerText = text
  }

  clearTitles() {
    this.$('note-selectors').innerHTML = ''
  }

  addTitle(text) {
    var newTitle = `
      <div class="note-selector active">
        <p class="note-selector-title">${text}</p>
      </div>
      `
    var container = this.$('note-selectors')
    container.innerHTML = newTitle + container.innerHTML
  }

  clearMainText() {
    this.$('note-editor-input').value = ''
  }

  $(className, index=0) {
    return this._document.getElementsByClassName(className)[index]
  }
}
