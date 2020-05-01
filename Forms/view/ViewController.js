/**
 * 
 */
class ViewController {
    constructor() {
        this.submit = document.querySelector('#submitButton');
        this.firstmail = document.querySelector('#email_addr');
        this.secondmail = document.querySelector('#email_repeat');
        this.mailChecker = new MailChecker();
        this.submit.addEventListener('click', () => this.check());
    }


    check() {
        const firstMailValue = this.firstmail.value;
        const secondMailValue = this.secondmail.value;
        const firstMail = new Mail(firstMailValue);
        const secondMail = new Mail(secondMailValue);
        const result = this.mailChecker.check(firstMail, secondMail);
        if (result == false) {
            alert("Correct please!");
        }
    }

}