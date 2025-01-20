import css from "./feedback.module.css"

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback}) => {
    return (
        <div className={css.feedback}>

        <h2 className={css.title}>Feedback Statistics</h2>

        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total feedback: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedback} %</p>
      </div>
    )
};

export default Feedback;