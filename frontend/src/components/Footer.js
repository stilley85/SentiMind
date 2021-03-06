import React from 'react';
import reactLogo from '../images/react-original.svg';
import pythonLogo from '../images/python-original.svg';
import dockerLogo from '../images/docker-original.svg';
import amazonLogo from '../images/amazonwebservices-original.svg';
import githubLogo from '../images/github-original.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <p id="sentibot-info">
        <em>
          * SentiMind analyses and visualises the sentiment (frequency and
          polarity) of the latest 100 tweets using SentiBot, an algorithm
          trained using machine learning.
        </em>
      </p>

      <p id="tech-stack">
        Powered by{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://reactjs.org/"
        >
          <img
            className="logos"
            alt="react logo"
            width="40"
            height="40"
            src={reactLogo}
          />
        </a>{' '}
        and{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.python.org/"
        >
          <img
            className="logos"
            alt="python logo"
            width="40"
            height="40"
            src={pythonLogo}
          />
        </a>{' '}
        Deployed with{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.docker.com/"
        >
          <img
            className="logos"
            alt="python logo"
            width="40"
            height="40"
            src={dockerLogo}
          />
        </a>{' '}
        and{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://aws.amazon.com/"
        >
          <img
            className="logos"
            alt="python logo"
            width="40"
            height="40"
            src={amazonLogo}
          />
        </a>{' '}
        Check our{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/marcusfgardiner/SentiMind"
        >
          <img
            className="logos"
            alt="python logo"
            width="40"
            height="40"
            src={githubLogo}
          />
        </a>{' '}
        for more info.
      </p>
    </footer>
  );
};

export default Footer;
