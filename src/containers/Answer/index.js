import React from 'react';

const Answer = () => (
  <div>
    <div>
      <h2>Tyler McGinnis asks:</h2>
      <div>
        <picture>
          <img
            src="https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png"
            alt="user"
          />
        </picture>
        <div>
          <h3>Would You Rather ...</h3>
          <form>
            <label>
              <input type="radio" name="answer" value="male" />
              Answer 1
            </label>
            <label>
              <input type="radio" name="answer" value="male" />
              Answer 2
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Answer;
