import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
    return (
        <header className="border-b border-stone-200 bg-teal-500 px-4 py-3 uppercase">
            <Link to="/" className="tracking-widest">
                Pizzaris
            </Link>

            <SearchOrder />

            <Username />
        </header>
    )
}

export default Header
