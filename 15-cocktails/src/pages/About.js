import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        cd existing_repo git
        <br/>
        remote add origin https://gitlab.com/axuplus/g7-project.git 
        <br/>
        git branch -M main 
        <br/>
        git push -uf origin main
      </p>
    </section>
  );
};

export default About;
