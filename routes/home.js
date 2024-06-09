var express = require('express');
var router = express.Router();
const model_contact = require('../model/model_contact'); 

router.get('/', function(req, res, next) {
    res.render('main/home');
});

router.post('/', async function (req, res, next) {
    try {
        let { first_name, last_name, email, phone_number, message } = req.body;
        let Data = {
            first_name,
            last_name,
            email,
            phone_number,
            message
        };
        await model_contact.Store(Data); // Memperbaiki casing dari Store ke store
        req.flash('success', 'Berhasil menyimpan data kontak');
        res.redirect('/home');
    } catch (error) {
        console.error("Error saving contact data:", error);
        req.flash('error', 'Gagal menyimpan data kontak');
        res.redirect('/contact2');
    }
});

module.exports = router;
