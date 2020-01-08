(function() {
  function testNoteController() {
    var noteController = new NoteController(new NoteList());

    var element = { innerHTML: "unchanged" };

    noteController.displayHtml(element);
    assert.eq(element.innerHTML, `<ul><li><div><a href="#notes/6">Favourite drink: sel</a></div></li></ul>`);
  }
  function testHashChangeListener() {
    var noteController = new NoteController(new NoteList());
    var element = { innerHTML: "unchanged" };
    var typeCheck;
    var callBack;
    var fakeWindow = {
      addEventListener: function(type, func) {
        typeCheck = type;
        callBack = func;
      }
    }
    noteController.setUpHashChangeListener(fakeWindow, element);
    assert.eq(typeCheck, "hashchange");
    assert.eq(element.innerHTML, "unchanged");
    callBack();
    assert.eq(element.innerHTML, `<div>Favourite drink: seltzer</div>`)
  };

  testNoteController();
  testHashChangeListener();
})()
