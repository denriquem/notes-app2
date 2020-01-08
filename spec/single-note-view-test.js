(function() {
  function testSingleNoteView (){
    var note = new Note("I like animals like monkeys, especially thinly slivered and sprinkled over cornflakes");
    var singleNoteView = new SingleNoteView(note);
    assert.eq(singleNoteView.displayHTML(), "<div>I like animals like monkeys, especially thinly slivered and sprinkled over cornflakes</div>");
  }
  testSingleNoteView();
} )();
