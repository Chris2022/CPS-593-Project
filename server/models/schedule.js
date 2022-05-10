const con = require("./db_connect");

async function createSchedule () {
    let sql = ` CREATE TABLE IF NOT EXISTS schedules (
        schedule_id INT NOT NULL AUTO_INCREMENT,
        schedule_date DATE NOT NULL,
        schedule_time TIME NOT NULL,
        task_id INT,
        CONSTRAINT schedule_hk PRIMARY KEY(schedule_id),
        CONSTRAINT schedule_pk FOREIGN KEY(task_id) REFERENCES task(task_id)
        )`;
    await con.query(sql);
}
createSchedule();


module.exports = { createSchedule };