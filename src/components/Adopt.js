import React, { Component } from 'react';
import Animals from './Animals';
import Footer from './Footer';
import '../styles/App.css';
import '../styles/Adopt.css';

class Adopt extends Component {
    render() {
        return (
            <div>
                <div className="component">
                    <div className="adopt__info">
                        <h1>I want a pet </h1>
                        <p>
                        The Los Angeles Department of Animal Services offers a wide range of services that fulfill its mission to <b>“Promote and Protect the Health, Safety and Welfare of Animals and People in the City of Los Angeles.”</b>
                        </p>
                        <p>As the needs of the community grow, so do our services. Please check back often to see what new services and information that the Department is offering!
                        </p>
                    </div>
                    <div className="animals">
                        <Animals/>
                    </div> 
                    <div className="adopt__info">
                        <div>
                            <h1>Adoption fees and policies </h1>
                            <p>
                            Just fill out the adoption form at the Animal Shelter, provide a valid form of Image of bunnygovernment-issued identification with photo (i.e., driver’s license), and pay the adoption fee. 
                            </p>
                            <p>
                            The maximum cost for a Los Angeles City resident to adopt a dog is $122, the maximum cost to adopt a cat is $76 and the maximum cost to adopt a rabbit is $71.
                            </p>
                            <p>
                            Adoption fees include vaccinations, spaying/neutering and microchipping for dogs, cats and rabbits; and the first year City of LA license fee for dogs.
                            </p>
                            The Animal Shelters accept payment by cash, check, or credit card (name on credit card must match the name on the photo identification).
                            <p>
                            If several people are interested in adopting the same animal, under the Los Angeles Municipal Code, we must use a fair, competitive process for people to bid on the pet. We use a Silent Auction for that process. You can find the rules here in <a className="adopt-pdf-link" href="http://www.laanimalservices.com/wp-content/uploads/2011/06/LAAS-Sealed-Bid-Instructions-ENG.pdf" target="_blank">English</a> or <a className="adopt-pdf-link" href="http://www.laanimalservices.com/wp-content/uploads/2011/06/LAAS-Sealed-Bid-Instructions-Span.pdf" target="_blank">Spanish</a>.
                            </p>
                            <p>
                            LA Animal Services has a great selection of pets in all sizes, ages, and breeds, just waiting for a new home with you.  
                            </p>
                        </div>
                        <div>
                            <h3>Regular Adoption Fees:</h3>
                            <p>Dogs: $102.00/$122.00 (with license for City residents)</p>
                            <p>Cats: $76.00</p>
                            <p>Rabbits: $71.00</p>
                        </div>
                        <div>
                            <h3>Special Discounts:</h3>
                            <p>Best Buddies (bonded pairs or groups): $63.50 or $83.50 with license for the second dog and $50.50 for the second cat (animals are in a bonded pair or group.)
                            </p>
                            <p>
                            Senior for Seniors:	$63.50 or $83.50 with license for dogs and $50.50 for cats (Discount is valid on pets 7 years and older for adopters 62 years and older)
                            </p>
                            <p>
                            10 days or more pets: $63.50 or $83.50 with license for dogs available for adoption 10 days or more and $50.50 for cats available for adoption 10 days or more
                            </p>
                        </div>
                    </div>
                    <div className="adopt__seniors">
                        <h1>Seniors</h1>
                        <h3>Seniors for seniors</h3>
                        <p>
                        LA Animal Services Seniors for Seniors program matches senior companion animals (seven years and older) from Los Angeles Animal Shelters with senior adults (62 years and older). Senior adopters receive 50% off the adoption fee which includes free microchipping.
                        </p>
                        <p> See adoption fees</p>
                        <p>
                        The program is available at each of the City’s Animal Shelters and at mobile adoption sites.
                        </p>
                        <p>
                        Some seniors (62 years and older) living in the City of Los Angeles may alsoSenior with dog qualify to receive a $10.00 dog license.
                        </p> 
                        <p>Please bring your low income/lifeline DWP bill to qualify.
                        </p>
                        <p>For more information about $10.00 dog licenses for seniors, click here, or call the Department of Animal Services Licensing Division at 213-482-9550.
                        </p>
                        <h4><a href="http://www.laanimalservices.com/wp-content/uploads/2011/06/10-Health-Reasons-Why-companion-animals-Are-Great-For-Seniors.pdf" target="_blank">10 Health Reasons Why companion animals Are Great For Seniors</a></h4>
                        <h3>Discounted dog licence</h3>
                        <p>
                        Qualifications for a $10.00 Dog License:
                        </p>
                        <p>
                        In order to qualify for a $10.00 dog license, the applicant must either be 62 years of age or older, or disabled, and meet low income requirements. 
                        </p>
                        <p>For either seniors or the disabled, the following must be submitted</p>
                        <ul>
                            <li>A spay or neuter certificate or evidence from a veterinarian that the dog is incapable of breeding, or a signed statement agreeing to have the dog spay or neuter within 90 days.</li>
                            <li>A current rabies vaccination certificate for the dog.</li>
                            <li>Low Income Benefit Application for All – English, Spanish</li>
                        </ul>
                        <p>
                        A disabled individual may qualify for one $10.00 dog license, pursuant to Los Angeles Municipal Code Section 53.15 (f). </p>
                        <p>To qualify, the disabled individual must provide to the Department of Animal Services a signed statement from a licensed physician certifying that he/she is disabled and meet low income requirements. 
                        </p>
                        <p>Per the Municipal Code: ”An individual shall be considered disabled if he or she is unable to engage in any substantial, gainful activity by reason of a medically determinable physical or mental impairment, which can be expected to result in death or to be of long, continued and indefinite duration.”
                        </p>
                        <p>
                        Please submit the requested information and Low Income Benefit Application to:</p>
                        <p>
                        Attn: Discount Dog License Application
                        Department of Animal Services
                        221 N. Figueroa Street
                        6th Floor, Suite 600
                        Los Angeles, CA 90012
                        </p>
                        <p>
                        For more information about $10.00 dog license for seniors or the disabled, call the Department of Animal Services Licensing Division at 213-482-9550.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Adopt;