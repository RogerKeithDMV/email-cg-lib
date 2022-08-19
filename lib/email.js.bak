let nodemailer = require('nodemailer');
const {constants, helpers, log} = require('utils-nxg-cg');
const {objecteMailReq,objecteMailOpt} = require('./objects');

module.exports.email = async (msg, cfg, test = false) => {
  return new Promise(async (resolve, reject) => {
    try {
      log.info('Inside email lib');
      log.debug('Msg=', JSON.stringify(msg));
      log.debug('Config=', JSON.stringify(cfg));

      const {data} = msg;

      let properties = {...objecteMailReq};
      let extraProp = {...objecteMailOpt};

      if (!test && !data) {throw new Error(`${constants.ERROR_PROPERTY} data`);}

      const valid = await helpers.validProperties(properties, data, cfg);

      if (valid) {
        await helpers.validProperties(extraProp, data, cfg, true);
        properties = {...properties, ...extraProp};

        const transporter = nodemailer.createTransport({
          //Para GMail ---> host: 'smtp.gmail.com', port: 465,
          //Para Outlook ---> "host":"smtp.gmail.com", "port":465
          host: properties.host,
          port: properties.port,
          secure: properties.secure,
          auth: {
            user: properties.user,
            pass: properties.pass
          },
          tls: {
            ciphers:'SSLv3'
          }
        });

        const mailOptions = {
          from: properties.from,
          to: properties.to,
          subject: properties.subject,
          text: properties.text
        };
                  
        const result  = transporter.sendMail(mailOptions, function(error, info){
          if (error) {reject(error);}
          else {resolve({response:'Correo enviado: ' + info.response});}
          transporter.close();
        });

        resolve(result);

        log.info(constants.SUCCESS_TRANS, result)
              
      }
    }
    catch (e) {
        log.error(e);
        reject(e);
    }
  });
};