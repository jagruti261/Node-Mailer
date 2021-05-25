var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'jagrutivekariya261@gmail.com',
        pass:'jagu$261'
    }
});
var mailOption = {
    from: 'jagrutivekariya261@gmail.com',
    to:'nasit4m@gmail.com',
    subject: 'test node mail',
    text:'hello this is just testing'
}
transport.sendMail(mailOption,function(error, info){
    if(error){
        console.warn(error);

    }
    else{
        console.warn("email has been sent", info.respone);
    }    
});
