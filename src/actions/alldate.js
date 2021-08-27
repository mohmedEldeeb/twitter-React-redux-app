const Add = "ADD"


export function add(date){
    return {
        type:Add,
        date,
    }
}


export function usaer(id){
    return {
        type:"USER",
        id
    }
}