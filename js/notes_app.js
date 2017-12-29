

class NotesApp {

  constructor(notes=['']) {
    this._notes = notes
    this._currentSelection = 0
  }

  onInput(text) {
    this._notes[this._currentSelection] = text
  }

  mainText() {
    return this._notes[this._currentSelection]
  }

  currentNoteTitle() {
    return this.mainText().split('\n')[0]
  }

  select(noteIndex) {
    this._currentSelection = noteIndex
  }


}

