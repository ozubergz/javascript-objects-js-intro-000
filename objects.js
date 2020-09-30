var playlist = { "Future": "Mask off" }
// var playlist = {}

function updatePlaylist(obj, artist, song) {
  // return Object.assign({}, obj, {[artist]: song})
  obj[artist] = song;
  return obj
}
