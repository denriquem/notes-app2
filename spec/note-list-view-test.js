function returnsHTMLString(){
  var noteList = {
    showNotes: function() {
      return [
        {
          read: function(){
            return "note1"
          },
          id: 1
        },
        {
          read: function(){
            return "note2"
          },
          id: 2
        },
        {
          read: function(){
            return "note3"
          },
          id: 3
        }
      ];
    }
  };
  var noteListView = new NoteListView(noteList);
  assert.eq('<ul><li><div><a href="#notes/1">note1</a></div></li><li><div><a href="#notes/2">note2</a></div></li><li><div><a href="#notes/3">note3</a></div></li></ul>', noteListView.htmlString());
};

function returnsShortenedHTMLString(){
  var noteList = {
    showNotes: function() {
      return [
        {
          read: function(){
            return "I like eating monkeys a lot on wednesdays"
          },
          id: 7
        }
      ];
    }
  };
  var noteListView = new NoteListView(noteList);
  assert.eq('<ul><li><div><a href="#notes/7">I like eating monkey</a></div></li></ul>', noteListView.htmlString());
};

returnsHTMLString();
returnsShortenedHTMLString();
