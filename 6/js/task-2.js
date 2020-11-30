"use strict";
let text="Таких, как он, называют Морок, и их боятся абсолютно все.";
function checkSpam(str) {
    let strToLower = str.toLowerCase();
    if (strToLower.includes('caps') || 
        strToLower.includes('qwerty'))
        {
            return true;
        }
    return false;
}
