import Logo from './Logo'
import "./header.css"
import Button from '../Button'
import Navbar from '../Navbar'
export default function index() {
    const handlerClickRegister = () => alert('Register')
    const handlerClickLogin = () => alert('Login')
    return (
        <header>
            <Logo/>
            <Navbar/>
            <Button text="Register" clickText={handlerClickRegister} />
            <Button text="Login" clickText={handlerClickLogin} />
        </header>

    )
}