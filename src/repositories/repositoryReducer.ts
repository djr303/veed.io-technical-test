const initialState: any = {
  repositories: null,
  artists: null,
  images: null,
};

export const requestRepositories = "requestFolders";
export const requestRepositoriesSuccess = "requestFoldersSuccess";

const repositoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case requestRepositoriesSuccess:
      const repositories = action.payload;
      return { ...state, ...repositories }
    default:
      return state;
  }
};

export default repositoryReducer;
