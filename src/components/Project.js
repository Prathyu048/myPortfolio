import React from 'react';

const Project = () => {
  return (
    <div>
      <h1 className='myproj'>Projects</h1>
      <div className='projbg'>
      <div className='projectcon'>
        <div className="projectbox">
          <div className="projectcon">
            <div className="skillimg">
              <img src="ecommerce.png" className="project-icon" alt="E-commerce site" />
            </div>
            <h3 id='ecomcenter'>E-commerce site</h3>
          </div>
        </div>
        <div className="projectbox">
          <div className="projectcon">
            <div className="skillimg">
              <img src="todo.jpg" className="project-icon" alt="Todo App" />
            </div>
            <h3 id='ecomcenter'>Todo App</h3>
          </div>
        </div>
        <div className="projectbox">
          <div className="projectcon">
            <div className="skillimg">
              <img src="News.png" className="project-icon" alt="Todo App" />
            </div>
            <h3 id='ecomcenter'>News Aggregator</h3>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Project;