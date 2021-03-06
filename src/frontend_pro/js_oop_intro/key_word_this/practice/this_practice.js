//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const make = (numer, denom) => ({
        numer,
        denom,
        getNumer() {
            return this.numer;
        },
        getDenom() {
            return this.denom;
        },
        toString() {
            return `${this.numer}/${this.denom}`;
        },
        add(addingNumber) {
            this.numer = this.numer * addingNumber.getDenom() + this.denom * addingNumber.getNumer();
            this.denom = this.denom * addingNumber.getDenom();
            return make(this.numer, this.denom);
        }
    });
    const rat1 = make(3, 9);
    const rat2 = make(10, 3);
    const rat3 = rat1.add(rat2);
    console.log(rat3.toString())
}

//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
{
    function make(numer, denom) {
        return {
            numer,
            denom,
            getNumer() {
                return this.numer;
            },
            getDenom() {
                return this.denom;
            },
            toString() {
                return (`${this.numer}/${this.denom}`);
            },
            add(sum) {
                const obj = {
                    num: this.numer * this.getDenom.call(sum) + this.denom * this.getNumer.call(sum),
                    denom: this.denom * this.getDenom.call(sum),
                };
                return make(obj.num, obj.denom);
            },
        };
    }
}
//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const make = (numer, denom) => ({
        numer,
        denom,
        getNumer() {
            return this.numer;
        },
        getDenom() {
            return this.denom;
        },
        toString() {
            return `${this.getNumer()}/${this.getDenom()}`;
        },
        add(rational) {
            const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
            const newDenom = this.getDenom() * rational.getDenom();
            return make(newNumer, newDenom);
        },
    });
}
