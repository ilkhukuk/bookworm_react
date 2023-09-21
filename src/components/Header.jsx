import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                <Link to="/" className='navbar-brand'>Kitap Kurdu</Link>
                <button
                    className='navbar-toggler'
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                ><span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'><NavLink className={'nav-link'} to="/">Ana Sayfa</NavLink></li>
                        <li className='nav-item'><NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : 'nav-link'} to='/ürünler'>Ürünler</NavLink> </li>
                        <li className='nav-item'><NavLink className={'nav-link'} to='/kategoriler'>Kategoriler</NavLink> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header