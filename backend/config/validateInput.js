const validateInput = {
    useNewCustomCheckerFunction: true, // using new version
    messages: {
        atLeastOneLetter: "The pass value must contain at least one letter from a-z and A-Z ranges!",
        atLeastOneDigit: "The pass value must contain at least one digit from 0 to 9!",
        atLeastOneSpecialChar: "The pass value must contain at least one special character including _! \"#$%&'()*+,\-.\\:\/;=?@^_"
    }
}
const validateSchema = {
    name: {
        type: "string",
        optional: false
    },
    email: {
        type: "email",
        optional: false,
        label: "Email Address"
    },
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
    }
    // confirmPassword: { type: "equal", field: "password" }
}
module.exports = {
    validateInput,
    validateSchema
}