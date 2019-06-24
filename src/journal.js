// export function Journal (entries) {
//   this.entries = [];
// }
//
// Journal.prototype.addEntry = function(entry) {
//   var notes = this.entries;
//
//   notes.push(entry);
//   console.log(notes);
//   this.entries.push(entry);
// }

//
// Journal.prototype.addEntry = function(log) {
//   log.id = this.assignId();
//   this.log.push(log);
// }

export function Entry (title, log) {
  this.title = title;
  this.log = log;
}


// Entry.prototype.assignId = function() {
//   this.entryID += 1;
//   return this.entryID;
// }
