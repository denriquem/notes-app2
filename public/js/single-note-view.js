(function(exports) {
  function SingleNoteView (note) {
    this.note = note;
  };
  SingleNoteView.prototype.displayHTML = function() {
    return `<div>${this.note.read()}</div>`
  }
  exports.SingleNoteView = SingleNoteView;
} )(this);
