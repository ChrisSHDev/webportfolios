import React from 'react';
import dotnetcoreimg from './assets/image/noname-1.png';
import blogimg from './assets/image/blog.png';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio__wrap container">
                <h2>
                    Digital Portfolio
                 </h2>
                 <h3>Side Projects</h3>
                <div className="portfolio__wrap--row">
                    <div className="portfolio__wrap--row--itembox">
                        <div className="portfolio__wrap--row--itembox--imgbox">
                            <img src={dotnetcoreimg} alt="dotnet"/>
                        </div>
                        <h3>IKEYO HOME Decoration Platform</h3>
                        <p>Node.js(Express), ReactJS, JavaScript(ES6), SASS/CSS, HTML5</p>
                    </div>
                    <div className="portfolio__wrap--row--itembox">
                        <div className="portfolio__wrap--row--itembox--imgbox">
                            <img src={blogimg} alt="dotnet"/>
                        </div>
                        <h3>Personal Blog Platform </h3>
                        <p>ReactJS, Redux, Node.js(Kona), MongoDB, JavaScript(ES6), SASS/CSS, HTML5</p>
                    </div>
                    <div className="portfolio__wrap--row--itembox">
                        <div className="portfolio__wrap--row--itembox--imgbox">
                            <img src={dotnetcoreimg} alt="dotnet"/>
                        </div>
                        <h3>Eccomerce Plat form</h3>
                        <p>.NET CORE, MS-SQL, Bootstrap, C#, CSS/HTML5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;