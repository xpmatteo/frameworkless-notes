
const notesApp = new NotesApp()

document.getElementById('note-editor-input').addEventListener('input', (event) => {

  notesApp.onInput(event.target.value)
  document.getElementsByClassName('note-selector-title')[0].innerText = notesApp.currentNoteTitle()

  console.log('text', event.target.value.split('\n')[0])


})
