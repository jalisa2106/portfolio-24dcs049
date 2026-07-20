import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';

const Home = ({ studentName, headerTheme, mySkills }) => {
  return (
    <>
      <Header name={studentName} themeColor={headerTheme} />
      <About />
      <Skills skillList={mySkills} />
    </>
  );
};

export default Home;
