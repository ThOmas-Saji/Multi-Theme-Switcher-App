import { useTheme, type ThemeType } from '../../context/ThemeContext'
import { Link } from 'react-router-dom';
import MyAppIcon from '/src/assets/myApp.svg'
import AppLinks from '../UiComponents/NavLink/AppLinks';

const Header = () => {

    const { theme, setTheme } = useTheme();

    return (
        <header className='fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 shadow z-50 switch-style'>
            <Link to={'/'} className='plain-link flex items-center gap-1'>
                <img className='w-6' src={MyAppIcon} alt='app-icon' />
                <h1 className='text-4xl font-bold'>MyApp</h1>
            </Link>


            <nav className='flex items-center justify-end flex-wrap-reverse gap-y-2 gap-x-4'>
                {(theme !== 'theme2') ? <AppLinks className='space-x-4' /> : null}

                <select name='theme-select' value={theme}
                    onChange={(e) => setTheme(e.target.value as ThemeType)}
                    className='px-2 py-1 border rounded switch-style'
                >
                    <option value='theme1'>Theme 1</option>
                    <option value='theme2'>Theme 2</option>
                    <option value='theme3'>Theme 3</option>

                </select>
            </nav>
        </header>
    )
}

export default Header