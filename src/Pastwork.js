import React from 'react';
import royal from './assets/image/Royal.png';
import ac3 from './assets/image/ac3PNG.png';
import goldenrug from './assets/image/goldenrug.png';
import vhm from './assets/image/vhm.png';
import deficiency from './assets/image/deficiency.png';
import solution from './assets/image/solution.png';

const Pastwork = () => {
    return (
        <div className="pastwork">
            <div className="pastwork__wrap container">
                <h2>
                    Past Work
                 </h2>
                <h3>Clients's Website entirely developed by myself</h3>
                <div className="pastwork__wrap--row">
                    <div className="pastwork__wrap--row--itembox">
                        <div className="pastwork__wrap--row--itembox--imgbox">
                            <img src={vhm} alt="dotnet" />
                        </div>
                        <div className="pastwork__wrap--row--itembox--hoverbox">
                            <h3>Vancouver Home Maintenance</h3>
                            <p>Wordpress, HTML5/CSS</p>
                            <a href="https://vancouverhomemaintenance.com/" target="_blank" rel="noopener noreferrer">
                                <span>Visit Website</span>
                            </a>
                        </div>
                    </div>
                    <div className="pastwork__wrap--row--itembox">
                        <div className="pastwork__wrap--row--itembox--imgbox">
                            <img src={ac3} alt="dotnet" />
                        </div>
                        <div className="pastwork__wrap--row--itembox--hoverbox">
                            <h3>AC 3</h3>
                            <p>Wordpress, Woocommerce, HTML5/CSS</p>
                            <a href="http://sensolution.wpengine.com/" target="_blank" rel="noopener noreferrer">
                                <span>Visit Website</span>
                            </a>
                        </div>
                    </div>
                    <div className="pastwork__wrap--row--itembox">
                        <div className="pastwork__wrap--row--itembox--imgbox">
                            <img src={solution} alt="dotnet" />
                        </div>
                        <div className="pastwork__wrap--row--itembox--hoverbox">
                            <h3>Solution Appliance</h3>
                            <p>Wordpress, HTML5/CSS</p>
                            <a href="https://solutionappliance.ca/" target="_blank" rel="noopener noreferrer">
                                <span>Visit Website</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pastwork__wrap--row">
                    <div className="pastwork__wrap--row--itembox">
                        <div className="pastwork__wrap--row--itembox--imgbox">
                            <img src={royal} alt="dotnet" />
                        </div>
                        <div className="pastwork__wrap--row--itembox--hoverbox">
                            <h3>Royal Printers</h3>
                            <p>Wordpress, HTML5/CSS</p>
                            <a href="https://royalprinters.com/" target="_blank" rel="noopener noreferrer">
                                <span>Visit Website</span>
                            </a>
                        </div>
                    </div>
                    <div className="pastwork__wrap--row--itembox">
                        <div className="pastwork__wrap--row--itembox--imgbox">
                            <img src={goldenrug} alt="dotnet" />
                        </div>
                        <div className="pastwork__wrap--row--itembox--hoverbox">
                            <h3>Golden Rug</h3>
                            <p>Wordpress, Woocommerce, HTML5/CSS</p>
                            <a href="http://goldenrughome.wpengine.com/" target="_blank" rel="noopener noreferrer">
                                <span>Visit Website</span>
                            </a>
                        </div>
                    </div>
                    <div className="pastwork__wrap--row--itembox">
                        <div className="pastwork__wrap--row--itembox--imgbox">
                            <img src={deficiency} alt="dotnet" />
                        </div>
                        <div className="pastwork__wrap--row--itembox--hoverbox">
                            <h3>Deficiency Group</h3>
                            <p>Wordpress, HTML5/CSS</p>
                            <a href="https://deficiencygroup.com/"target="_blank" rel="noopener noreferrer">
                                <span>Visit Website</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pastwork;