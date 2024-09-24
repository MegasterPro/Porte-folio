const Nav = ({ isMobile })=>{
    return <div className={`navbar ${isMobile ? "mobile" : ""}`}>
        <ul>
            <a href="./index.html">
                <li>Home</li>
            </a><a href="#about">
                <li>Info</li>
            </a><a href="">
                <li>Abilities</li>
            </a><a href="">
                <li>Projets</li>
            </a><a href="">
                <li>Contact</li>
            </a>
        </ul>
    </div>
}

export default Nav