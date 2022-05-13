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


async function addGroup(group,user) {
  let count = `SELECT COUNT(1) FROM task_group WHERE group_name = "${group}"`;
  let count1 = await con.query(count);
  if(count1[0]['COUNT(1)']==0){
    const sql = `INSERT INTO task_group (group_name, user_id)
    VALUES ("${group}", ${user})
    `;
    await con.query(sql);
    //query to now grab newly inserted group
    const sql2 = `SELECT * FROM task_group
      WHERE group_name = "${group}"
    `;
    return await con.query(sql2);
  }
  else throw Error('Group already exists');
}

async function getGroupInfo(user) {
  let sql;
  if(user){
    sql = `SELECT group_name FROM task_group WHERE user_id = ${user}`;
  }
  else throw Error('Please login first to view groups');
  return await con.query(sql);
}

async function getAllGroups(user){
  console.log(user + " in get all groups")
  let sql;
  if(user){
    sql = `SELECT * FROM task_group WHERE user_id = ${user}`;
  }
  else throw Error('Please login first to view groups');
  return await con.query(sql);

}
async function editGroup(group,user ){
  let sql;
  if(user.user_id){
    sql = `UPDATE task_group SET group_name = "${group.group_name}" WHERE user_id = ${user.user_id}`;
  }
  else throw Error('Please login first to view groups');
  return await con.query(sql);
}
async function deleteGroup(group,user){
  let sql;
  if(user.user_id){
    sql = `DELETE FROM task_group WHERE group_name = "${group.group_name}" AND user_id = ${user.user_id}`;
  }
  else throw Error('Please login first to view groups');
  return await con.query(sql);
}

module.exports = { createGroup, addGroup, getGroupInfo, editGroup, getAllGroups, deleteGroup };
