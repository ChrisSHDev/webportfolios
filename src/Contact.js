import React from 'react';
import githubicon from './assets/image/25231.svg';
import linkedinicon from './assets/image/61109.png';
import emailiconblack from './assets/image/email-flat-icon-by-vexels.png';
const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__wrap container">
                <div className="contact__wrap--col">
                    <div className="contact__wrap--col--icon-img">
                        <img src={githubicon} alt="github" />
                    </div>
                    <a href="https://github.com/ChrisSHDev"><h5>https://github.com/ChrisSHDev</h5></a>
                </div>
                <div className="contact__wrap--col">
                    <div className="contact__wrap--col--icon-img">
                        <img src={linkedinicon} alt="github" />
                    </div>
                    <a href="https://www.linkedin.com/in/chris0320/"><h5>https://www.linkedin.com/in/chris0320/</h5></a>
                </div>
                <div className="contact__wrap--col">
                    <div className="contact__wrap--col--icon-img">
                        <img src={emailiconblack} alt="github" />
                    </div>
                    <a href="mailto:sam4414@gmail.com"><h5>sam4414@gmail.com</h5></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;