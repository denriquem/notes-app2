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
  NoteController.prototype.setUpHashChangeListener = function (notWindow, element) {
    var controller = this;
    notWindow.addEventListener("hashchange", function(){
      var singleNoteView = new SingleNoteView(controller.noteListModel.showNotes()[0]);
      element.innerHTML = singleNoteView.displayHTML();
    })
  }

  exports.NoteController = NoteController
})(this)
