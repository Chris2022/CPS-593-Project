const con = require("./db_connect");

async function createGroup() {
    let sql = ` CREATE TABLE IF NOT EXISTS groups (
        group_id INT NOT NULL AUTO_INCREMENT,
        group_name VARCHAR(255) NOT NULL UNIQUE,
        CONSTRAINT group_pk PRIMARY KEY(user_id)
    )`;
    await con.query(sql);
}
createGroup();