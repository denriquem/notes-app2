(function () {
  function testReadReturnsText(){
    var note = new Note("Test note");
    assert.eq("Test note", note.read());
  };
  function testIds(){
    var note1 = new Note("First test note");
    var note2 = new Note("Second test note");
    assert.eq(note1.id >= 0, true);
    assert.eq(note1.id, note2.id - 1);
  }
  testReadReturnsText();
  testIds();
}) ();
