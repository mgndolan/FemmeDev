import './style/style.css';
import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5 techPractice">
          <div class="col-lg-3 bg-dark options">
            <button className="option" type="button">Strings</button><br/>
            <button className="option" type="button">Arrays</button><br/>
            <button className="option" type="button">Lists</button><br/>
            <button className="option" type="button">Hash Tables</button><br/>
            <button className="option" type="button">Stacks & Queues</button><br/>
            <button className="option" type="button">Trees</button><br/>
            <button className="option" type="button">Graphs</button>
          </div>
          <div class="col-lg-9">
            <h1 class="font-weight-light centered">Data Structures</h1>
            <div className="spacing">
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="alignRight">
              <button className="option" id="next" type="button">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
