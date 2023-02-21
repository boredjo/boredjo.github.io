function sendMessage() {
    textarea = document.getElementById('textarea') ;
    message = textarea.value
    if (message != ""){
        fetch("https://mailbox.jokaendler.eu/", {
            method: "post",
            body: JSON.stringify({
                "message": textarea.value,
                "source": "boredJo.eu"
            })
        }).then(response => {
            console.log(response)
            textarea.value = ""
        })

    }
}

function toggleMessageBox() {   
    messageBox = document.querySelector('.message-box');
    messageBox.style.display = (messageBox.style.display === 'none') ? 'block' :'none';
}