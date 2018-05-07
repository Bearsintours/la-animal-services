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
                    <div className="adopt">
                        <h1>I want a pet </h1>
<p>The Los Angeles Department of Animal Services offers a wide range of services that fulfill its mission to <b>“Promote and Protect the Health, Safety and Welfare of Animals and People in the City of Los Angeles.”</b></p>
<p>As the needs of the community grow, so do our services. Please check back often to see what new services and information that the Department is offering!</p>
                    </div>
                    <div className="adopt__pets container">
                        <div className="item">
                            <h2>Dogs</h2>
                            <a href="http://www.laanimalservices.com/looking-for-a-dog/" target="_blank">
                                <img className="adopt__pets__img" src="https://images.unsplash.com/photo-1506499422601-ecc792cf898e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96c8170d700aa5a914b043ecc28dc8f6&auto=format&fit=crop&w=500&q=60"></img>
                            </a>
                        </div>
                        <div className="item">
                            <h2>Cats</h2>
                            <a href="http://www.laanimalservices.com/looking-for-a-cat/" target="_blank">
                                <img className="adopt__pets__img" src="https://images.unsplash.com/photo-1479065476818-424362c3a854?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=290c91744d9c81d3f7fb1f7a5bdc96ee&auto=format&fit=crop&w=500&q=60"></img>
                            </a>
                        </div>
                        <div className="item">
                            <h2>Something else</h2>
                            <a href="http://www.laanimalservices.com/looking-for-other/" target="_blank">
                                <img className="adopt__pets__img" src="https://images.unsplash.com/photo-1497469074122-b9cc3bb29f4b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=743cb8d60febe71d30fb7af69d9f5b38&auto=format&fit=crop&w=500&q=60"></img>
                            </a>
                        </div>
                    </div>
                    <div className="adopt__info">
                        <div className="adopt__info__fees">
                            <h1>Adoption fees</h1>
<p>Just fill out the adoption form at the Animal Shelter, provide a valid form of Image of bunnygovernment-issued identification with photo (i.e., driver’s license), and pay the adoption fee. </p>

<p>The maximum cost for a Los Angeles City resident to adopt a dog is $122, the maximum cost to adopt a cat is $76 and the maximum cost to adopt a rabbit is $71.</p>

<p>Adoption fees include vaccinations, spaying/neutering and microchipping for dogs, cats and rabbits; and the first year City of LA license fee for dogs.</p>

<p>The Animal Shelters accept payment by cash, check, or credit card (name on credit card must match the name on the photo identification).</p>

<p>If several people are interested in adopting the same animal, under the Los Angeles Municipal Code, we must use a fair, competitive process for people to bid on the pet. We use a Silent Auction for that process. You can find the rules here in <a className="adopt-pdf-link" href="http://www.laanimalservices.com/wp-content/uploads/2011/06/LAAS-Sealed-Bid-Instructions-ENG.pdf" target="_blank">English</a> or <a className="adopt-pdf-link" href="http://www.laanimalservices.com/wp-content/uploads/2011/06/LAAS-Sealed-Bid-Instructions-Span.pdf" target="_blank">Spanish</a>.
</p>

<p>LA Animal Services has a great selection of pets in all sizes, ages, and breeds, just waiting for a new home with you.</p> 

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
                    
                        <div className="adopt__info__policies">
                            <h1>Adoption policies</h1>
                            <h3>Spay/Neuter Surgery</h3>
<p>All dogs and cats, eight weeks of age or older, adopted from the City will be surgically sterilized prior to their release to their new owner/guardian. A private, California-licensed veterinarian will perform the surgery. The sterilization deposit included in the adoption fee will be applied towards the cost of the surgery. The veterinarian will give your dog or cat a physical examination prior to surgery to determine if the animal is fit for surgery and will contact you with instructions if it is determined that your dog or cat should not have surgery at this time.</p>

<p>Please be aware that no surgical procedure is without risks. The veterinarian or a member of his/her staff will discuss any additional fees to be paid by the adopter for estrus (heat), pregnancy, obesity, retained testicles, geriatric patients or other medical concerns with you prior to surgery.</p>

<p>If your adopted animal becomes unsuited for sterilization surgery due to illness or injury prior to its removal from the shelter, you will be notified. You have the option of taking your dog or cat to a private veterinarian for treatment or selecting another animal or requesting a refund of the adoption fees, excluding pound, microchip, and optional medical fees. If you choose to continue with the adoption of your selected “at risk” dog or cat, you must immediately transport your dog or cat to a private veterinary facility and assume all financial responsibility for the animal’s treatment, diagnostics, and/or hospitalization.</p>

<p>Rabbits are automatically spayed/neutered prior to adoption.</p>

                            <h3>Microchip Identification</h3>

<p>All cats, dogs and rabbits adopted from a LA Animal Services Shelter that do not already have a microchip, will be implanted with one. The cost of microchipping is a non-refundable $25.00 that is included in the adoption fee.</p>

<p>Microchipping is the safe and professional way to identify an animal. While collars may fall off and identification tags may get lost, a microchip stays with your pet for life. The microchip is less than the size of a grain of rice and is completely harmless. Just like a vaccination, the microchip is injected under the skin of an animal (typically in the scruff of the neck) where it remains safely for life.</p>

<p>All animals admitted to a LA Animal Services Shelter are scanned for a microchip upon arrival. If a microchip is detected, an identification number will appear and we will contact the microchip’s provider for the pet owner’s contact information. After we receive the information, we will reach out to the animal’s guardian so they can be reunited with their lost pet.</p>

                            <h3>Vaccinations</h3>
<p>Generally, puppies and kittens require booster vaccination in three-week intervals. Please follow your veterinarian’s recommended vaccination schedule.</p>

<p>Puppies/dogs receive DHLP-Parvo and Bordetella vaccines.</p>
<p>Kittens/cats receive the first FVRCP vaccination.</p>
<p>Dogs four months + / Cats three months + receive a rabies vaccine. Proof of a current rabies vaccination is required to license your dog. California State law requires that all dogs be inoculated against rabies. Rabies vaccinations for cats are recommended by the Department of Public Health. A rabies license for your cat is voluntary.</p>
<p>Rabbits do not receive vaccinations prior to adoption.</p>

                            <h3>Internal and External Parasites</h3>
<p>Puppies and kittens are automatically de-wormed at the shelter for roundworms and hookworms. Older animals are de-wormed on an as needed basis. Once you have adopted your dog or cat, we advise that you take a sample of your animal’s stool to your veterinarian for a fecal examination and internal parasite control program. Many dogs and cats that come into our shelters bring fleas and ticks into the kennels. Animals that are infested with external parasites are treated with topical medications. We recommend that you consult your veterinarian regarding an external parasite control program.</p>

<p>Please note: certain animal diseases (parasites, fungal infections, bacteria, viruses, etc.) are transmissible to humans. It is imperative that your dog or cat follow a health program prescribed by your veterinarian.</p>

<h3>Medical Information</h3>
<p>If the dog or cat you adopted is currently ill or injured and under treatment, you will receive an Animal Health Awareness Report (Form D-300). This information will provide you with a summary of the treatment your dog or cat has received during its kenneled stay in our animal shelter.</p>

<p>Southern California Veterinary Medical Association (SCVMA) Offers a free medical exam within three (3) working days from the date of adoption</p>

<p>Our dogs and cats usually have no available medical history prior to their admittance to our shelters. Your adoption packet includes a certificate for a free health examination at any participating SCVMA veterinary office. This service is not available for rabbits at this time. The Adoption Receipt must be presented to the veterinarian at the time of examination.</p>

<p>For the name and address of participating veterinarians, please refer to the yellow pages of your telephone directory. Following the selection of a veterinarian, please call that veterinarian for an appointment and confirmation of his/her participation in this program. If your adopted dog or cat is found physically unfit or otherwise unsuitable, you may return the animal for a reselection within 10 days from the date of purchase. You are then provided an opportunity to select another dog or cat within 31 days from the adoption of the first animal. The $28.00 sterilization fee and $25.00 microchip fee must be again paid at the time of reselection.</p>

<p>The sterilization, microchip, and optional parvovirus testing fees are not refundable.</p>

<p>If the adoption fees of your reselected dog or cat are greater than the amount paid for the original, the adopter shall pay the difference. No refund shall be made if the price of the newly adopted animal is less than the amount paid for the original dog or cat.</p>

<h4>* PLEASE BE AWARE THAT ONLY THE EXAMINATION IS FREE OF CHARGE.</h4>

<p>If you choose any further treatment for your newly adopted animal, please remember that any diagnostics, hospitalizations, injections or additional vaccinations must be at your expense.</p>

<p>Your adopted dog or cat may have behavioral problems that may or may not have been evident during its stay with us. These problems may make it unsuitable for human companionship. If you elect to keep the animal, any treatment or training to correct the animal’s behavioral problems is the responsibility of its new owner/guardian.</p>

<p>Additionally, due to the incubation period of certain diseases, it is strongly advised that you keep any newly adopted dog or cat away from and all other animals for a period up to two weeks. Do not take your new dog or cat to any public place for at least a two-week period.</p>

<p>With your agreement to an adoption and signed adoption receipt, you thereby release the City of Los Angeles, its employees and agents from any liability and claim that you have, whether known or unknown, now or in the future, in connection with your adoption, ownership and disposal of any animal adopted from the City of Los Angeles Department of Animal Services.</p>

                        </div>

                        <div className="adopt__info__seniors">
                            <h1>Seniors</h1>
                            <h3>Seniors for seniors</h3>
<p>LA Animal Services Seniors for Seniors program matches senior companion animals (seven years and older) from Los Angeles Animal Shelters with senior adults (62 years and older). Senior adopters receive 50% off the adoption fee which includes free microchipping.</p>

<p> See adoption fees</p>

<p>The program is available at each of the City’s Animal Shelters and at mobile adoption sites.</p>

<p>Some seniors (62 years and older) living in the City of Los Angeles may alsoSenior with dog qualify to receive a $10.00 dog license.</p> 

<p>Please bring your low income/lifeline DWP bill to qualify.</p>

<p>For more information about $10.00 dog licenses for seniors, click here, or call the Department of Animal Services Licensing Division at 213-482-9550.</p>
<a href="http://www.laanimalservices.com/wp-content/uploads/2011/06/10-Health-Reasons-Why-companion-animals-Are-Great-For-Seniors.pdf" target="_blank">
<h4>10 Health Reasons Why companion animals Are Great For Seniors</h4>
</a>
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
<p>A disabled individual may qualify for one $10.00 dog license, pursuant to Los Angeles Municipal Code Section 53.15 (f). </p>

<p>To qualify, the disabled individual must provide to the Department of Animal Services a signed statement from a licensed physician certifying that he/she is disabled and meet low income requirements. </p>

<p>Per the Municipal Code: ”An individual shall be considered disabled if he or she is unable to engage in any substantial, gainful activity by reason of a medically determinable physical or mental impairment, which can be expected to result in death or to be of long, continued and indefinite duration.”</p>

<p>Please submit the requested information and Low Income Benefit Application to:</p>

<p>Attn: Discount Dog License Application
Department of Animal Services
221 N. Figueroa Street
6th Floor, Suite 600
Los Angeles, CA 90012</p>
<p>For more information about $10.00 dog license for seniors or the disabled, call the Department of Animal Services Licensing Division at 213-482-9550.</p>
                        </div>
                        <div className="adopt__companions">
                            <h1>How to introduce companions to each others</h1>
                            <a href="http://www.laanimalservices.com/wp-content/uploads/2012/04/Making-Harmonious-Cat-to-Cat-Introductions.pdf" target="_blank"><h4>Making Harmonious Cat to Cat Introductions</h4></a>
                            <a href="http://www.laanimalservices.com/wp-content/uploads/2012/04/Introducing-a-Dog-to-Other-Dogs.pdf" target="_blank"><h4>Introducing a dog to other dogs</h4></a>
                            <a href="http://www.laanimalservices.com/wp-content/uploads/2012/04/Introducing-Cats-and-Dogs.pdf" target="_blank"><h4>Introducing cats and dogs</h4></a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Adopt;