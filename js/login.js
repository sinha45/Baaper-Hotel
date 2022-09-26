//**step1: add click event handler with submit button */

document.getElementById('btn-submit').addEventListener('click', function () {
    // ***step2: get the email address inside the email input field***/
    //*** always remember to use .value to get text from an input field */
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    //**step3: get password */
    //**3.a: set id on the html element */
    //**3.b: get the element */
    //**3.c: get the value form the element */

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //**Do not verify email password on the client side */
    //**step-4: verify email and password & check whether valid user or not */

    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('password or email incorrect')
    }
});
