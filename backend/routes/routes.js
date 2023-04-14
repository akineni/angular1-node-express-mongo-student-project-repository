module.exports = app => {

    app.use('/', require('./routers/root'))
    app.use('/student', require('./routers/student'))
    app.use('/admin', require('./routers/admin'))
    
}