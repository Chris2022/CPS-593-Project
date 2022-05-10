const con = require("./db_connect");

async function createGroup() {
  let sql = `CREATE TABLE IF NOT EXISTS task_group (
        group_id INT NOT NULL AUTO_INCREMENT,
        group_name VARCHAR(255) NOT NULL,
        user_id INT,
        CONSTRAINT group_pk PRIMARY KEY(group_id),
        CONSTRAINT user_pk FOREIGN KEY(user_id) REFERENCES users(user_id)
    )`;
  await con.query(sql);
}
createGroup();

module.exports = { createGroup };
