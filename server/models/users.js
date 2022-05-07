const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    user_weight NUMERIC,
    user_height NUMERIC,
    user_password VARCHAR(255),
    CONSTRAINT user_pk PRIMARY KEY(user_id)
  )`;
  await con.query(sql);
}
createTable();

let getUsers = async () => {
  const sql = `SELECT * FROM users`;
  return await con.query(sql);
};

async function getUser(user) {
  let sql;
  if(user.user_id) {
    sql = `SELECT * FROM users
      WHERE user_id = ${user.user_id}
    `;
  } else {
    sql = `SELECT * FROM users
      WHERE username = "${user.username}"
    `;
  }
  let u = await con.query(sql);
  console.log("In get user: " + u);
  return u;
}

async function login(username, password) {
  const user = await userExists(username);
  if(!user[0]) throw Error('User not found')
  if(user[0].password !== password) throw Error("Password is incorrect");

  return user[0];
}

async function register(user) {
  console.log(user);
  const u = await userExists(user.username);
  if(u.length>0) throw Error("Username already exists");
  const sql = `INSERT INTO users (username, firstname, lastname, password, birthdate)
    VALUES ("${user.username}", "${user.firstname}", "${user.lastname}", "${user.password}", "${user.birthdate}")
  `;

  const insert = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}

async function deleteUser(userId) {
  const sql = `DELETE FROM users 
    WHERE user_id = ${user_id}
  `;
  await con.query(sql);
 
}

async function userExists(username) {
  const sql = `SELECT * FROM users
    WHERE username = "${username}"
  `;
  return await con.query(sql);
}

async function editUser(user) {
  const sql = `UPDATE users SET
    username = "${user.username}"
    WHERE user_id = ${user.user_id}
  `;
  const update = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}

// ORDER BY example
async function order(table, column) {
  const sql = `SELECT ${column}
    FROM ${table}
    ORDER BY ${column}
  `;
  return await con.query(sql);
}

async function orderWhere(table, selection, column, condition) {
  const sql = `SELECT ${selection}
    FROM ${table}
    WHERE ${column} = ${condition}
    ORDER BY ${selection}
  `;
  return await con.query(sql);
}

async function orderUsernames() {
  const sql = `SELECT * FROM users
    ORDER BY username DESC
  `;
  return await con.query(sql);
}



module.exports = { getUsers, login, register, deleteUser, editUser, getUser, createTable };