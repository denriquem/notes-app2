function returnsHTMLString(){
  var noteList = new NoteList();
  noteList.add('note1', 'note2', 'note3');
  var noteListView = new NoteListView(noteList);
  assert.eq('<ul><li><div>note1</div></li><li><div>note2</div></li><li><div>note3</div></li></ul>', noteListView.htmlString());
};

function returnsShortenedHTMLString(){
  var noteList = new NoteList();
  noteList.add('I like eating monkeys a lot on wednesdays');
  var noteListView = new NoteListView(noteList);
  assert.eq('<ul><li><div>I like eating monkey</div></li></ul>', noteListView.htmlString());
};

returnsHTMLString();
returnsShortenedHTMLString();
