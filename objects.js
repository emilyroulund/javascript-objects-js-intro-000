var playlist1 = {artistName: 'songTitle'}; 

function updatePlaylist (playlist, artistName, songTitle){
  return Object.assign ({}, playlist, { [artistName]: songTitle}) 
}