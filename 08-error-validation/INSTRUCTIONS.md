# Error Validation
We are going to build a user sign up form, and we are going to just ask for a username, email address and password.

Those fields have certain _business rules_ associated with them.

1. Username must be between 4 to 10 characters long.

2. Email address must contain an `@` character

3. Password must have at least one special character (!, @, #, $, %, ^, & or *) and must have at least one digit, and one alphabet.

## Your task

A skeleton form has already been given to you, inside `RegisterForm.js`

1. Write the code to capture  the `username`, `email` and `password` in the `RegisterForm` component.

2. There is a `span` with the class of `error` under each form field. If there is an error for the form field, display the error within the `span`. Do not display any errors if the form field in question contains a valid value.

3. **Hint:** This is just a variant of conditional rendering