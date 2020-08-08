export const increment = (num) =>{
    return {
        type: "INCREMENT",
        payload1: num
    };
};

export const decrement = (num) =>{
    return {
        type: "DECREMENT",
        payload2: num
    };
};

export const signin = () =>{
    return {
        type: "SIGNIN",
    };
};