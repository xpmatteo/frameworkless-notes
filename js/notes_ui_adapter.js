
class NotesUiAdapter {
  constructor(document) {
    this._document = document
  }

  updateTitle(index, text) {
    this._document.getElementsByClassName('note-selector-title')[index].innerText = text
  }

}
