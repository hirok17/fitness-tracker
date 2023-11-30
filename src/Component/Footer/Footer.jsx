import logo from "../../assets/logo.svg"
const Footer = () => {
    return (
        <section className="bg-black text-white z-0">
              <footer className="container mx-auto footer p-10">
            <aside>
                <img src={logo} alt="" />
                
            </aside>
            <nav>
                <header className="footer-title">Features</header>
                <a className="link link-hover">ATHLETIC TRAINING </a>
                <a className="link link-hover">WEIGHT LIFTING</a>
                <a className="link link-hover">LEG PRESS</a>
                <a className="link link-hover">BODY BUILDING</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        <p className="text-center">Copyright © 2023 - All right reserved.</p>
        </section>
    );
};

export default Footer;