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
                        <p>Find information about :</p>
                        <ul>
                            <li>Adopting a pet</li> 
                            <li>Finding a lost pet</li>
                            <li>How to license your dog or horse</li>
                            <li>Animal vaccinations</li>
                            <li>Spay & neuter information</li> 
                            <li>Microchipping</li> 
                            <li>How to file a barking dog</li> 
                            <li>Definitions of animal cruelty and how to report it</li>
                            <li>Dangerous animal complaint</li> 
                            <li>What to do if you find a stray animal</li> 
                            <li>How to arrange for a dead animal to be picked up</li>
                            <li>Permit information</li> 
                        </ul>
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
                </div>
                <Footer />
            </div>
        )
    }
}

export default Adopt;