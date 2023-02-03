const add=(a,b)=>{
    return a+b;
};
const higherOrder=(a,refernceFunction)=>{
    return referenceFunction(a,20);
};
higherOrder(10,add);

//when a function is passed as a functional argument to a function, then the function which is passed is a callback
//and the function to which is passed is a higher order function.

// const NewComponent = higherOrderComponent(warppedComponent)->Syntax