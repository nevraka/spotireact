export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE after finished developing..
  //token:
  // 'BQCu5DsjNVpZ90scnHfKvl_3kwLK-4DRlaYlAzQlP7sZf8mxoOtymfcucu8nKjfKH1BwR32CIUIAo-emi-VDSooHQ1890gNB3OV19uVmhtLA4SG57VIx6YAjDi8ivQj9MIWoiyRUWegogpGK',
};

const reducer = (state, action, playlists) => {
  // Action--> type,[payload]
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
