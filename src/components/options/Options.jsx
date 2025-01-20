import css from "./options.module.css";

const Options = ({updateFeedback, resetFeedback, totalFeedback}) => {
    
        

    return (
        <div className={css.optionBtns}>
            <button className={css.button} onClick = {() => updateFeedback("good")}>Good</button>
            <button className={css.button} onClick = {() => updateFeedback("neutral")}>Neutral</button>
            <button className={css.button} onClick = {() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && (<button className={css.button} onClick={resetFeedback}>Reset</button>)}
          
        </div>
    )
};

export default Options;