const con = require("./db_connect");

async function createTask() {
    let sql = ` CREATE TABLE IF NOT EXISTS task (
        task_id INT NOT NULL AUTO_INCREMENT,
        task_name VARCHAR(255) NOT NULL UNIQUE,
        task_description VARCHAR(1000),
        group_id INT,
        user_id INT,
        CONSTRAINT task_pk PRIMARY KEY(task_id),
        CONSTRAINT group_pk FOREIGN KEY(group_id) REFERENCES task_group(group_id),
        CONSTRAINT user_kk FOREIGN KEY(user_id) REFERENCES users(user_id)
    )`;
    await con.query(sql);
}
createTask();

module.exports = { createTask };