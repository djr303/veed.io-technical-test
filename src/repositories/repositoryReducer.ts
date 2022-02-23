const initialState: any = {
  repositories: null,
  favorites: {}
};

export const requestRepositories = "requestRepositories";
export const requestRepositoriesSuccess = "requestRepositorySuccess";
export const updateFavorite = "updateFavorite"

const repositoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case requestRepositoriesSuccess:
      const repositories = action.payload;
      return { ...state, repositories }
    case updateFavorite:
      const { id } = action.payload;
      const favorites = { ...state.favorites}
      favorites[id] = !favorites[id]
      return { ...state, favorites}
    default:
      return state;
  }
};

export default repositoryReducer;
