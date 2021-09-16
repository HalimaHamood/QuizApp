import React from "react";

const Result = ({score, playAgin}) => (
    <div className= "score-board">
        <div className="score">You scored {score} / 5 corresct answer!</div>
        <button className= "playBtn" onClick={playAgin}>
            Play again
        </button>
    </div>
)

export default Result