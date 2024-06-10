const connection = require('../config/database.js');

class model_contact {
    static async getAll() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM contact ORDER BY id_contact DESC', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
    
    static async Store(Data) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO contact SET ?', Data , (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }); 
        }); 
    }
    
    static async Login(email) {
        return new Promise((resolve, reject) => {
            let isi = connection.query(`select * from contact where email = ? `, [email], function(err, result){
                if (err) {
                    reject(err);
                    console.log(err);
                } else {
                    resolve(result);
                    console.log(email, result);
                }
            })
        })
    }
            
    static async getId(id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM contact WHERE id_contact = ?', [id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
    
    static async Update(id, Data) {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE contact SET ? WHERE id_contact = ?', [Data, id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    
    static async Delete(id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM contact WHERE id_contact = ?', [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = model_contact;
