import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsChatSquareHeart } from "react-icons/bs";
import kissbun from "../../assets/last-bunny.gif";
import bunbun from "../../assets/bunny-2.gif";
import '../../App.css';

const phrases = [
  "No",
  "Are you Sure?",
  "Really Sure?",
  "Think Again",
  "Are you absolutely certain?",
  "Is that your final answer?",
  "Last Chance",
  "You Might Regret This",
  "Have you Reconsidered yet?",
  "Fine, I guess I'll go fuck myself"
]

const Valentines = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [userName, setUserName] = useState('');
  const [nameEntered, setNameEntered] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  }

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  const handleNameInputChange = (event) => {
    setUserName(event.target.value);
  }

  const handleNameSubmit = () => {
    if (userName.trim() === '') {
      toast('Please enter a name')
    } else {
      setNameEntered(true);
    }
  }

  return (
    <div className="container-one">
      <ToastContainer/>
      {!nameEntered ? (
        <div className="input-holder">
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={handleNameInputChange}
          />
          <button
            className="input-button"
            onClick={handleNameSubmit}
          > Click Me
            <BsChatSquareHeart/>
          </button>
        </div>
      ) : (
        <div className="valentine-container">
          {yesPressed ? (
            <>
              <img src={kissbun} alt="" />
              <div className="text"> Yay!! </div>
            </>
          ) : (
            <>
              <img src={bunbun} alt="" />
              <p> Will you be my valentine, {userName}? </p>
              <div>
                <button
                  className="yesButtonSize"
                  style={{ fontSize: `${yesButtonSize}px` }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  className="noButton"
                  onClick={handleNoClick}
                >
                  {getNoButtonText()}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Valentines;
