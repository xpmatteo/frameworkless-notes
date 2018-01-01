function NotesUiAdapter(document=document) {

  this.updateTitle = (index, text) => {
    $('note-selector-title', index).innerText = text
  }

  this.clearTitles = () => {
    $('note-selectors').innerHTML = ''
  }

  this.addTitle = (text) => {
    var newTitle = `
      <div class="note-selector active">
        <p class="note-selector-title">${text}</p>
      </div>
      `
    var container = $('note-selectors')
    container.innerHTML = newTitle + container.innerHTML
  }

  this.clearMainText = () => {
    $('note-editor-input').value = ''
  }

  function $(className, index=0) {
    return document.getElementsByClassName(className)[index]
  }
}
