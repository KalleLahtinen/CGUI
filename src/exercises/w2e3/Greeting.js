import React, { useState } from 'react';
import './greeting.css';
// Importing images
import dogImg from './images/dog.png';
import catImg from './images/cat.png';
import bunnyImg from './images/bunny.png';
import fishImg from './images/fish.png';
import questionMarkImg from './images/question_mark.png';

function Greeting() {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [greeting, setGreeting] = useState('');
  const [petImage, setPetImage] = useState(questionMarkImg);

  const petImages = {
    dog: dogImg,
    cat: catImg,
    bunny: bunnyImg,
    fish: fishImg
  };

  const generateGreeting = () => {
    const greetings = {
      dog: [
        `Who's a good dog? ${petName} is!`,
        `${petName} wags its tail with joy!`,
        `Bark! ${petName} is ready for a walk!`
      ],
      cat: [
        `${petName}, you majestic creature, grace us with your presence.`,
        `Purr! ${petName} is purring softly.`,
        `${petName} is napping in a sunbeam.`
      ],
      bunny: [
        `Hop, hop! ${petName} is hopping around happily.`,
        `${petName} is munching on some carrots.`,
        `Snuggle time! ${petName} is ready for cuddles.`
      ],
      fish: [
        `Glub, glub! ${petName} is swimming gracefully.`,
        `Watch out! ${petName} is making bubbles.`,
        `${petName} is exploring the castle in its tank.`
      ],
    };

    const petGreetings = greetings[petType] || [
      `Hello, ${petName}! You're an amazing pet!`,
      `What an incredible friend ${petName} is!`,
      `${petName} looks happy today!`
    ];
    const message = petGreetings[Math.floor(Math.random() * petGreetings.length)];
    setGreeting(message);

    const image = petImages[petType] || questionMarkImg;
    setPetImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateGreeting();
  };

  return (
    <div className="Greeting">
      <header className="Greeting-header">
        <div className="image-container">
          <img src={petImage} alt="Your Pet" className="pet-image" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="petName">Pet's Name:</label>
            <input
              id="petName"
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="petType">Pet Type:</label>
            <select
              id="petType"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
            >
              <option value="">Select a pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bunny">Bunny</option>
              <option value="fish">Fish</option>
            </select>
          </div>
          <button type="submit" className="greet-button">Greet Pet!</button>
        </form>
        {greeting && <p className="greeting-message">{greeting}</p>}
      </header>
    </div>
  );
}

export default Greeting;