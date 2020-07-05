var lemonadeChange = function(bills) {
    var five = 0, ten = 0;

    for(let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) { 
            five++;
        } else if (bills[i] === 10) {
            if ( five === 0) {
                five--;
            }
            ten++;
            five--;
        } else if (bills[i] === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five > 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};
