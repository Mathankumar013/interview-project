const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mathan@123",
    database: "project"
});

app.get("/", (req, res) => {
    const sql = "SELECT id, name, email, phone, gender, DATE_FORMAT(dob, '%d-%m-%Y') AS dob FROM data ORDER BY id ASC";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


app.post("/create", (req, res) => {
    const sql = "INSERT INTO data (name, email, phone, gender, dob) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.gender,
        req.body.dob
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const sql = "UPDATE data SET name=?, email=?, phone=?, gender=?, dob=? WHERE id=?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.gender,
        req.body.dob,
        id
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    const deleteSql = "DELETE FROM data WHERE id = ?";
    const resetSql = "ALTER TABLE data AUTO_INCREMENT = 1";
    db.query(deleteSql, [id], (err, data) => {
        if (err) return res.json(err);
        db.query(resetSql, (err, result) => {
            if (err) return res.json(err);
            return res.json(result);
        });
    });
});

app.listen(6050, () => {
    console.log("Server is running on port 6050!");
});
