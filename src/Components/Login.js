



export default function Login(props){

    const {
        values,
        disabled,
        change,
        submit,
    } = props;

    const onChange = evt => {
        const { name} = evt.target;
        change(name);
      }
      
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
   return (
        <>
        <form className ="loginForm" onSubmit = {onSubmit}>
            <h2>Please Sign In</h2>
            <div className="errors">
            {/* //add errors  */}
            </div>
            <div className = "loginInput">
                <div className = "userName">
                    <label className = "userNameInput">UserName:
                        <input
                        type = "text"
                        name = 'username'
                        onChange = {onChange}
                        value = {values.username}
                        />
                    </label>                
                </div>
                <div className ="password">
                    <label className = "passwordInput">Password:
                    <input
                    type = "password"
                    name = "password" 
                    onChange = {onChange}
                    value = {values.password}
                    />
                    </label>
                </div>
                <button disabled = {disabled}>Submit</button>
            </div>
        </form>

        </>
   )
}


