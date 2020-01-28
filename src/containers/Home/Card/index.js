import React from 'react';

const Card = () => (
  <div>
    <h2>Name Lastname</h2>
    <div>
      <picture>
        <img
          src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740762.jpg"
          alt="User"
        />
      </picture>
      <div>
        <h3>Question title</h3>
        <p>...a..</p>
        <button type="button">View pull</button>
      </div>
    </div>
  </div>
);

export default Card;
