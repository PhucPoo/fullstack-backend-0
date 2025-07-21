require('dotenv').config()
const express = require('express')
const app = express()
const pool = require('../config/database')



const getHome = ('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    console.table(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error('Lỗi truy vấn:', err.stack);
    res.status(500).send('Lỗi server');
  }
});



const getAbc = (req, res) => {
    res.send('Hello !')
}

const getHp = (req, res) => {
    res.send('<h1>HP dep zai</h1>')
}

const getSample = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHome, getAbc, getHp, getSample
}