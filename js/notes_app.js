
class NotesApp {

  constructor(ui) {
    this._ui = ui
  }

  onInput(text) {
    this._ui.updateTitle(0, text.split('\n')[0])
  }
}

