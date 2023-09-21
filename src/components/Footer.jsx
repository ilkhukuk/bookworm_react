import { Link } from 'react-router-dom'
Link

const Footer = () => {
    return (
        <footer className='text-center fixed-bottom'>
            <span className='text-danger'>&copy; 2023 ilkhukuk</span>
            <div className='d-flex justify-content-center'>
                <Link to={'https://github.com/ilkhukuk'} className='text-decoration-none m-1' target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" style={{ width: '20px' }} className='bg-light rounded p-1' /></Link>
                <Link to={'https://www.linkedin.com/in/ilkhukuk/'} className='text-decoration-none m-1' target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" style={{ width: '20px' }} /></Link>
                <Link to={'https://www.instagram.com/ilk.hukuk/'} className='text-decoration-none m-1' target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png" style={{ width: '20px' }} /></Link>
            </div>
        </footer>
    )
}

export default Footer