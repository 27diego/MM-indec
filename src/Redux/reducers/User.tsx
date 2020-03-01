export default (state: any = null, action: any) => {
  switch (action.type) {
    case "SELECT_DEPARTMENT":
      return { ...state, department: action.payload };
    default:
      return state;
  }
};
