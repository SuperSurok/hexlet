//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    function Money(value, currency = 'usd') {
        this.value = value;
        this.currency = currency;
    }

    Money.prototype.getValue = function getValue() {
        return this.value;
    };

    Money.prototype.getCurrency = function getCurrency() {
        return this.currency;
    };

    Money.prototype.exchangeTo = function exchangeTo(currency) {
        // usd -> eur = 0.7
        // eur -> usd = 1.2
        if (this.getCurrency() === currency) {
            return new Money(this.getValue(), this.getCurrency());
        }
        const exchangedMoney = this.getCurrency() === 'usd' ? this.getValue() * 0.7 : this.getValue() * 1.2;
        return new Money(exchangedMoney, currency);
    };

    Money.prototype.add = function add(money) {
        const exchangedMoney = money.exchangeTo(this.getCurrency());
        return new Money(this.getValue() + exchangedMoney.getValue(), this.getCurrency());
    };

    Money.prototype.format = function format() {
        return this.getValue().toLocaleString(undefined, {style: 'currency', currency: this.currency});
    };

// export default Money;
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const rates = {
        usd: {
            eur: 0.7,
        },
        eur: {
            usd: 1.2,
        },
    };

    function Money(value, currency = 'usd') {
        this.value = value;
        this.currency = currency;
    }

    Money.prototype.format = function format() {
        // bad design (pass undefined the function), but it it JS
        return this.getValue().toLocaleString(undefined, {style: 'currency', currency: this.getCurrency()})
    };

    Money.prototype.getValue = function getValue() {
        return this.value;
    };

    Money.prototype.getCurrency = function getCurrency() {
        return this.currency;
    };

    Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
        const currency = this.getCurrency();
        if (currency === newCurrency) {
            return new Money(this.getValue(), currency);
        }
        const newValue = this.getValue() * rates[currency][newCurrency];
        return new Money (newValue, newCurrency);
    };

    Money.prototype.add = function add(money) {
        const convertMoney = money.exchangeTo(this.getCurrency());
        const additionalValue = convertMoney.getValue();
        return new Money(this.value + additionalValue, this.getCurrency());
    }
}
