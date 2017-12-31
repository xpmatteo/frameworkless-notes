
class NotesApp {

  constructor(ui) {
    this._ui = ui
  }

  onAppStart() {
    this._ui.clearTitles()
    this._ui.addTitle('New Note')
  }

  onInput(text) {
    this._ui.updateTitle(0, text.split('\n')[0])
  }
}

