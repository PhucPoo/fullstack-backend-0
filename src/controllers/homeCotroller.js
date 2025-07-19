const getHome = (req, res) => {
     res.send('Hello HP vua! and nodemon')
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
module.exports = {
    getHome, getAbc, getHp, getSample
}