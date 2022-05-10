import Logo from '../img/jojo.png'
export default function Header(){
    return <header>
        <div className='nav-right'>
        <img src={Logo} alt="logo" />

        </div>
        <div className='nav-left'>
            <ul>
                <li>
                    <a href="https://github.com/isaias-silva/jojolist-react-version" rel="noreferrer" target="_blank">github</a>
                </li>

                <li>
                    <a href="https://jojo-api.herokuapp.com/" rel='noreferrer' target="_blank">jojoapi</a>
                </li>
            </ul>
        </div>
    </header>

}