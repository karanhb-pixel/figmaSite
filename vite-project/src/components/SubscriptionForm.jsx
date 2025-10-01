import React from 'react';

const SubscriptionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscription attempted!");
  };

  return (
    <li className="footer-link-item">
      <form onSubmit={handleSubmit} className="subscription-form" aria-label="Email Subscription">
        <div className="input-with-button">
          <label htmlFor="email-subscribe" className="sr-only">Enter your email</label>
          <input
            type="email"
            id="email-subscribe"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn dark">
            Subscribe
          </button>
        </div>
      </form>
    </li>
  );
};

export default SubscriptionForm;