function NotesUiAdapter(parentElement=document) {

  var listeners = []

  this.addListener = (listener) => {
    listeners.push(listener)
  }

  this.updateTitle = (index, text) => {
    $('note-selector-title', index).innerText = text
  }

  this.clearTitles = () => {
    $('note-selectors').innerHTML = ''
  }

  this.addTitle = (text) => {
    var newSelector = document.createElement('div')
    newSelector.classList.add('note-selector')
    var newTitle = document.createElement('p')
    newTitle.classList.add('note-selector-title')
    newTitle.innerText = text
    newSelector.appendChild(newTitle)

    var container = $('note-selectors')
    container.insertBefore(newSelector, container.firstChild)

    $$('note-selector').forEach((selector, index) => {
      selector.onclick = () => { 
        listeners.forEach((listener) => {
          listener.onSelectNote(index)
        })
      }
    })

    this.activateTitle(0)
  }

  this.activateTitle = (activeIndex) => {
    $$('note-selector').forEach((selector, index) => {
      (index == activeIndex) ? selector.classList.add('active') : selector.classList.remove('active')
    })
  }

  this.setMainText = (text) => {
    $('note-editor-input').value = text
  }

  this.clearMainText = () => {
    this.setMainText('')
  }

  function $$(className) {
    return Array.from(parentElement.getElementsByClassName(className))
  }

  function $(className, index=0) {
    return $$(className)[index]
  }
}
