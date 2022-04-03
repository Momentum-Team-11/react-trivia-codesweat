// import React from "react"

// const Randomizer = (props) => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const { data }  props;
  
// //     // We need to set up a function that will allow
// //     // the user to see the next cat in our list of cats.
// //     // In this function we are incrementing our variable named currentCat
// //     // by one every time this function gets called
//     const getNextQuestion = () => {
//         setCurrentQuestion(currentQuestion + 1);
//     }
// //     const getNextCat = () => {
// //       // Create a new Audio instance that uses our meow sound file
// //       const meow = new Audio("cat_meow.wav");
// //       setCurrentCat(currentCat + 1);
// //       // Here we are calling the sound instance that we created earlier
// //       meow.play();
// //     };
  
// //     return (
// //       <Main>
// //         {/* Our function getNextCat is being called in the onClick of our
// //       button element. Every time a user clicks the button, we want to show a new 
// //       cat picture. We are doing that by calling getNextCat! */}
// //         {/* Here we are checking to see if there are any items in our 
// //         array called data. Remember, our data array is being passed as props
// //         from the parent component called App! */}
// //         {data.length ? (
// //           <ImageContainer>
// //             <img alt="" src={data[currentCat].url} height="100%" width="100%" />
// //           </ImageContainer>
// //         ) : null}
// //         <Button onClick={() => getNextCat()}>Moar!</Button>
// //       </Main>
// //     );
// //   };
  
// export default Randomizer;