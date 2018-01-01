function NotesUiAdapter(document=document) {

  this.updateTitle = (index, text) => {
    $('note-selector-title', index).innerText = text
  }

  this.clearTitles = () => {
    $('note-selectors').innerHTML = ''
  }

  this.addTitle = (text) => {
    var newTitle = `
      <div class="note-selector">
        <p class="note-selector-title">${text}</p>
      </div>
      `
    var container = $('note-selectors')
    container.innerHTML = newTitle + container.innerHTML
    this.activateTitle(0)
  }

  this.activateTitle = (activeIndex) => {
    $$('note-selector').forEach((selector, index) => {
      (index == activeIndex) ? selector.classList.add('active') : selector.classList.remove('active')
    })
  }

  this.clearMainText = () => {
    $('note-editor-input').value = ''
  }

  function $$(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  function $(className, index=0) {
    return $$(className)[index]
  }
}
