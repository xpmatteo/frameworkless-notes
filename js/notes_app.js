

class NotesApp {

  onInput(text) {
    this.currentNoteText = text
  }

  currentNoteTitle() {
    return this.currentNoteText.split('\n')[0]
  }

}

