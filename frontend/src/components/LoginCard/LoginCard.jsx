import './LoginCard.css'
import logo from '../../assets/miradologo2.svg'
export default function LoginCard(){
    return(
        <div className="login-card">
            <img src={logo} alt="logo" />
            <div className="blush-input">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder="Entrer le nom d'utlisateur..."/>
            </div>
            <div className="blush-input">
                <label htmlFor="username">Password</label>
                <input type="text" id='username' placeholder='Entrer le mot de passe...'/>
            </div>
            <button className="login-btn">
                Se connecter
            </button>
        </div>
    )
}