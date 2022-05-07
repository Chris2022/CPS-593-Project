const con = require("./db_connect");

async function createSchedule () {
    let sql = ` CREATE TABLE IF NOT EXISTS schedules (
        schedule_id INT NOT NULL AUTO_INCREMENT,
        schedule_date DATE NOT NULL,
        schedule_time TIME NOT NULL,
        )`;
    await con.query(sql);
}
createSchedule();