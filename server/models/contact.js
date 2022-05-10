const con = require("./db_connect");

async function contact() {
  let sql = `CREATE TABLE IF NOT EXISTS contact (
    contact_id INT NOT NULL AUTO_INCREMENT,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    contact_message varchar(1000) NOT NULL,
    CONSTRAINT contact_pk PRIMARY KEY(contact_id)
    )`;
  await con.query(sql);
}
contact();

async function sendMessage(contact) {
    console.log("HEREEEE");
    const sql = `INSERT INTO contact (contact_name, contact_email, contact_message)
    VALUES ("${contact.name}", "${contact.email}", "${contact.message}")
    `;
    await con.query(sql);
}
module.exports = { contact, sendMessage };