import React from "react";

const StepOne = () => {
  const handleNext = (e) => {
    e.preventDefault()
    console.log('Next clicked')
  };
  return (
    <>
      <h1>Step 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        sapiente aliquid deserunt repellat vel tempora voluptatem modi maxime
        pariatur incidunt excepturi rem quaerat eligendi minus odio perferendis
        labore praesentium, officia corrupti quisquam nam soluta. Ex corrupti
        repellendus, numquam vitae nobis, eaque sint, et distinctio perferendis
        itaque explicabo ab qui aut?
      </p>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default StepOne;
