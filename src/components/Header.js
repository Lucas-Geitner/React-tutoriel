import React from 'react';


const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="then">the</span>
        </span>
        day
      </h1>
      <h5 className="tagLine"> <span>{props.tagLine}</span></h5>
    </header>
  );
};


Header.propTypes = {
  tagLine: React.PropTypes.string.isRequired,
};

export default Header;
