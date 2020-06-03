////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const controlStatement = (data, moneySign) => {
        let sum = 0;
        for (let i = 0; i < data.length; i += 1) {
            const sign = data[i].slice(0, 3);
            const number = parseInt(data[i].slice(4), 10);
            if (sign !== moneySign) {
                continue;
            }
            sum += number;
        }
        return sum;
    };
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const getTotalAmount = (money, currency) => {
        let sum = 0;

        for (const bill of money) {
            const currentCurrency = bill.slice(0, 3);
            if (currentCurrency !== currency) {
                continue;
            }
            const denomination = Number(bill.slice(4));
            sum += denomination;
        }

        return sum;
    };
}