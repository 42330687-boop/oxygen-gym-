import React from 'react';
import '../assets/Registration.css'
function RegistrationSection({ id, title, plans }) {
  return (
    <section className="registration-section" id={id}>
      <h2 >{title}</h2>
      <div className="registration-container">
        {plans.map((plan, index) => (
          <div className="registration-plan" key={index}>
            <br />
            <h3 className="plan-duration">{plan.duration}</h3>
            <p className="plan-description">{plan.description}</p>
            <br />
            <div className="features-list">
              {plan.includedFeatures.map((feature, featureIndex) => (
                <p key={`included-${featureIndex}`} className="feature-included">
                  &#10004; {feature}
                </p>
              ))}
              {plan.excludedFeatures && plan.excludedFeatures.map((feature, featureIndex) => (
                <p key={`excluded-${featureIndex}`} className="feature-excluded">
                  &#10060; {feature}
                </p>
              ))}
            </div>
            <p className="plan-price">{plan.price}</p>
            <button className="register-btn">
              <a href={plan.link}>Register Now</a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RegistrationSection;