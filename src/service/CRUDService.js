const pool = require('../config/database');
const getAllUsers = async ()  => {
    const result  = await pool.query('SELECT * FROM users ORDER BY id ASC');
    return result.rows; 

}
const updateUserById = async (id, email, name, city) => {
     let { rows } = await pool.query(
        'UPDATE users SET email = $1, name = $2, city = $3 WHERE id = $4 RETURNING * ',
        [email, name, city, id]
    );
}
module.exports = {
    getAllUsers , updateUserById
}