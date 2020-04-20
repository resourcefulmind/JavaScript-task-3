function numbDiv(num) {
    let arr = [];
    for (let i = 1; i <= num; i++){
        arr.push(i);
    }

    for(i=0; i<arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
            arr[i] = "yu-gi-oh";
        } else
        if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 != 0) {
            arr[i] = "yu-gi";
        } else
        if (arr[i] % 2 != 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
            arr[i] = "gi-oh";
        } else
        if (arr[i] % 2 == 0 && arr[i] % 3 != 0 && arr[i] % 5 == 0) {
            arr[i] = "yu-oh";
        } else
        if (arr[i] % 2 == 0 && arr[i] % 3 != 0 && arr[i] % 5 != 0) {
            arr[i] = "yu";
        } else
        if (arr[i] % 3 == 0) {
            arr[i] = "gi";
        } else
        if (arr[i] % 5 == 0) {
            arr[i] = "oh";
        }
    }  return arr;
};

numbDiv(100);
numbDiv(1000);