import React from 'react';

function Education() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        {/* Left Column */}
        <div className='col-6'>
          <img 
            src='media/images/education.svg' 
            style={{ width: "70%" }} 
            alt="Education" 
          />
        </div>

        {/* Right Column */}
        <div className='col-6'>
          <h1 className='mb-3 fs-2'>Free and Open Market Education</h1>
          <p>
            Varsity, the largest online stock market education book in the world, 
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>

          <p className='mt-5'>
            Trading Q&A, the most active trading and investment community in India 
            for all your market-related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Trading Q&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
