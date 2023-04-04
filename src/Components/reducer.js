export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    playing: false,
    // token: 'BQCIIaPObfC35PLvLibQV499YvU6vA_Bji2rZ4-xwJmWXVajK-fW2xAXJrftuhp8rqj3L4fQjHssxytZIymIwdbMnWqlQVc4dIH5JYSP5qcVzeWGa89uTOdFPtkChVIIR__dkmsaedvKHwA8bcCaG702ojwBfJskMI3AaqgnV_8v5vG8wB_fdmnw4zh2saUqXGGOSPym8bNbYnQZj-xV3w',
    taken: null,
  };

  const reducer = (state, action) =>{
     console.log(action);

     switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          }
          case "SET_TOKEN":
            return {
              ...state,
              token: action.token
            }
          case "SET_PLAYLISTS":
            return{
              ...state,
              playlists: action.playlists,
            };
          case "SET_DISCOVER_WEEKLY":
            return{
              ...state,
              discover_weekly: action.discover_weekly,
            }  
            case "SET_PLAYING":
              return {
                ...state,
                playing: action.playing,
              };
        
            case "SET_ITEM":
              return {
                ...state,
                item: action.item,
              };
            
              case "SET_SPOTIFY":
                return {
                  ...state,
                  spotify: action.spotify,
                };
                
          default:
            return state;
        }   
  }

export default reducer ;