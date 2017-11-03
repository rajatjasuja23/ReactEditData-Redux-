export const editdata = (data) => {

    return {
        type: 'EDIT_DATA',
        payload: data
    }
};


export const changeData = (data) => {
    return {
        type: 'CHANGE_DATA',
        payload: data
    }
};

export const saveData = (data,visible) => {
    return {
        type: 'SAVE_DATA',
        payload: data,
        visible:visible,

    }
};

