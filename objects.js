var playlist = { "Future": "Mask off" }

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, {artist: song})
}
