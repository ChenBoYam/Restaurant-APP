require( 'dotenv' ).config()
require( 'express-async-errors')
const express = require( 'express' )
const app = express()
const path = require( 'path' )
const { logger, logEvents } = require( './middleware/logger' )
const errorHandler = require( './middleware/errorHandler' )
const cookieParser = require( 'cookie-parser' )
const cors = require( 'cors' )
const corsOptions = require( './config/corsOptions' )
const connectDB = require( './config/dbConn' )
const mongoose = require( 'mongoose' )
const PORT = process.env.PORT || 3000

console.log(process.env.NODE_MODE)

connectDB()

app.use( logger )

app.use( cors(corsOptions) )

app.use( express.json() )

app.use( cookieParser() )

// express.static is a biuld in middleware
app.use( '/', express.static( path.join( __dirname, 'public' ) ) )
// app.use( "/admin", express.static(path.resolve(__dirname, '../frontend/build')));

app.use( '/', require( './routes/root' ) )
app.use( '/users', require( './routes/userRoutes' ) )

app.use( '/admin/gallery', require( './routes/galleryRoutes' ) )
app.use( '/admin/event', require( './routes/eventRoutes' ) )
app.use( '/admin/contact', require( './routes/contactRoutes' ) )
app.use( '/admin/about', require( './routes/aboutRoutes' ) )
app.use( '/admin/menu', require( './routes/menuRoutes' ) )

app.use( '/uploads', express.static('uploads' ) );


app.all( '*', ( req, res ) =>
{
    res.status( 404 )
    if ( req.accepts( 'html' ) ) {
        res.sendFile( path.join( __dirname, 'views', '404.html' ) )
    } else if ( req.accepts( 'json' ) ) {
        res.json( {
            message: '404 Not Found'
        } )
    } else {
        res.type( 'txt' ).send( '404 Not Found' )
    }
} )

app.use( errorHandler )

mongoose.connection.once('open', () => {
    console.log('MongoDB connected')
    app.listen( PORT, () => console.log( `Server Running on port ${ PORT }` ) )
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})