const createAction = <P>(type: string, payload?: P) => ({ type, payload });

export default createAction;
