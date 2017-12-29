
const notesApp = new NotesApp(['one', 'two', 'three'])
setMainText(notesApp.mainText())

function setMainText(text) {
  document.getElementById('note-editor-input').value = text
}

document.getElementById('note-editor-input').addEventListener('input', (event) => {
  notesApp.onInput(event.target.value)
  document.getElementsByClassName('note-selector-title')[0].innerText = notesApp.currentNoteTitle()
})

Array.from(document.getElementsByClassName('note-selector')).forEach((selector, index) => {
  selector.addEventListener('click', () => {
    notesApp.select(index)
    setMainText(notesApp.mainText())
  })
})
