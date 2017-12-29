
describe('the notes app', () => {
  describe('when entering text', () => {
    it('the title changes', () => {
      var ui = td.object(['updateTitle'])
      var notesApp = new NotesApp(ui) 

      notesApp.onInput('new text\nand other text')

      td.verify(ui.updateTitle(0, 'new text'))
    })
  })
})
