export const signupFormControlers = [
    {
        name:"userName",
        placeholder:"enter your user name",
        type:"text",
        componentType:"input",
        label:"Username"
    },  {
        name:"userEmail",
        placeholder:"enter your email",
        type:"email",
        componentType:"input",
        label:"Email"
    },  {
        name:"password",
        placeholder:"enter your password",
        type:"passsword",
        componentType:"input",
        label:"Password"
    }
]

export const loginFormControlers = [
   {
        name:"userEmail",
        placeholder:"enter your email",
        type:"email",
        componentType:"input",
        label:"Email"
    },  {
        name:"password",
        placeholder:"enter your password",
        type:"passsword",
        componentType:"input",
        label:"Password"
    }
]



export const loginFormInitiaState ={
   
    userEmail:'',
    password:''
}

export const signupFormInitiaState ={
    userName:'',
    userEmail:'',
    password:''
}