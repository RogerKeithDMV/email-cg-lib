/**
 * Object who contains the required properties of the sftp component.
 */
 const objecteMailReq = {
    host:null,
    port:null,
    secure:null,
    user:null,
    pass:null,
    from:null,
    to:null
};

/**
 * Object who contains the optionals properties of the sftp component.
 */

const objecteMailOpt = {
    subject:null,
    text:null
};

module.exports = {
    objecteMailReq,
    objecteMailOpt
}