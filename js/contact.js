class FactoryPattern {
     constructor(from_name, email_id, phone, subject, message){
         this.from_name = from_name;
         this.email_id = email_id;
         this.phone = phone;
         this.subject = subject;
         this.message = message;
    }
}

function SendEmail() {
        from_name = document.getElementById('fullName').value,
        email_id = document.getElementById('email_id').value,
        phone = document.getElementById('phone').value,
        subject = document.getElementById('subject').value,
        message = document.getElementById('message').value
   
   const factory = new FactoryPattern(from_name, email_id, phone, subject, message);
   const data = {
    from_name : factory.from_name,
    email_id : factory.email_id,
    phone : factory.phone,
    subject : factory.subject,
    message : factory.message
   }
    emailjs.send("service_x5b1pfw", "template_tz1eg6y", data).then(function (res) {
        alert("Your email sent successfully! " + res.status);
    })
}