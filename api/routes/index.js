const express = require("express");
const pessoas =  require('./PessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')
module.exports = app => {
    app.use(express.urlencoded());
    app.use(express.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)
    
}