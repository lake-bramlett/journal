export function Journal (entry) {
  this.entry = entry;
}

export function Entry (entryID, date, log) {
  this.entryID = entryID;
  this.date = date;
  this.log = log;
}
