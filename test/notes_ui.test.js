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

  beforeEach(() => {
    fixture = document.createElement('div')
    fixture.innerHTML = html;
    ui = new NotesUiAdapter(fixture)
  })

  it('updates the title', () => {
    ui.updateTitle(1, 'foobar')
    expect(fixture.getElementsByClassName('note-selector-title')[1].innerText).toEqual('foobar')
  })
})