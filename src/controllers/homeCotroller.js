require('dotenv').config()
const express = require('express')
const app = express()
const pool = require('../config/database')
const { getAllUsers, updateUserById } = require('../service/CRUDService')
const { get } = require('../routes/web')



const getHome =  async (req, res) => {
    let result = await getAllUsers(req, res)
    console.log(result);
    
    //   try {
    
    //     const result = await pool.query('SELECT * FROM users');
    //     console.table(result.rows);
    //     res.json(result.rows);
    //   } catch (err) {
    //     console.error('Lỗi truy vấn:', err.stack);
    //     res.status(500).send('Lỗi server');
    //   }
    return res.render('home.ejs',{ listUsers: result })
}

const postCreateUser = async (req, res) => {

    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    // pool.query('INSERT INTO users(email, name, city) VALUES($1, $2, $3)', [email, name, city])

    // res.send('Create user succeed !')
    let { rows } = await pool.query(
        'INSERT INTO users(email, name, city) VALUES($1, $2, $3) RETURNING *',
        [email, name, city]
    );
    console.log(rows[0]);
  
    res.redirect('/');
}



const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
const getEditPage = async (req, res) => {
    const id = req.params.id;
    const result = await pool.query('SELECT * FROM users WHERE id = $1 ', [id]);
    let user = result.rows && result.rows.length > 0 ? result.rows[0] : {}; 
    res.render('edit.ejs', { userEdit: user } );
    console.log(user);

}
const postUpdateUser = async (req, res) => {
    let id = req.body.id
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    updateUserById( id ,email, name, city)
    // pool.query('INSERT INTO users(email, name, city) VALUES($1, $2, $3)', [email, name, city])

    // res.send('Create user succeed !')
    
   
    // console.log(rows[0]);
    console.log(id, email, name, city);
  
    res.redirect('/');
}


const postDeleteUser = async (req, res) => {
    const id = req.params.id;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    let user = result.rows && result.rows.length > 0 ? result.rows[0] : {}; 
    res.render('delete.ejs', { userEdit: user } );
}
const postRemoveUser = async (req, res) => {
    let id = req.body.id
    let email = req.body.email

    await pool.query('DELETE FROM users WHERE id = $1', [id])
    // res.send('Create user succeed !')
    
    console.log(id, email);
  
    res.redirect('/');
}
module.exports = {
    getHome,  postCreateUser, getCreatePage, getEditPage, postUpdateUser, updateUserById, postDeleteUser, postRemoveUser
}