function tinhtong(...arrays) {
    const result=arrays.map(arr=>{
        if(!Array.isArray(arr)) return 0;
        return arr.reduce((sum,val)=>sum+val,0);
    });
    return result;
}
console.log(tinhtong([1,2],[6,7,8],[12,8]));
