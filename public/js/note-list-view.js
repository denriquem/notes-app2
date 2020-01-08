(function(exports){
  function NoteListView(noteListModel){
    this.noteListModel = noteListModel;
  };

  NoteListView.prototype = {
    htmlString: function(){
      return "<ul>" + this.noteListModel.showNotes().map(note => {
        return `<li><div><a href="#notes/${note.id}">${note.read().substr(0, 20)}</a></div></li>`;
      }).join("") + "</ul>"
    }
  }

  exports.NoteListView = NoteListView;
})(this);
