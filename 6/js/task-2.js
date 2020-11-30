function checkSpam(str,text) {
    let strToLower = str.toLowerCase();
    if (strToLower.includes('caps') || 
        strToLower.includes('qwerty'))
        {
            return true;
        }
    return false;
}