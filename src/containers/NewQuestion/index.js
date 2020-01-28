import React from 'react';

const NewQuestion = () => (
  <div>
    <form>
      <h1>Create New Question</h1>
      <p>Complete the question:</p>
      <h2>Would you rather ...</h2>
      <input type="text" placeholder="Enter option One Text Here" />
      <span>Or</span>
      <input type="text" placeholder="Enter option Two Text Here" />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default NewQuestion;
