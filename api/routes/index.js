const express = require("express");
const pessoas =  require('./PessoasRoute')

module.exports = app => {
    app.use(express.urlencoded());
    app.use(express.json())
    app.use(pessoas)
}