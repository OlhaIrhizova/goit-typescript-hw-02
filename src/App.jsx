import { useEffect, useState } from "react";
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feedback";
import Options from "./components/options/Options";
import Notification from "./components/notification/Notification";






function App() {
  const [feedbackData, setFeedbackData] = useState(() => {
    const saveData =localStorage.getItem("feedbackData");
    return saveData ? JSON.parse(saveData) : { good: 0, neutral: 0, bad: 0 }
  }
  );

  useEffect(() => {
  localStorage.setItem("feedbackData", JSON.stringify(feedbackData))
  },[feedbackData])

  const updateFeedback = (feedbackType) => {

    setFeedbackData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
    
      };

      const totalFeedback = feedbackData.good + feedbackData.neutral + feedbackData.bad;

      const resetFeedback = () => {
        setFeedbackData({ good: 0, neutral: 0, bad: 0 });
      };

      const positiveFeedback = totalFeedback > 0 ? Math.round((feedbackData.good / totalFeedback) * 100) : 0;


  return(
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#e0f6ec",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      
    }}>
      <Description/>
      <Options 
      updateFeedback = {updateFeedback} 
      resetFeedback = {resetFeedback} 
      totalFeedback = {totalFeedback}
      positiveFeedback = {positiveFeedback}
      />

      {totalFeedback > 0 ? (
      <Feedback 
      good={feedbackData.good}
      neutral={feedbackData.neutral}
      bad={feedbackData.bad}
      totalFeedback = {totalFeedback}
      positiveFeedback = {positiveFeedback}
      />
    ) : (
      <Notification message="No feedback yet." />
    )}
    </div>
  )
}

export default App;