
window.onload = function() {

    document.getElementById("contact_form").addEventListener('submit',function(event){
        event.preventDefault();

        var params = {
            from_name: document.getElementById("Name").value,
            email: document.getElementById("Email").value,
            message: document.getElementById("Message").value

        }



        emailjs.send("service_alfa2001", "template_etyww2w", params).then(
            (res) => { 
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Your Message has been sended successfully');}
        );
    });
}
