import React from 'react'

function Jdform() {
  return (
    <div className="container">
        <form>
          <h2 className="text-center"><b>Job Description Form</b></h2><br />
        <div className="row jumbotron">
            <div className="col-sm-6 form-group">
              <label for="name-f" ><b>Name of Company</b></label>
                <input type="text" className="form-control" name="fname" id="name-f" placeholder="ABC" required/>
            </div>
            <div className="col-sm-6 form-group">
                <label for="name-l"><b>Company URL</b></label>
                <input type="text" className="form-control" name="lname" id="name-l" placeholder="www.abc.com" required/>
            </div>
            <div className="col-sm-6 py-3 form-group">
                <label for="email"><b>Description of Company and/or
Division</b></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="ABC start up. We are an accredited partner to Automation
Anywhere – one of the leading RPA firms in the world today." required></textarea>
            </div>
          
            <div className="col-sm-6 py-3 form-group">
                <label for="address-1"><b>Work Mode</b></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Work from Home / Office, due to Covid-19, Work from Home but once situation improves then work from office.
" required></textarea>
            </div>
            <div className="col-sm-6 form-group">
                <label for="address-2"><b>Do you give consent / right to use Co.
Name & Logo</b></label>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" required/> Yes  
                <label className="form-check-label" for="radio1"></label>
              </div>
              <div className="form-check">
  <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>No
  <label className="form-check-label" for="radio2"></label>
</div>
            </div>
        
            <div className="col-sm-4 form-group">
                <label for="State"><b>Internship Role / Job Title</b></label>
                <input type="address" className="form-control" name="State" id="State" placeholder="Software Intern" required/>
            </div>
            <div className="col-sm-2 form-group">
                <label for="zip"><b>Job Location</b></label>
                <input type="zip" className="form-control" name="Zip" id="zip" placeholder="Pune" required/>
            </div>
           
          <div className="col-sm-6 py-3 form-group">
                <label for="ctc"><b>Stipend & CTC Offered (Post Internship)</b></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="20K pm stipend during internship. We will also take care of commute and food, for office as required." required></textarea>
            </div>
          
            <div className="col-sm-6 py-3 form-group">
                <label for="Date"><b>Company Selection Date</b></label>
                <input type="Date" name="dob" className="form-control" id="Date" placeholder="" required/>
            </div>
            <div className="col-sm-12 form-group">
                <label for="selection"><b>Selection Process / Mode of Selection</b></label>
                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder=" CV Shortlisting
 Virtual / Online Written Test
 Virtual Technical Interview
 HR / Personal Interview
 Virtual Assignment" required></textarea>
            </div>
         
           
          
          
            <div className="col-sm-6 py-3 form-group">
                <label for="Edu"><b>Educational Qualification</b></label>
                <select id="Qualification" className="form-control browser-default custom-select">
                <option value="cse">B.Tech. in Computer Science</option>
                <option value="ece">B.Tech. in Electronics and Communications</option>
                  <option value="ece">B.Tech. in Biotechnology</option>
                <option value="imba">iMBA</option>
            </select>
            </div>
          
         
            <div className="col-sm-4 py-3 form-group">
                <label for="year"><b>Year of Graduation</b></label>
                <input type="number" name="cnf-password" className="form-control" id="pass2" placeholder="2023" required/>
            </div>
          
          
          <div className="col-sm-2 py-3 form-group">
                <label for="zip"><b>No. of Positions</b></label>
                <input type="number" className="form-control" name="Zip" id="zip" placeholder="" required/>
            </div>
          
          
          <div className="col-sm-6 form-group">
                <label for="JD"><b>Job Descriptions</b></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder=" The candidate must have excellent spoken English and
presentation skills
 Must know development and coding
 Should be open to travel" required></textarea>
            </div>
          
            <div className="col-sm-6 form-group">
                <label for="skills"><b>Other Important Skills</b></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Self driven, motivated, excellent communication & interpersonal skills
Independent player. Presentation skills for client facing trainings.
Ability to build relationships.
" required></textarea>
            </div>
          
          
          
          <div className="col-sm-12 py-3 form-group">
                <label for="bond"><b>Service Bond / Agreement / Contract
(Specify details If any)</b></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="" required></textarea>
            </div>
          
          
            <div className="col-sm-12">
                <label for="chb" className="form-check-label">&nbsp;</label>
            </div>

              
            <div className="col-sm-12 form-group mb-0">
               <button className="btn btn-primary float-right" style="background-color: #81181d; border-color: #81181d;">Submit</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Jdform