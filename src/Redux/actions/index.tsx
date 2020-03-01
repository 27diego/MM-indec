import history from "../../history";

export const selectDep = (dep: any) => {
  return {
    type: "SELECT_DEPARTMENT",
    payload: dep
  };
};
