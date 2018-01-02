
class NotesApp {

  constructor(ui) {
    this._ui = ui
    this._notes = []
  }

  onAppStart() {
    this._ui.clearTitles()
    this.onNewNote()
  }

  onInput(text) {
    this._ui.updateTitle(0, text.split('\n')[0])
    this._notes[0] = text
  }

  onNewNote(text) {
    this._ui.addTitle('New Note')
    this._ui.clearMainText()
    this._notes.unshift('')
  }

  onSelectNote(index) {
    this._ui.setMainText(this._notes[index])
    this._ui.activateTitle(index)
  }
}

