import { useRef } from "react";

function App() {
    const #home = useRef(null)

    return (
        <div className="App">
        <header>
            <a href="#"><img src="" alt=""></a>
            <ul id="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#wildfires">Wildfires</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#report">Report</a></li>
            </ul>
        </header>
        <body>
            <section id="home">
                <h1>Wild Forests Protection</h1>
                <p>From 2012 to 2021, there were an average of 61,289 wildfires annually.
                In 2021, 58968 wildfires burned 7.1 million acres</p>
            </section>
            <section id="wildfires">
                <h1>Wildfires Staistics</h1>
            </section>
            <section id="news"><h1>News</h1></section>
            <section id="help"><h1>Learn how can you help</h1></section>
            <section id="report"><h1>Report current wildfires</h1></section>
        </body>
        </div>
    );
}

export default App;

