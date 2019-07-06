import React from 'react';
import dotnetcoreimg from './assets/image/noname-1.png';
import blogimg from './assets/image/blog.png';
import ikeyoimg from './assets/image/ikeyo.png';
import todo from './assets/image/todo.png';
import videofliximg from './assets/image/videoflix.png';

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
                            <img src={ikeyoimg} alt="dotnet" />
                        </div>
                        <h3>IKEYO HOME Decoration Platform</h3>
                        <a href="https://ikeyo.herokuapp.com/" target="_blank" rel="noopener noreferrer">[LIVE]</a><a href="https://github.com/ChrisSHDev/IkeyoProject" target="_blank" rel="noopener noreferrer">[Github]</a>
                        <p>Node.js(Express), ReactJS, JavaScript(ES6), SASS/CSS, HTML5</p>
                    </div>
                    <div className="portfolio__wrap--row--itembox">
                        <div className="portfolio__wrap--row--itembox--imgbox">
                            <img src={videofliximg} alt="dotnet" />
                        </div>
                        <h3>Video Flix Platform </h3>
                        <a href="https://videoflix-chris.herokuapp.com/" target="_blank" rel="noopener noreferrer">[LIVE]</a><a href="https://github.com/ChrisSHDev/videoflix" target="_blank" rel="noopener noreferrer">[Github]</a>
                        <p>ReactJS, SASS, CSS/HTML5</p>
                    </div>
                    <div className="portfolio__wrap--row--itembox">
                        <div className="portfolio__wrap--row--itembox--imgbox">
                            <img src={todo} alt="dotnet" />
                        </div>
                        <h3>Simple To-do List </h3>
                        <a href="https://react-todolist-project.herokuapp.com/" target="_blank" rel="noopener noreferrer">[LIVE]</a><a href="https://github.com/ChrisSHDev/ReactJS_TodoList" target="_blank" rel="noopener noreferrer">[Github]</a>
                        <p>ReactJS, Redux, SASS, CSS/HTML5</p>
                    </div>
                </div>
                <div className="portfolio__wrap--row">
                    <div className="portfolio__wrap--row--itembox">
                        <div className="portfolio__wrap--row--itembox--imgbox">
                            <img src={blogimg} alt="dotnet" />
                        </div>
                        <h3>Personal Blog Platform </h3>
                        <a href="https://github.com/ChrisSHDev/ReactJS_Blog" target="_blank" rel="noopener noreferrer">[Github]</a>
                        <p>ReactJS, Redux, Node.js(Kona), MongoDB, JavaScript(ES6), SASS/CSS, HTML5</p>
                    </div>
                    <div className="portfolio__wrap--row--itembox">
                        <div className="portfolio__wrap--row--itembox--imgbox">
                            <img src={dotnetcoreimg} alt="dotnet" />
                        </div>
                        <h3>Eccomerce Plat form</h3>
                        <a href="https://github.com/ChrisSHDev/dotNetCoreProject" target="_blank" rel="noopener noreferrer">[Github]</a>
                        <p>.NET CORE, MS-SQL, Bootstrap, C#, CSS/HTML5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;