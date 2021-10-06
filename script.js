function tree(floors, symbol) {
    var arr = Array(floors).fill(" ");
    arr[floors - 1] = symbol;
    console.log(arr.join(""));
     for(var i = 2; i <= floors; i++){
            arr[arr.length] = symbol;
             arr[floors - i] = symbol;
            console.log(arr.join(""));
     }
}
tree(10, '*'); 