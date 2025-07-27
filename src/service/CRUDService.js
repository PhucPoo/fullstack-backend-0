const pool = require('../config/database');
const getAllUsers = async (req, res) => {
    const result  = await pool.query('SELECT * FROM users');
    return result.rows; 

}
module.exports = {
    getAllUsers
}