function add(a:number , b : number) : number{
    if(a<0 || b<0){
        return 0;
    }

    return a+b;
}

console.log(add(10,20));