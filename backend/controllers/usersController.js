const User = require( '../models/User' )
const Book = require( '../models/Book' )
const asyncHandler = require( 'express-async-handler' )
const Validator = require( 'fastest-validator' );
const { validateInput, validateSchema } = require( '../config/validateInput' )
const bcrypt = require( 'bcrypt' )

// @desc Get all the users
// @route GET /users
// @access private 
const getAllUsers = asyncHandler( async ( req, res ) =>
{
    // '-password' do not return password, lean() do not send the whole documents back
    const users = await User.find().select( '-password' ).lean()
    if ( !users ) {
        return res.status( 400 ).json( { message: "Users not found" } )
    }
    res.json( users )
} )

function signUpValidator ( clientInput, res )
{
    return new Promise( ( resolve, reject ) =>
    {
        const v = new Validator( validateInput )
        
        if ( !v.validate( clientInput, validateSchema ) ) {
            reject( res.status( 400 ).json( {
                message: "Validation failed!",
                error: validatorResponse
            } ) )
        } else {
            resolve( res.status( 201 ).json( {
                message: "Validation Success!",
            } ) )
        }
    } )
}

// @desc Create new a user
// @route POST /users
// @access private 
const createUser = asyncHandler( async ( req, res ) =>
{
    const clientInput = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // roles: req.body.roles
    }
    const validated = await signUpValidator( clientInput, res )
    
    // exec is use to make it an await promise
    const duplicate = await User.findOne( { username } ).lean().exec()

    if ( duplicate ) {
        // 409 stand for conflict
        return res.status( 409 ).json( {
            message: "Duplicate username found!"
        } )
    }
    const salt = await new Promise( ( resolve, reject ) =>
    {
        bcrypt.genSalt( 10, function ( err, salt )
        {
            if ( err ) reject( err )
            resolve( salt )
        } )
    } )

    const hashedPwd = bcryptjs.hash( client_input.password, salt )
} )

// @desc Update a user
// @route PATCH /users
// @access private 
const updateUser = asyncHandler( async ( req, res ) =>
{

} )

// @desc Delete a user
// @route DELETE /users
// @access private 
const deleteUser = asyncHandler( async ( req, res ) =>
{

} )

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}