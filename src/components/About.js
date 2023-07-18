import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <h1 className='my-5'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button bg-dark bg-gradient text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Best Note Taking App
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse bg-secondary bg-gradient text-white" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              If you are looking for a secure place to store all your notes, then look no further as you have arrived at the perfect place. This web application stores your notes securely and does not share your account and password with anyone else. When you login into your account, your notes get displayed and no one else can view your account notes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed bg-dark bg-gradient text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free To Use!
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse bg-secondary bg-gradient text-white" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This web application is does not charge you a single penny and helps you solve all your worries of saving your confidential messages easily. It is completely free to use, which makes it extremely pocket friendly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed bg-dark bg-gradient text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse bg-secondary bg-gradient text-white" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This web application is compatible on all platforms, which means that you can easily access it on your mobile phones as well. There is no hastle for you to accessing it only on your laptops. So, what are you waiting for? Start using this web application rightaway and enjoy writing your content with ease. <br />
              <strong>Happy Content Writing!</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
