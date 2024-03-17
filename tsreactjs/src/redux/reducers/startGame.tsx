const startGameReducer = (state = false, action: any) => {
    //  action là kiểu dữ liệu bên actions
    // state là value
    switch (action.type) {
        case "startPlay":
            return true;
        case "cancelPlay":
            return false;
        default:
            return state;
    }
};

export default startGameReducer;
