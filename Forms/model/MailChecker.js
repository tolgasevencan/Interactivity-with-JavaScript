class MailChecker {
    /**
     * First mail ile second mailin birbrinin aynisi olup olmadigini kontrol et. 
     * @param {*} pFirstMail 
     * @param {*} pSecondMail 
     */
    check(pFirstMail, pSecondMail) {
        if (pFirstMail.email == pSecondMail.email) {
            return true;
        }
        return false;
    }
}