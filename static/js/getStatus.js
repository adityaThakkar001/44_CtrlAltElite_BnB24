const ids = ['status_one','status_two','status_three']
function getStat(){
    fetch('/cases/status?token='+document.getElementById('casetoken').value).then(async res=>{
        // console.log(res);
        var data = await res.json();
            data = data.status_of_case;
        console.log(data);
        for(var i = 0;i < data;i++){
            // console.log(ids[i]);
            document.getElementById(ids[i]).style.backgroundColor = '#28a745';
        }
    })
}