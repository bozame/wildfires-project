import React from "react";

class Header extends React.Component{
    render() {
        return 
            <header>
            <a href="#"><img src="" alt=""></a>
            <ul id="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#wildfires">Wildfires</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#report">Report</a></li>
            </ul>
            </header>;
    }
}

export default Header;