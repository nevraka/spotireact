export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE after finished developing..
  token:
    'BQCu5DsjNVpZ90scnHfKvl_3kwLK-4DRlaYlAzQlP7sZf8mxoOtymfcucu8nKjfKH1BwR32CIUIAo-emi-VDSooHQ1890gNB3OV19uVmhtLA4SG57VIx6YAjDi8ivQj9MIWoiyRUWegogpGK',
};

const reducer = (state, action) => {
  console.log('action.type', action.type);

  // Action--> type,[payload]
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      console.log('action.token', action.token);
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
