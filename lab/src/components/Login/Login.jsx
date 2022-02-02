import React from 'react';

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  })

const handleSubmit = async (e)=>{
  e.preventDefault();
  try{
    
  }catch(error){
    setUser({
      isError: true,
      errorMsg: "Invalid Credentials",
      email: "",
      password: ""
    })
  }
};

const handleInput = (e)=>{
  const {id, value} = e.target;
  setUser((prevState)=>({
    ..prevState,
    [id]: value,
  }))
};

const handleError = ()=>{
    if (form.isError) {
      return (
        <h3 className={toggleForm}>
          {form.errorMsg}
        </h3>
      );
    }
}

  return (
    <Layout>
      <div className={classes.container}>
        <form className={classes.loginForm} 
        onSubmit={handleSubmit}>
          <h2 className={classes.title}>Login to your account</h2>
          <label className={classes.label}>E-mail</label>
          <br/>
          <input className={classes.loginInput}
            type="text"
            placeholder="type your email"
            id="email" 
            value={user.email}
            onChange={handleInput}/>
          <br />
          <label className={classes.label}>Password</label>
          <br/>
          <input className={classes.loginInput}
            type="text"
            placeholder="type your password"
            id="password" 
            value={user.password}
            onChange={handleInput}/>
          <br />
          {handleError}
          <br/>
          <button className={classes.submit} disabled={handleError}>Submit</button>
        </form>
      </div>
    </Layout>
  );
}
