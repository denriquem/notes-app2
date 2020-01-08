(function() {
  function testNoteController() {
    var noteController = new NoteController(new NoteList());

    var element = { innerHTML: "unchanged" };

    noteController.displayHtml(element);
    assert.eq(element.innerHTML, "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  }

  testNoteController();
})()
