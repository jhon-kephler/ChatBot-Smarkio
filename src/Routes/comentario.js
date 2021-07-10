const ComentarioController = require('../controller/ComentarioController');

module.exports = (app) => {
   app.get('', ComentarioController.getPage);
   app.post('/novoComentario', ComentarioController.NewComent);
   app.get('/comentarios', ComentarioController.AllComents);
}