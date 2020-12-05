"use strict";
let text="Таких, как он, называют Морок, и их боятся абсолютно все.";
function checkSpam(str,...spam) {
    let strToLower = str.toLowerCase();
    if (strToLower.includes('caps') || 
        strToLower.includes('qwerty'))
        {
            return true;
        }
    return false;
}
console.log(checkSpam("Таких, как он, называют Морок, и их боятся абсолютно все."))
