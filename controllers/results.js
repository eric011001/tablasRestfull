const express = require('express');

function suma(req, res, next) {
    const {n1,n2} = req.params;
    res.send(`El resultado es ${parseInt(n1)+parseInt(n2)}`);
}

function multiplicacion(req,res, next){
    const {n1,n2} = req.body;
    res.send(`El resultado es ${parseInt(n1)*parseInt(n2)}`)
}

function division(req,res, next){
    const {n1,n2} = req.body;
    res.send(`El resultado es ${parseInt(n1)/parseInt(n2)}`)
}

function potencia(req,res, next){
    const {n1,n2} = req.body;
    res.send(`El resultado es ${parseInt(n1)**parseInt(n2)}`)
}

function resta(req, res, next){
    const {n1,n2} = req.params;
    res.send(`El resultado es ${parseInt(n1)-parseInt(n2)}`);
}

module.exports = {suma,resta,multiplicacion,division,potencia}