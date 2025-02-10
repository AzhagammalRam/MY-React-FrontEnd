function operation(a,b,name){
    switch(name){
        case 'add':
            return a+b;
            break;
        case 'sub':
            return a-b;
            break;
        case 'mul':
            return a*b;
            break;
        case 'div':
            return a/b;
            break;
        default:
            return null;

    }
}

console.log("The Output value for add is :", operation(10,20,"add"));
console.log("The Output value for sub is :", operation(10,20,"sub"));
console.log("The Output value for mul is :", operation(10,20,"mul"));
console.log("The Output value for div is :", operation(40,20,"div"));