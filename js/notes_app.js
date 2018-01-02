
class NotesApp {

  constructor(ui) {
    this._ui = ui
    this._notes = []
    this._selectedNote = 0
  }

  onAppStart() {
    this._ui.clearTitles()
    this.onNewNote()
  }

  onInput(text) {
    if (this._selectedNote != 0) {
      var note = this._notes.splice(this._selectedNote, 1)
      this._notes.unshift(note)
      this._ui.moveTitleToTop(this._selectedNote)
      this._selectedNote = 0
    }
    this._ui.updateTitle(0, text.split('\n')[0])
    this._notes[0] = text
  }

  onNewNote(text) {
    this._ui.addTitle('New Note')
    this._ui.clearMainText()
    this._notes.unshift('')
    this._selectedNote = 0
  }

  onSelectNote(index) {
    this._ui.setMainText(this._notes[index])
    this._ui.activateTitle(index)
    this._selectedNote = index
  }

  note(index) {
    return this._notes[index]
  }
}

