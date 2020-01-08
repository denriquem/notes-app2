(function(exports){
  function NoteController(noteListModel) {
    this.noteListModel = noteListModel
    this.noteListModel.add("Favourite drink: seltzer")
  }
  NoteController.prototype.displayHtml = function(element = document.getElementById('app')) {
    var noteListView = new NoteListView(this.noteListModel);
    var html = noteListView.htmlString();
    element.innerHTML = html;
  }

  exports.NoteController = NoteController
})(this)
