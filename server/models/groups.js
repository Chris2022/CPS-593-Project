const con = require("./db_connect");

async function createGroup() {
    let sql = `CREATE TABLE IF NOT EXISTS groups(
        group_id INT NOT NULL AUTO_INCREMENT,
        group_name VARCHAR(255) NOT NULL UNIQUE,
        CONSTRAINT group_pk PRIMARY KEY(group_id)
        COSNSTRAINT user_fk FOREIGN KEY(user_id) REFERENCES users(user_id)
        )`;
    await con.query(sql);
}
createGroup();

module.exports = { createGroup };