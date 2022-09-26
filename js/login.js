document.getElementById('login_btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user_email');
    const email = userEmail.value


    const userPassword = document.getElementById('user_password')
    const password = userPassword.value
    // DANGER : do not verify valid user + varify user
    if (email === 'sayedshishir.abu@gmail.com' && password === '00000000') {
        location. href = "bank.html"
    } else {
        alert("Hello Dear, Please Submit  Correct Email and Password !");
    }
})