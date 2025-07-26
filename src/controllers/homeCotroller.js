require('dotenv').config()
const express = require('express')
const app = express()
const pool = require('../config/database')
const { getAllUsers } = require('../service/CRUDService')
const { get } = require('../routes/web')



const getHome = ('/', async (req, res) => {
    let result=getAllUsers(req, res)
    
    //   try {
    
    //     const result = await pool.query('SELECT * FROM users');
    //     console.table(result.rows);
    //     res.json(result.rows);
    //   } catch (err) {
    //     console.error('Lỗi truy vấn:', err.stack);
    //     res.status(500).send('Lỗi server');
    //   }
    return res.render('home.ejs',{listUsers: result})
});

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
  
    res.send('Create user succeed !')
}



const getAbc = (req, res) => {
    res.send('Hello !')
}

const getHp = (req, res) => {
    res.send('<h1>HP dep zai</h1>')
}

const getSample = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHome, getAbc, getHp, getSample, postCreateUser, getCreatePage
}