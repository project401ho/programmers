window.onkeydown = (e) =>{

    if(e.ctrlKey && e.key === " "){
        document.getElementById('run-code').click();
        console.log("STF");
    }
}