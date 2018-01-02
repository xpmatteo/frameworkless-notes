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

  function makeDiv(className, content) {
    var div = document.createElement('div')
    div.classList.add(className)
    div.appendChild(content)
    return div
  }

  function makeParagraph(className, text) {
    var p = document.createElement('p')
    p.classList.add(className)
    p.innerText = text
    return p
  }

  function setSelectorListeners() {
    $$('note-selector').forEach((selector, index) => {
      selector.onclick = () => { 
        listeners.forEach((listener) => {
          listener.onSelectNote(index)
        })
      }
    })
  }

  this.addTitle = (text) => {
    var newTitle = makeParagraph('note-selector-title', text)
    var newSelector = makeDiv('note-selector', newTitle)

    var container = $('note-selectors')
    container.insertBefore(newSelector, container.firstChild)

    this.activateTitle(0)
    setSelectorListeners()
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
