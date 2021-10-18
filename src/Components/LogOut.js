


export default function LogOut(props){
    const{
        user
    } = props;

    return (
        <>
        <div classNJame = "logOutContainer">
            <h3>The user: {user}  has signed out</h3>
            <p> Sign back in?</p>
            <Link path ="/login">Signin</Link>
        </div>
        </>
    )
}