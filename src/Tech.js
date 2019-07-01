import React from 'react';
import myphoto from './assets/image/KakaoTalk_20190126_180858369-1024x768.jpg'
import reactimg from './assets/image/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png';
import nodejsimg from './assets/image/kisspng-node-js-javascript-express-js-mongodb-github-node-js-5b224f661810b1.8226577315289752060986.png';
import javascriptimg from './assets/image/kisspng-javascript-logo-html-comment-blog-5ae63c23139110.5436874015250381150802-e1548551857998.png';
import wordpressimg from './assets/image/kisspng-wordpress-content-management-system-blog-plug-in-w-wordpress-logo-fill-wordcamp-russia-2-13-5ba3862202cb48.9933475915374433620115.png';
import databaseimg from './assets/image/kisspng-microsoft-sql-server-database-server-computer-icon-database-5b3c51e9c28de9.6550330315306797857969.png';
import csharpimg from './assets/image/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png';


const Tech = () => {
    return (
        <div className="tech">
            <div className="tech__wrap container">
                <div className="tech__wrap--left">
                    <img src={myphoto} alt="techbox" />
                </div>
                <div className="tech__wrap--right">
                    <h3>Technologies</h3>
                    <div className="tech__wrap--right--techbox">
                        <div className="tech__wrap--right--techbox--img">
                            <img src={reactimg} alt="react"/>
                        </div>
                        <div className="tech__wrap--right--techbox--content">
                            <h4>ReactJS</h4>
                            <p>ReactJS, Redux, &#38; React Router</p>
                        </div>
                    </div>
                    <div className="tech__wrap--right--techbox">
                        <div className="tech__wrap--right--techbox--img">
                            <img src={javascriptimg} alt="JavaScript"/>
                        </div>
                        <div className="tech__wrap--right--techbox--content">
                            <h4>JavaScript</h4>
                            <p>Expertise Javascript &#38; ES6</p>
                        </div>
                    </div>
                    <div className="tech__wrap--right--techbox">
                        <div className="tech__wrap--right--techbox--img">
                            <img src={csharpimg} alt="csharp"/>
                        </div>
                        <div className="tech__wrap--right--techbox--content">
                            <h4>C#</h4>
                            <p>ASP.NET &#38; .NET CORE</p>
                        </div>
                    </div>
                    <div className="tech__wrap--right--techbox">
                        <div className="tech__wrap--right--techbox--img">
                            <img src={wordpressimg} alt="wordpress"/>
                        </div>
                        <div className="tech__wrap--right--techbox--content">
                            <h4>wordpress</h4>
                            <p>PHP, HTML &#38; CSS</p>
                        </div>
                    </div>
                    <div className="tech__wrap--right--techbox">
                        <div className="tech__wrap--right--techbox--img">
                            <img src={nodejsimg} alt="nodejs"/>
                        </div>
                        <div className="tech__wrap--right--techbox--content">
                            <h4>Node.js</h4>
                            <p>Express, Kona  &#38; Pug(Jade)</p>
                        </div>
                    </div>
                    <div className="tech__wrap--right--techbox">
                        <div className="tech__wrap--right--techbox--img">
                            <img src={databaseimg} alt="database"/>
                        </div>
                        <div className="tech__wrap--right--techbox--content">
                            <h4>Data Base</h4>
                            <p>SQL(MS, Oracle, My) &#38; NoSQL(MongoDB)</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Tech;