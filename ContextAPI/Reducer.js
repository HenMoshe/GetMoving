function Reducer(state, action){
    switch (action.type){
        case 'load':
            return {...state, loading: false, gymlist : action.res[0], data: action.res[1] };
        case 'filter':
            return {...state, gymlist: action.res}    
        case 'fetchfave':
            return {...state, favs: action.res };
        case 'addfave':
            return {...state, favs: [...state.favs, action.res]}
        case 'unfave':
            return {...state, favs:action.res }    
}
}
export default Reducer