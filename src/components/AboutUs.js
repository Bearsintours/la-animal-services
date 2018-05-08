import React, { Component } from 'react';
import Footer from './Footer';
import '../styles/App.css';
import '../styles/AboutUs.css';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="component">
                    <div className="about-us">
                        <h1>About us</h1>
                        <h3>Our Mission</h3>
                        <p>To promote and protect the health, safety and welfare of animals and people.</p>
                        
                        <h3>Our Vision</h3>
                        <p>We envision the day when every pet born has a good home and is cared for all its life, and no person is ever endangered by an animal.</p>
                        
                        <h3>Our Values</h3>
                        <p>We value each employee, volunteer and partner contributing to the professional delivery of excellent customer service and the humane treatment of animals, in an atmosphere of open, honest communication, predicated on our respect for and trust in each other. Our values depict the highest standards of:</p>
                        
                        <ul className="about-us__values">
                            <li><b>Respect</b> – We pledge to treat each person thoughtfully, politely and kindly regardless of rank or relationship.</li>
                        
                            <li><b>Trust</b> – We strive to conduct ourselves in an honest, ethical, professional and respectful manner in everything we think, do and say, inspiring confidence in our abilities and our honesty.</li>
                        
                            <li><b>Open and Honest Communication</b> - We commit to complete transparency in all forms of communication and to carefully listen to the communications of one another.</li>
                        
                            <li><b>Customer Service</b> – We pledge to provide our best service to every customer, whether an internal or an external customer, every time.</li>
                        
                            <li><b>Humane Treatment</b> – At all times and in all places, we vow to care compassionately, advocate actively and work tirelessly to insure the best possible environment for all animals.</li>
                        
                            <li><b>Our Service Theme</b> - Creating a Humane LA</li>
                        </ul>
                        <h3>Organization</h3>
                        <p>The Los Angeles Animal Services Department was formed by ordinance in 1947. With the General Manager as executive, the Department is under the control of a Board of Commissioners, with five members appointed by the Mayor, and by the City Council of Los Angeles.</p>
                        <p>Brenda F. Barnette was appointed General Manager of Los Angeles Animal Services after a national search and she began her service on August 16, 2010.</p>
                    </div>
                    <div className="board">
                        <h1> The Board of Animal Services </h1>
                        <p>Pursuant to the Los Angeles City Charter and the Los Angeles Administrative Code, the Board of Animal Services Commissioners serves as the head of the Department of Animal Services. The Board is authorized to supervise, control, regulate, and manage the Department; make and enforce all rules and regulations necessary to exercise the powers conferred upon the Department by the Los Angeles City Charter; and provide instructions to the Department’s General Manager. The Board also must review and approve contracts with a duration exceeding one year and a value greater than $20,000.</p>
                        <p>As provided in the City Charter, the Board’s ability to direct staff is limited to providing direction to the General Manager. Commissioners only have authority when they act as a Board and not when they act individually. Accordingly, the Board is primarily concerned with making policy decisions, and the General Manager, as the chief administrative officer of the Department, manages the day-to-day department activities and makes and enforces rules and regulations necessary to exercise the powers conferred upon the Department.</p>
                        <p>Commissioners are appointed by the Mayor for terms of five years, and are confirmed by the City Council.</p>
                        <h3>Board meetings</h3>
                        <p>The Board of Animal Services Commission meets regularly every second (2nd) and fourth (4th) Tuesday of each month at 9:00 A.M. Regular meetings are held at City Hall, 200 North Spring Street, Room 1060, Los Angeles, CA 90012. Meetings are open to the public. The meeting schedule may vary due to holidays. Occasionally meetings may be held in the field in the early evening.</p>
                        <a href="http://www.laanimalservices.com/wp-content/uploads/2017/12/2018-Board-Meeting-Schedule.pdf" target="_blank"><h4>2018 Board Meeting Schedule</h4></a>
                    </div>
                    <div className="rescue-team">
                        <h1>Spesialized Mobile Animal Rescue Team</h1>
                        <img src="http://www.laanimalservices.com/wp-content/uploads/2011/06/smart_team-300x272.jpg"></img>
                        <p>In February 2012, the Department consolidated its Small Animal rescue Team (SmART), Department Air Rescue Team (DART), Wildlife Program and Permit Section into one Special operations Unit. The Department further unified the Small Animal rescue Team (SmART) and Department Air rescue Team (Large Animal Rescue Team – DART) into one join venture now called, the “Specialized Mobile Animal Rescue Team” (SMART). This reorganization resulted in leveraging staff to do more than one function, as staff was cross trained to support each other. The end result is more staff are available for emergency call outs and Departmental field support. Most importantly, the Department is able to provide increased quality and improved services to the public while maximizing safety and support to our personnel.</p>
                        <p>The SMART team has a 100% save rate since they began using their specialized training, experience and knowledge for rescuing small and large animals in distress. The Special Operations Unit, including the SMART team, is under the command of Director of Field Operations, Mark Salazar and being led by Acting Lt. Armando Naverrete. The SMART team consists of ten LA Animal Services Officers and one Registered Veterinary Technician.</p>
                    </div>
                    <div className="careers">
                        <h1>Careers</h1>
                        <p>Do You: </p>
                        <ul>
                            <li>Love and enjoy working with animals</li>
                            <li>Like meeting people</li>
                            <li>Enjoy helping people with family planning(adding your pet to your family tree)</li>
                            <li>Want to stop animal abuse, cruelty and neglect</li>
                            <li>Believe in community outreach to stop pet overpopulation</li>
                            <li>Support pet adoption, and spaying & neutering</li>
                            <li>Are a team player, friendly, outgoing and responsible</li>
                        </ul>
                        <h3>Apply Today!</h3>
                        <a href="http://per.lacity.org/"><h4>Visit City of Los Angeles Personnel Department.</h4></a>
                        
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutUs;