import React from "react";

export default function SideBar() {
  return (
    <section className="center-all  sidebar border">
      <details>
        <summary>General Questions</summary>
        <ul>
          <li>What did you learn yesterday/this week?</li>
          <li>What excites or interests you about coding?</li>
          <li>What is a recent technical challenge you experienced and how did you solve it?</li>
          <li>
            When building a new web site or maintaining one, can you explain some techniques you
            have used to increase performance?
          </li>
          <li>Can you describe some SEO best practices or techniques you have used lately?</li>
          <li>
            Can you explain any common techniques or recent issues solved in regards to front-end
            security?
          </li>
          <li>
            What actions have you personally taken on recent projects to increase maintainability of
            your code?
          </li>
          <li>Talk about your preferred development environment.</li>
          <li>Which version control systems are you familiar with?</li>
          <li>Can you describe your workflow when you create a web page?</li>
          <li>
            If you have 5 different stylesheets, how would you best integrate them into the site?
          </li>
          <li>
            Can you describe the difference between progressive enhancement and graceful
            degradation?
          </li>
          <li>How would you optimize a website’s assets/resources?</li>
          <li>
            How many resources will a browser download from a given domain at a time?
            <ul>
              <li>What are the exceptions?</li>
            </ul>
          </li>
          <li>Name 3 ways to decrease page load (perceived or actual load time).</li>
          <li>
            If you jumped on a project and they used tabs and you used spaces, what would you do?
          </li>
          <li>Describe how you would create a simple slideshow page.</li>
          <li>If you could master one technology this year, what would it be?</li>
          <li>Explain the importance of standards and standards bodies.</li>
          <li>What is Flash of Unstyled Content? How do you avoid FOUC?</li>
          <li>Explain what ARIA and screenreaders are, and how to make a website accessible.</li>
          <li>
            Explain some of the pros and cons for CSS animations versus JavaScript animations.
          </li>
          <li>What does CORS stand for and what issue does it address?</li>
          <li>How did you handle a disagreement with your boss or your collaborator?</li>
          <li>
            What resources do you use to learn about the latest in front end development and design?
          </li>
          <li>What skills are needed to be a good front-end developer?</li>
          <li>What role do you see yourself?</li>
          <li>Explain the difference between cookies, session storage, and local storage?</li>
        </ul>
      </details>
    </section>
  );
}
