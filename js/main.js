

var notesApp = new NotesApp(new NotesUiAdapter(document))
notesApp.onAppStart()

document.getElementById('note-editor-input').addEventListener('input', (event) => {
  notesApp.onInput(event.target.value)
})

document.getElementById('new-note-button').addEventListener('click', () => {
  notesApp.onNewNote()
})
