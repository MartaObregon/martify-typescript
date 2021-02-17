interface Playlist {
    title: string;
    list: string,
  }
  export default interface UserData {
    name: string
    email: string,
    playlists: Array<Playlist>
    myFavourites: Playlist
  
  }
  
