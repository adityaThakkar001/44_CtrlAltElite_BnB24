function login(){
    const username = 'kaivalya';
    const password = 'kaivalya@123';
    const choosen_name = document.getElementById('username').value;
    const choosen_pass = document.getElementById('Password').value;
    if(username !== choosen_name || password !== choosen_pass){
        alert('Invalid Credentials')
        return;
    }
    window.location.href = '/allCases';
}