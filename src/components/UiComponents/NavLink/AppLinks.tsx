import { NavLink } from 'react-router-dom'

const AppLinks = ({ className }: { className: string }) => {
    return (
        <nav className={className}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </nav>
    )
}

export default AppLinks