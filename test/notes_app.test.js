
describe('the notes app', () => {

  describe('at app start', () => {
    it('when there are no notes', () => {
      var ui = td.object(['clearTitles', 'addTitle'])
      var notesApp = new NotesApp(ui) 

      notesApp.onAppStart()
      ui.addTitle()
      
      td.verify(ui.clearTitles())
      td.verify(ui.addTitle('New Note'))
    })
  })

  describe('when entering text', () => {
    it('the title changes', () => {
      var ui = td.object(['updateTitle'])
      var notesApp = new NotesApp(ui) 

      notesApp.onInput('new text\nand other text')

      td.verify(ui.updateTitle(0, 'new text'))
    })
  })
})
