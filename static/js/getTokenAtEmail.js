function sendTokenMail(){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(document.getElementById('Email').value)){
        alert('please enter valid mail address');
        return;
    }
    axios.post('/sendEmail', {
        tokenMail:document.getElementById('Email').value
    })
    .then(response => {
      // Handle success
      console.log('Response:', response.data);
      alert('Token Send Successfully')
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
}

