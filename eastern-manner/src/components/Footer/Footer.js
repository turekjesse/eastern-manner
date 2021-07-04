import {Link} from 'react-router-dom'

export default function Footer () {
    return (
        <footer>
            
            <div className="flex-row">
                <p>Copyright Eastern Manner 2021</p>
                <div className="footer-nav">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/press">Press</Link>
                    <a href="https://easternmanner.tumblr.com/">
                        <i class="fab fa-tumblr"></i>
                    </a>
                    <a href="https://easternmanner.tumblr.com/">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}