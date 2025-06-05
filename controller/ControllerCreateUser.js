function CreateUser(req,res){
return res.status(201).json({
    message: "User created successfully",
    user: {
        id: 1,
        name: 'John Doe',
        age: 30,
        email: 'John@gmail.com'
    }
}) 
} 

module.exports= {CreateUser};

/* I created a new endpoint for user creation.
   It returns a JSON response with the status code 201.
   The function name is CreateUser, and it sends a response containing a message: 
   "User created successfully" along with a user object that includes 
   the user's id, name, age, and email.
   Finally, I export the function using module.exports = { CreateUser };
*/
