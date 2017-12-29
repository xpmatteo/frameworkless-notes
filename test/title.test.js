describe('when typing text in the main text area', () => {

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

})
