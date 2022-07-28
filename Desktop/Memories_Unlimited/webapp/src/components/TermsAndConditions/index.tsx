import React from "react";
import Accordion  from './Accordion';
import Navbar from "../Navbar";
import Footer from "../Footer";
import './index.css';

function TermsAndConditions(){
    const accordionItems = [
        {
            title: "Terms & Conditions",
        content: "Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites. Vague language and lengthy sentences used in the terms of use have brought concerns on customer privacy and raised public awareness in many ways.",

        },
        {
            title: "Disclaimer",
        content: "A disclaimer is generally any statement intended to specify or delimit the scope of rights and obligations that may be exercised and enforced by parties in a legally recognized relationship. In contrast to other terms for legally operative language, the term disclaimer usually implies situations that involve some level of uncertainty, waiver, or risk. A disclaimer may specify mutually agreed and privately arranged terms and conditions as part of a contract; or may specify warnings or expectations to the general public (or some other class of persons) in order to fulfill a duty of care owed to prevent unreasonable risk of harm or injury. Some disclaimers are intended to limit exposure to damages after a harm or injury has already been suffered. Additionally, some kinds of disclaimers may represent a voluntary waiver of a right or obligation that may be owed to the disclaimant",

        },
        {
            title: "Cancellation Policy",
        content: "The terms hereof shall constitute Interweave Consulting Private Limiteds (“Company”) cancellation and refund policy in relation to the Solutions rendered on the Website (“Cancellation and Refund Policy”). Capitalized terms not defined herein shall have the meaning ascribed to them in the Terms of Use. Please note that there may be certain orders that we are unable to accept and must cancel. We reserve the right, at our sole discretion, to refuse or cancel any order for any reason, without any claims or liability to pay finance charges or interest on the amount. Some situations that may result in your order being canceled include but are not limited to inaccuracies or errors in Solutions or pricing information, technical or technological problems or problems identified in relation to credit / debit fraud. We may also require additional verifications or information before accepting any order. We will contact you if all or any portion of your order is canceled or if additional information is required to accept your order. If your order is cancelled by the Company after your credit / debit card has been charged, the said amount will be refunded to that credit / debit card account."
 
        },
        {
            title: "Refund Rules",
        content: "Any person, except the persons covered by notification issued under section 55, claiming refund of any tax, interest, penalty, fees or any other amount paid by him, may file an application in FORM GST RFD-01 electronically through the Common Portal either directly or through a Facilitation Centre notified by the Commissioner."
        },
    ];
    

    
    return(
        <div>
            <Navbar/>
        <Accordion items={accordionItems}/>
            <Footer/>
        </div>
    );
}

export default TermsAndConditions;
