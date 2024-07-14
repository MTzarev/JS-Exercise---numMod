function numberMod(num) {
    let num = num.toString();
    let sum = 0;
    function append(x) {
        return num += x;

    }
    while (sum / num.length <= 5) {
        for (let i = 0; i < num.length; i++) {
            let x = Number(num[i]);
            sum += x
        }
        if (sum / num.length <= 5) {
            append(9);
            sum = 0;
        }
    }

    console.log(num);

}
numberMod(101);
//numberMod(5835);