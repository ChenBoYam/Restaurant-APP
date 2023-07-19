require( 'dotenv' ).config()
const User = require( '../models/User' )
// const Book = require( '../models/Book' )
const asyncHandler = require( 'express-async-handler' )
const Validator = require( 'fastest-validator' );
const { newCheckerFunction, validateSignUpSchema, validateUpdateSchema } = require( '../config/validateInput' )
const bcrypt = require( 'bcrypt' )

// @desc Get all the users
// @route GET /users
// @access private 
const getAllUsers = asyncHandler( async ( req, res ) =>
{
    // '-password' do not return password, lean() do not send the whole documents back
    const users = await User.find().select( '-password' ).lean()
    if ( !users?.length ) {
        return res.status( 400 ).json( { message: "Users not found" } )
    }
    res.json( users )
} )

// @desc Create new a user
// @route POST /users
// @access private 
const createUser = asyncHandler( async ( req, res ) =>
{

    const validatedInput = await signUpValidator( req, res )
    
    if ( validatedInput.error ) {
       
        return res.status( 402 ).json( validatedInput );// 402 stand for validation error
    }
    // exec is use to make it an await promise
    const duplicate = await User.findOne( {
        $or: [
            { username: validatedInput.username },
            { email: validatedInput.email }
        ]
    } ).lean().exec()

    if ( duplicate ) {
        // 409 stand for conflict
        return res.status( 409 ).json( {
            message: "Duplicate username or email found!"
        } )
    }
    const salt = await genSaltPromise( Number( process.env.SALT_ROUND ) )

    const hashedPwd = await bcrypt.hash( validatedInput.password, salt )

    const userObject = {
        username: validatedInput.username,
        email: validatedInput.email,
        password: hashedPwd
    }
    const user = await User.create( userObject )

    if ( user ) {
        res.status( 201 ).json( {
            message: `New user ${ validatedInput.username } created`
        } )
    } else {
        res.status( 400 ).json( {
            message: "Something went Wrong! (Invalid user data)"
        } )
    }
} )

// @desc Update a user
// @route PATCH /users
// @access private 
const updateUser = asyncHandler( async ( req, res ) =>
{
    
    const validatedInput = await updateValidator( req, res )
    
    const user = await User.findById( validatedInput.id )

    if ( !user ) {
        return res.status( 400 ).json( {
            message: "User not found!"
        } )
    }

    if ( validatedInput.username ) {
        const duplicateUsername = await User
            .findOne( { username: validatedInput.username } )
            .lean()
            .exec()
        if ( duplicateUsername && duplicateUsername?._id.toString() !== validatedInput.id ) {
            return res.status( 409 ).json( {
                message: "Username have been used!"
            } )
        }
        user.username = validatedInput.username
    }

    if ( validatedInput.email ) {
        const duplicateEmail = await User
            .findOne( { email: validatedInput.email } )
            .lean()
            .exec()
        if ( duplicateEmail && duplicateEmail?._id.toString() !== validatedInput.id ) {
            return res.status( 409 ).json( {
                message: "Email have been used!"
            } )
        }
        user.email = validatedInput.email
    }

    if ( validatedInput.password ) {
        const salt = await genSaltPromise( Number( process.env.SALT_ROUND ) )
        user.password = await bcrypt.hash( validatedInput.password, salt )
    }

    const updatedUser = await user.save()

    res.json( {
        message: `${ updatedUser.username } updated`
    } )
} )

// @desc Delete a user
// @route DELETE /users
// @access private 
const deleteUser = asyncHandler( async ( req, res ) =>
{
    const { id } = req.body
    if ( !id ) {
        return res.status( 400 ).json( {
            message: "User ID required!"
        } )
    }
    const user = await User.findById( id )

    if ( !user ) {
        return res.status( 400 ).json( {
            message: "User not found!"
        } )
    }

    const result = await user.deleteOne()

    res.json( {
        message: `Username ${ result.username } with ID ${ result._id } deleted`
    } )
} )





function signUpValidator ( req, res )
{
    return new Promise( ( resolve, reject ) =>
    {
        const clientInput = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        }

        const v = new Validator( newCheckerFunction )
        const validatorResponse = v.validate( clientInput, validateSignUpSchema )
        if ( validatorResponse !== true ) {
            const errorResponse = {
                message: validatorResponse,
            }
            // console.log("this is running")
            reject( errorResponse )
        } else {
            // console.log(`$passed: ${pass}`)
            resolve( clientInput )
        }
    } )
}
function updateValidator ( req, res )
{
    return new Promise( ( resolve, reject ) =>
    {
        const clientInput = {
            id: req.body.id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        const v = new Validator( newCheckerFunction )
        const validatorResponse = v.validate( clientInput, validateUpdateSchema )
        if ( validatorResponse !== true ) {
            const errorResponse = {
                message: validatorResponse,
            }
            
            reject( errorResponse )
        } else {
            resolve( clientInput )
        }
    } )
}
function genSaltPromise ( saltRound )
{
    return new Promise( ( resolve, reject ) =>
    {
        bcrypt.genSalt( saltRound, function ( err, salt )
        {
            if ( err ) reject( err )
            resolve( salt )
        } )
    } )
}



module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}