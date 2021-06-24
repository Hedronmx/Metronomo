/**
 * Contains upper header including logo and
 * dark mode/light mode toggle button.
 */

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="navbar">
        <div className="logo">
          <FontAwesomeIcon icon={faMusic} />&nbsp;&nbsp;Metronome
        </div>
        <div>
          <button onClick={this.props.toggleTheme}>
            {
              this.props.theme === "dark" ? 
              <><FontAwesomeIcon icon={faSun} />&nbsp;&nbsp;Cambiar a modo blanco</>
              :
              <><FontAwesomeIcon icon={faMoon} />&nbsp;&nbsp;Cambiar a modo negro</>
            }
          </button>
        </div>
      </header>
    );
  }
}
