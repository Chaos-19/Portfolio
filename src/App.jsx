import { BrowserRouter } from "react-router-dom";

import {
    Navbar,
    Hero,
    Portfolio,
    Services,
    Methodology,
    Feedbacks,
    Footer,
    Contact,
    BlogPost
} from "./sections";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container:xl overflow-hidden">
                <Navbar />
                <Hero />
                <Services />
                <Portfolio />
                <Methodology />
                <Feedbacks />
                <BlogPost />
                <Contact />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
