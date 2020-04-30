function check() {
    if (document.querySelector('#email_addr').value != document.querySelector('#email_repeat').value) {
        alert("Two mails must match!");
    }
}