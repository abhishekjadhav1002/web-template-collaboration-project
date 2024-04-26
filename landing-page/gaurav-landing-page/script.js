function sendEmail(){
  Email.send({
    SecureToken : "4eb3c89f-a724-4f0e-ad1f-0dbb436be51c",
    To : 'gauravsinghtangariya1@gmail.com',
    From : "gauravsinghtangariya1@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}




