
describe('the notes app', () => {
  var ui, notesApp
  
  beforeEach(() => {
    ui = td.object(['clearTitles', 
      'addTitle', 'clearMainText', 'updateTitle', 'setMainText', 'activateTitle', 'moveTitleToTop'])
    notesApp = new NotesApp(ui)
  })

  describe('at app start', () => {
    it('when there are no notes', () => {
      notesApp.onAppStart()
      
      td.verify(ui.clearTitles())
      td.verify(ui.addTitle('New Note'))
      td.verify(ui.clearMainText())
    })
  })

  describe('when creating a new note', () => {
    it('adds a new blank title', () => {
      notesApp.onNewNote()
      td.verify(ui.addTitle('New Note'))
    })

    it('blanks the main text', () => {
      notesApp.onNewNote()
      td.verify(ui.clearMainText())
    })
  })

  describe('when entering text', () => {
    it('the title changes', () => {
      notesApp.onInput('new text\nand other text')

      td.verify(ui.updateTitle(0, 'new text'))
    })
  })

  describe('when selecting another note', () => {
    it('the main text changes', () => {
      notesApp.onInput('first note text')
      notesApp.onNewNote()
      notesApp.onInput('second note text')

      notesApp.onSelectNote(1)

      td.verify(ui.setMainText('first note text'))
    })

    it('the title becomes active', () => {
      notesApp.onNewNote()
      
      notesApp.onSelectNote(1)

      td.verify(ui.activateTitle(1))
    })

    describe('when new input comes', () => {
      beforeEach(() => {
        notesApp.onInput('first note')
        notesApp.onNewNote()
        notesApp.onInput('second note')
        notesApp.onNewNote()
        notesApp.onInput('third note')

        expect(notesApp.note(0)).toBe('third note')
        expect(notesApp.note(1)).toBe('second note')
        expect(notesApp.note(2)).toBe('first note')

        notesApp.onSelectNote(2)
        notesApp.onInput('changing the first note')
      })

      it('moves the selected note to the first position', () => {
        td.verify(ui.moveTitleToTop(2))
      })

      it('adds the text to the proper note', () => {
        expect(notesApp.note(0)).toBe('changing the first note')
        expect(notesApp.note(1)).toBe('third note')
        expect(notesApp.note(2)).toBe('second note')
      })
    })
  })
})
