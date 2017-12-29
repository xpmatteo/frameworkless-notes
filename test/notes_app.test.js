describe('the Notes app', () => {
  it('by default has empty text', () => {
    let notesApp = new NotesApp()
    
    expect(notesApp.mainText()).toBe('')
    expect(notesApp.currentNoteTitle()).toBe('')
  })

  it('updates the note title', () => {
    let notesApp = new NotesApp()
    notesApp.onInput('new text')
    expect(notesApp.currentNoteTitle()).toBe('new text')
  })

  it('but only the first line of it', () => {
    let notesApp = new NotesApp()
    notesApp.onInput('first line\nblabla')
    expect(notesApp.currentNoteTitle()).toBe('first line')
  })

  describe('when clicking on a selector', () => {
    var notesApp;

    beforeEach(() => {
      notesApp = new NotesApp(['first note', 'second note', 'third note'])
    })

    it('changes the currently displayed note', () => {
      notesApp.select(1)
      expect(notesApp.mainText()).toBe('second note')
    })

    it('changing text, after a selection, really changes the selected text', () => {
      notesApp.select(1)
      notesApp.onInput('new text')
      expect(notesApp.mainText()).toBe('new text')

      notesApp.select(1)

      expect(notesApp.mainText()).toBe('new text')
    })
  })
})

