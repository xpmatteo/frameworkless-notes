
var ui = new NotesUiAdapter(document)
var notesApp = new NotesApp(ui)
ui.addListener(notesApp)

notesApp.onAppStart()

document.getElementById('note-editor-input').addEventListener('input', (event) => {
  notesApp.onInput(event.target.value)
})

document.getElementById('new-note-button').addEventListener('click', () => {
  notesApp.onNewNote()
})
