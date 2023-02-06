const { Router } = require('express');
const genreRouter = require('./genreRouter');
const videogamesRouter = require('./videogamesRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRouter)
router.use("/genres", genreRouter)


module.exports = router;
