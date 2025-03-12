import logo from './logo.svg';
import './App.css';
import { Header } from './Layout/Header';
import { Footer } from './Layout/Footer';
import { MainContent } from './Layout/MainContent';
import { PhotoGallery } from './Layout/PhotoGallery';
import { Todo } from './Layout/Todo';
import "font-awesome/css/font-awesome.css";



function App() {

  let galleryDetails = [
    {
      tilte: 'Paris',
      description: 'Iconic landmarks, charming neighborhoods, world-class museums, and delightful cafes. Paris invites you into a world where every street whispers tales of romance and wonder.'
    },
    {
      tilte: 'London',
      description: 'Longer days, lively events, and bustling city life await in the capital. Discover a collection of London s quintessential things to do this spring and summer.'
    },
    {
      tilte: 'Cape Town',
      description: 'Cape Town’s not just a place, it’s a vibe. Allow the Mother City to take you on a "kiff" adventure. Safe travels, chommies!'
    },
    {
      tilte: 'Hawaii',
      description: 'Escape to paradise with experiences that draw you closer to Hawaii s essence—think guided waterfall hikes in verdant rainforests, snorkeling with turtles, sunset sails, and more.'
    },
    {
      tilte: 'Washington DC',
      description: 'Nestled on the banks of the Potomac River, Washington, D.C., is more than just the capital of the United States.'
    },
    {
      tilte: 'Seattle',
      description: 'Nestled in the Pacific Northwest, Seattle is a vibrant and diverse city known for its natural beauty, thriving arts scene, and delicious cuisine.'
    },
    {
      tilte: 'New Orleans',
      description: 'Welcome to the vibrant city of New Orleans, where the sultry summer heat meets the intoxicating rhythms of jazz and the irresistible aromas of Cajun cuisine.'
    },
    {
      tilte: 'San Francisco',
      description: 'San Francisco, with its iconic Golden Gate Bridge and historic Fisherman’s Wharf, is a treasure trove of unique things to do.'
    },
    {
      tilte: 'Atlanta',
      description: 'Atlanta is a soulful Southern capital brimming with things to do, one that aptly blends rich heritage with modern flair.'
    }
  ]


  return (
    <>
      {/* <Header /> */}
        {/* {galleryDetails.map(item=><PhotoGallery gallery={item}/>)} */}
        {/* <MainContent /> */}
        <Todo />
      {/* <Footer /> */}
    </>
  );
}

export default App;

//Export is two types, 
//1. Named export - in a file there can be n number of Named export.
//2. Default export - in a file there will be one Default export.
//Named Export example below:
// class returnValue{
// }
// const url = "";

// export{
//   returnValue,
//   url
// } //this is the example of named export

//There are two types of Imports
//Default import and Named import
//Difference between Named import and Default import is
//for Named import we need to add classes in curly braces like import {returnValue, url}
//but for Default import we don't need to do.