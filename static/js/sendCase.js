function sendData(){
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const suspectInp = document.getElementById('suspectInp').value;
    const summary = document.getElementById('summary').value;
    if(suspectInp.trim() === '' || summary.trim() === ''){
        alert('please fill out all the details');
        return;
    }
    axios.post('/cases/registerCase', {
        token:token,
        suspect_name:suspectInp,
        summary:summary
    })
    .then(response => {
      // Handle success
      console.log('Response:', response.data);
      alert('Case submitted successfully')
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
}

