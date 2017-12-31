
describe('the notes app', () => {

  describe('at app start', () => {
    it('when there are no notes', () => {
      var ui = td.object(['clearTitles', 'addTitle', 'clearMainText'])
      var notesApp = new NotesApp(ui) 

      notesApp.onAppStart()
      ui.addTitle()
      
      td.verify(ui.clearTitles())
      td.verify(ui.addTitle('New Note'))
      td.verify(ui.clearMainText())
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
