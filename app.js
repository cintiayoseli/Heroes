const express = require('express') ;
const app = express();
app.listen(3030, () => console.log('Server running in 3030 port'));

const mainRouter = require ('./routes/main')
const heroesRouter = require('./routes/heroes')

app.use('/',mainRouter)
app.use ('/heroes', heroesRouter)
app.use('/heroes/detalles/:idHeroe',mainRouter)

app.use('/heroes/bio/:id/:ok?',mainRouter);

app.use('/creditos',mainRouter)

app.get('*', mainRouter)