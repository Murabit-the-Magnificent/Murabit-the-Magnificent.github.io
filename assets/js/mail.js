

function SendMail()
{
    var params ={
        from_name : document.getElementById("Name").value,
        email : document.getElementById("Email").value,
        message : document.getElementById("Message").value

    }
    emailjs.send("service_5iguxir","template_dxbqruc",params).then(
        (res) => {alert("Your Message has been sended");}
    );
}