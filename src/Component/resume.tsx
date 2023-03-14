import React from "react";
import "../Css/resume.css";
import {AiOutlineMail,AiOutlineHome,AiFillContacts} from "react-icons/ai";
import {GiStairsGoal,GiSkills} from "react-icons/gi";
import {BsPhone,BsBriefcaseFill} from "react-icons/bs";
import {FaUserGraduate} from "react-icons/fa";
import {TiTick} from "react-icons/ti";
import {AiFillStar} from "react-icons/ai";
import {CiLinkedin} from "react-icons/ci";
import {FiGithub} from "react-icons/fi";



const resume = () => {
  return (
    <>
      <br />
      <br />
      <div className="mycontainer">
        <div className="topcontainer">
          <div className="mydiv">
            <h1 className="myh1">MARGARET THOMASON</h1>
            <h3>Administrative Assistant</h3>
          </div>
        </div>

        <div className="bottomcontainer">
          <div className="leftcontainer">
            <div className="mydiv">
              <h2><GiStairsGoal/> CAREER OBJECTIVE</h2>
              <p className="mylist">
                Administrative Assistant with 6+ years of experience organizing
                presentations, preparing facility reports, and maintaining the
                utmost confidentiality. Possess a B.A. in History and expertise
                in Microsoft Excel. Looking to leverage my knowledge and
                experience into a role as Project Manager.
              </p>
            </div>

            <div className="mydiv2">
              <h2><BsBriefcaseFill/> EXPERIENCE</h2>
              <h3><AiFillStar/>  ADMINISTRATIVE ASSISTANT </h3>
              <p className="p1">
                Redford & Sons, Boston, MA / September 2018 - Present
              </p>
              <ol>
                <li>
                  Schedule and coordinate meetings, appointments, and travel
                  arrangements for supervisors and managers.
                </li>
                <br />
                <li>
                  Trained 2 administrative assistants during a period of company
                  expansion to ensure attention to detail and adherence to
                  company policy.
                </li>
                <br />
                <li>
                  Developed new filing and organizational practices, saving the
                  company $3,000 per year in contracted labor expenses.
                </li>
                <br />
                <li>
                  Maintain utmost discretion when dealing with sensitive topics.
                </li>
                <br />
                <li>
                  Manage travel and expense reports for department team members.
                </li>
              </ol>
              <br />
              <h3><AiFillStar/>  SECRETARY </h3>
              <p className="p1">
                Bright Spot LTD, Boston, MA / June 2015 - August 2018
              </p>
              <ol>
                <li>
                  Type documents such as correspondence, drafts, memos, and
                  emails, and prepared 3 reports weekly for management.
                </li>
                <br />
                <li>
                  Opened, sorted, and distributed incoming messages and
                  correspondence.
                </li>
                <br />
                <li>
                  Purchased and maintained office supply inventories, and always
                  careful to adhere to budgeting practices.
                </li>
                <br />
                <li>
                  Greeted visitors and determined to whom and when they could
                  speak with specific individuals.
                </li>
                <br />
                <li>
                  Recorded, transcribed, and distributed minutes of meetings.
                </li>
              </ol>
            </div>
          </div>

          {/* right container */}
          <div className="rightcontainer">
            <div className="mydiv3">
                <h2><AiFillContacts/> CONTACT</h2>
                <p><AiOutlineMail/> Email :  youremail@gmail.com</p>
                <p><BsPhone/> Phone :  9999999999</p>
                <p><AiOutlineHome/> Address: 4397 Aaron Smith Drive Harrisburg, PA 17101</p>
                <p><CiLinkedin/> Linkedin: linkedin.com/in/yourproﬁle</p>
                <p> <FiGithub/> github.com/Username</p>
            </div>
            <div className="mydiv4">
                <h2><GiSkills/> SOFT SKILLS</h2>
                <p><TiTick/> Adaptability</p>
                <p><TiTick/> Collaboration</p>
                <p><TiTick/> Strong Work Ethic</p>
                <p><TiTick/> Problem Solving</p>
            </div>
            <div className="mydiv5">
                <h2><GiSkills/> HARD SKILLS</h2>
                <p><TiTick/> Microsoft Office</p>
                <p><TiTick/> 120 WPM Typist</p>
                <p><TiTick/> Fluent Spanish</p>
                <p><TiTick/> Quickbooks</p>
            </div>
            <div className="mydiv6">
                <h2><FaUserGraduate/> EDUCATION</h2>
                <h4><TiTick/> DEGREE NAME / MAJOR</h4>
                <p>University, Location 2011 - 2015</p>
                <h4><TiTick/> DEGREE NAME / MAJOR</h4>
                <p>University, Location 2007 - 2011</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
