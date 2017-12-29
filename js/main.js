

var notesApp = new NotesApp(new NotesUiAdapter(document))

document.getElementById('note-editor-input').addEventListener('input', (event) => {
  notesApp.onInput(event.target.value)
})
