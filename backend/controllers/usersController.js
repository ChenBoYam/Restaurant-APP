const User = require( '../models/User' )
const Book = require( '../models/Book' )
const asyncHandler = require( 'express-async-handler' )
const Validator = require( 'fastest-validator' );
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

const signUpValidator = ( clientInput, res ) =>
{
    const schema = {
        name: {
            type: "string",
            optional: false
        },
        // email: { type: "email", optional: false, label: "Email Address" },
        password: {
            type: "string",
            custom: ( v, errors ) =>
            {
                if ( !/[0-9]/.test( v ) ) errors.push( { type: "atLeastOneDigit" } );
                if ( !/[a-zA-Z]/.test( v ) ) errors.push( { type: "atLeastOneLetter" } );
                if ( !/[_! \"#$%&'()*+,\-.\\:\/;=?@^_]/.test( v ) ) errors.push( { type: "atLeastOneSpecialChar" } );
                return v;
            },
            min: 8,
            max: 20,
            messages: {
                stringPattern: "pass value must contain a digit",
                stringMin: "Your pass value is too short",
                stringMax: "Your pass value is too large",
            },
            optional: false
        },
        // confirmPassword: { type: "equal", field: "password" }
        roles: {
            type: "array",
            items: "string",
            default: [ "employee" ],
            enum: [ "employee", "admin" ],
            optional: false
        }

    }

    const v = new Validator( {
        useNewCustomCheckerFunction: true, // using new version
        messages: {
            atLeastOneLetter: "The pass value must contain at least one letter from a-z and A-Z ranges!",
            atLeastOneDigit: "The pass value must contain at least one digit from 0 to 9!",
            atLeastOneSpecialChar: "The pass value must contain at least one special character including _! \"#$%&'()*+,\-.\\:\/;=?@^_"
        }
    } )

    const validatorResponse = v.validate( clientInput, schema )
    
    if ( !validatorResponse ) {
        return res.status( 400 ).json( {
            message: "Validation failed!",
            error: validatorResponse
        } )
    }
}
// @desc Create new a user
// @route POST /users
// @access private 
const createUser = asyncHandler( async ( req, res ) =>
{
    const clientInput = {
        name: req.body.name,
        // email: req.body.email,
        password: req.body.password,
        roles: req.body.roles
    }
    signUpValidator( clientInput, res )
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