const con = require("./db_connect");

async function createTask() {
    let sql = ` CREATE TABLE IF NOT EXISTS tasks (
        task_id INT NOT NULL AUTO_INCREMENT,
        task_name VARCHAR(255) NOT NULL UNIQUE,
        task_description VARCHAR(1000),
        CONSTRAINT task_pk FOREIGN KEY(group_id)
        CONSTRAINT user_pk FOREIGN KEY(user_id)
    )`;
    await con.query(sql);
}
createTask();