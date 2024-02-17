function load_data(){
    fetch('/cases/allCases').then(async res=>{
        var data = await res.json();
        data = data.data;
        var input_string = '';
        for(var i of data){
            input_string += `
            <div class="row mt-1">
                <div class='col'>${i.token}</div>
                <div class='col'>${i.suspect_name}</div>
                <div class='col'><button class="btn bg-primary text-white" onclick="updateCase('${i.suspect_name}')">Update Status</button></div>
            </div>`
        }
        document.getElementById('container').innerHTML = input_string;
    })
}

function updateCase(susname){
    axios.put('/cases/case', {
        suspect_name:susname
    })
    .then(response => {
      // Handle success
      console.log('Response:', response.data);
      alert('Case status updated')
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });       
}