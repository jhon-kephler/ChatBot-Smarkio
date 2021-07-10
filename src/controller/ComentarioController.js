const { Router } = require('express');
const { Comentario } = require('../model');

exports.NewComent = (req, res, next) => {
    const { texto } = req.body;
    const newComent = Comentario.create({texto});
    res.status(200).json({ message: 'cadastrado com sucesso' });
 };
 
 exports.AllComents = async (req, res, next) => {
   const allComents = await Comentario.findAll();
   res.status(200).json(allComents) 
};

 exports.getPage = (req, res, next) => {
   let path = require('path');
   res.status(200).sendFile(path.resolve('./Front/home.html'));
};

 