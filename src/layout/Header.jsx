function Header() {
    return (
        <nav className="teal lighten-1">
            <div className="nav-wrapper">
                <a
                    href="/"
                    className="brand-logo"
                >
                    List Films
                </a>
                <ul
                    id="nav-mobile"
                    className="right hide-on-med-and-down"
                >
                    <li>
                        <a href="!#">Repo</a>
                    </li>
                    <li>
                        <a href="badges.html">Components</a>
                    </li>
                    <li>
                        <a href="collapsible.html">JavaScript</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
