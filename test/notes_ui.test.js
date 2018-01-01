var html = `
  <div class="note-container">
    <div class="note-selectors">
      <div class="note-selector active">
        <p class="note-selector-title">First note...</p>
        <p class="note-selector-timestamp">Timestamp here...</p>
      </div>
      <div class="note-selector">
        <p class="note-selector-title">Second note...</p>
        <p class="note-selector-timestamp">Timestamp here...</p>
      </div>
      <div class="note-selector">
        <p class="note-selector-title">Third note...</p>
        <p class="note-selector-timestamp">Timestamp here...</p>
      </div>
    </div>
    <div class="note-editor">
      <p class="note-editor-info">Timestamp here...</p>
      <textarea class="note-editor-input" id="note-editor-input">
        First note...
        
        Note text here...
      </textarea>
    </div>
  </div>
`;

describe('The Notes UI Adapter', () => {
  var fixture
  var ui

  function $$(className, element=fixture) {
    return element.getElementsByClassName(className)
  }

  function $(className) {
    return $$(className)[0]
  }

  beforeEach(() => {
    fixture = document.createElement('div')
    fixture.innerHTML = html;
    ui = new NotesUiAdapter(fixture)
  })

  it('updates the title', () => {
    ui.updateTitle(1, 'foobar')
    expect($$('note-selector-title')[1].innerText).toEqual('foobar')
  })

  it('clears all titles', () => {
    ui.clearTitles()
    expect($$('note-selector').length).toBe(0)
  })

  describe('When adding a new title', () => {
    it('adds the new title', () => {
      ui.addTitle('foobar')
      expect($$('note-selector').length).toBe(4)
      expect($('note-selector-title').innerText).toBe('foobar')
    })

    it('makes the new title the only active title', () => {
      ui.addTitle('something')
      expect($$('note-selector')[0].classList).toContain('active')
      expect($$('note-selector')[1].classList).not.toContain('active')
      expect($$('note-selector')[2].classList).not.toContain('active')
      expect($$('note-selector')[3].classList).not.toContain('active')
    })

    it('does not break when there is only one title', () => {
      ui.clearTitles()
      ui.addTitle('something')
      expect($('note-selector-title').innerText).toBe('something')
    })

    it('adds a listener for updating the app', () => {
      var listener = td.object(['onSelectNote'])
      ui.addTitle('new')
      ui.addListener(listener)

      $('note-selector').onclick()

      td.verify(listener.onSelectNote(0))
    })

    it('the title selectors can find their own index', () => {
      var listener = td.object(['onSelectNote'])
      ui.addTitle('one')
      ui.addTitle('two')
      ui.addTitle('three')
      ui.addListener(listener)

      $$('note-selector')[1].onclick()

      td.verify(listener.onSelectNote(1))
    })
  })

  it('clears the main text', () => {
    ui.clearMainText()
    expect($('note-editor-input').value).toBe('')
  })

  it('sets the main text', () => {
    ui.setMainText('pippo')
    expect($('note-editor-input').value).toBe('pippo')
  })
})
