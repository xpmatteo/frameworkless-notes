
describe('the notes app', () => {
  var ui, notesApp
  
  beforeEach(() => {
    ui = td.object(['clearTitles', 'addTitle', 'clearMainText', 'updateTitle'])
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
})
