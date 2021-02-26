
import './MainNavBar.css'

function MainNavBar({ navTabs }) {
    return (
        <nav className='all-tabs'>
            <ul>
                {navTabs.map(({className,href,content}, index) => {
                    return (
                        <li key={index} className={className}>
                            <a href={href}>  </a> {content}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default MainNavBar;