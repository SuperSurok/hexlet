///////////////////////////////////////
///// The Very First Solution /////////
///////////////////////////////////////
{
    const reverse = (str) => {
        let i = str.length;
        let result = '';
        while (i--) {
            result += str[i];
        }
        return result;
    }
}
///////////////////////////////////////
///// More Adult Solution /////////////
///////////////////////////////////////
{
    const reverse = (str) => {
        let result = '';
        for (let i = str.length - 1; i >= 0; i -= 1) {
            result += str[i];
        }
        return result;
    };
}
///////////////////////////////////////
///// Master Solution /////////////////
///////////////////////////////////////
{
    const reverse = (str) => {
        let i = str.length - 1;
        let result = '';
        while (i >= 0) {
            result = result + str[i];
            i = i - 1;
        }
        return result;
    };
}
