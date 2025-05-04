import React, { useState, useEffect } from "react";
import "./App.css";

const quizzes = {
  "Indian States and Capitals": [
    { question: "What is the capital of Maharashtra?", options: ["Nagpur", "Mumbai", "Pune", "Nashik"], answer: "Mumbai" },
    { question: "What is the capital of Tamil Nadu?", options: ["Chennai", "Coimbatore", "Madurai", "Trichy"], answer: "Chennai" },
    { question: "What is the capital of Uttar Pradesh?", options: ["Kanpur", "Varanasi", "Lucknow", "Agra"], answer: "Lucknow" },
    { question: "What is the capital of Karnataka?", options: ["Mysuru", "Bengaluru", "Hubli", "Mangalore"], answer: "Bengaluru" },
    { question: "What is the capital of Gujarat?", options: ["Surat", "Vadodara", "Ahmedabad", "Gandhinagar"], answer: "Gandhinagar" },
    { question: "What is the capital of West Bengal?", options: ["Kolkata", "Howrah", "Darjeeling", "Siliguri"], answer: "Kolkata" },
    { question: "What is the capital of Rajasthan?", options: ["Udaipur", "Jaipur", "Jodhpur", "Ajmer"], answer: "Jaipur" },
    { question: "What is the capital of Kerala?", options: ["Kochi", "Kozhikode", "Thiruvananthapuram", "Thrissur"], answer: "Thiruvananthapuram" },
    { question: "What is the capital of Bihar?", options: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"], answer: "Patna" },
    { question: "What is the capital of Andhra Pradesh?", options: ["Vijayawada", "Visakhapatnam", "Amaravati", "Guntur"], answer: "Amaravati" },
  ],
  "World Countries and Capitals": [
    { question: "What is the capital of the United States?", options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"], answer: "Washington D.C." },
    { question: "What is the capital of the United Kingdom?", options: ["Edinburgh", "London", "Manchester", "Birmingham"], answer: "London" },
    { question: "What is the capital of France?", options: ["Paris", "Lyon", "Marseille", "Nice"], answer: "Paris" },
    { question: "What is the capital of Japan?", options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], answer: "Tokyo" },
    { question: "What is the capital of Germany?", options: ["Munich", "Berlin", "Frankfurt", "Hamburg"], answer: "Berlin" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Perth", "Canberra"], answer: "Canberra" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
    { question: "What is the capital of Italy?", options: ["Venice", "Rome", "Milan", "Naples"], answer: "Rome" },
    { question: "What is the capital of Russia?", options: ["St. Petersburg", "Moscow", "Kazan", "Sochi"], answer: "Moscow" },
    { question: "What is the capital of China?", options: ["Shanghai", "Beijing", "Guangzhou", "Wuhan"], answer: "Beijing" },
  ],
  "Indian Cricket": [
    { question: "Who is known as the 'God of Cricket' in India?", options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"], answer: "Sachin Tendulkar" },
    { question: "Which Indian player has the highest individual score in ODIs?", options: ["Virat Kohli", "Rohit Sharma", "Yuvraj Singh", "KL Rahul"], answer: "Rohit Sharma" },
    { question: "Who was India's captain in the 2011 World Cup?", options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rahul Dravid"], answer: "MS Dhoni" },
    { question: "Which stadium is known as the 'Mecca of Indian Cricket'?", options: ["Wankhede", "Eden Gardens", "Chinnaswamy", "Narendra Modi Stadium"], answer: "Eden Gardens" },
    { question: "Which Indian bowler took 10 wickets in a single Test innings?", options: ["Anil Kumble", "Ashwin", "Jasprit Bumrah", "Harbhajan Singh"], answer: "Anil Kumble" },
    { question: "Who is the current captain of the Indian Test team (2024)?", options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"], answer: "Rohit Sharma" },
    { question: "Which Indian cricketer is nicknamed 'Hitman'?", options: ["Virat Kohli", "Shikhar Dhawan", "Rohit Sharma", "Suresh Raina"], answer: "Rohit Sharma" },
    { question: "Who won the 2024 T20 World Cup for India?", options: ["Rohit Sharma", "Hardik Pandya", "Jasprit Bumrah", "MS Dhoni"], answer: "Rohit Sharma" },
    { question: "Who is India's highest run-scorer in T20Is?", options: ["Virat Kohli", "Rohit Sharma", "Suryakumar Yadav", "Shubman Gill"], answer: "Virat Kohli" },
    { question: "Which IPL team has won the most titles?", options: ["CSK", "RCB", "MI", "KKR"], answer: "MI" },
  ],
  "Football - UCL & FIFA": [
    { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Brazil", "Argentina", "France"], answer: "Brazil" },
    { question: "Who won the FIFA World Cup in 2022?", options: ["France", "Argentina", "Germany", "Croatia"], answer: "Argentina" },
    { question: "Who is the all-time top scorer in the Champions League?", options: ["Messi", "Cristiano Ronaldo", "Lewandowski", "Benzema"], answer: "Cristiano Ronaldo" },
    { question: "Which club has the most Champions League titles?", options: ["Barcelona", "Liverpool", "AC Milan", "Real Madrid"], answer: "Real Madrid" },
    { question: "Who won the Ballon d'Or in 2023?", options: ["Messi", "Mbappe", "Haaland", "Benzema"], answer: "Messi" },
    { question: "Which country hosted the 2018 FIFA World Cup?", options: ["Russia", "Brazil", "Germany", "Qatar"], answer: "Russia" },
    { question: "Which team won the UEFA Champions League in 2023?", options: ["Man City", "Real Madrid", "PSG", "Liverpool"], answer: "Man City" },
    { question: "Who scored a hat-trick in the 2022 World Cup final?", options: ["Messi", "Mbappe", "Neymar", "Griezmann"], answer: "Mbappe" },
    { question: "Which club does Lionel Messi currently play for (2024)?", options: ["Inter Miami", "PSG", "Barcelona", "Man City"], answer: "Inter Miami" },
    { question: "Which country hosted the 2022 FIFA World Cup?", options: ["Russia", "Qatar", "USA", "Germany"], answer: "Qatar" },
  ],
};

const explanations = {
  "Indian States and Capitals": [
    "Mumbai is the capital of Maharashtra, one of India's most populous states.",
    "Chennai (formerly Madras) is the capital of Tamil Nadu in southern India.",
    "Lucknow is the capital of Uttar Pradesh, India's most populous state.",
    "Bengaluru (formerly Bangalore) is the capital of Karnataka and known as India's Silicon Valley.",
    "Gandhinagar is the capital of Gujarat, though Ahmedabad is the largest city in the state.",
    "Kolkata (formerly Calcutta) is the capital of West Bengal and was once the capital of British India.",
    "Jaipur, known as the Pink City, is the capital of Rajasthan.",
    "Thiruvananthapuram (formerly Trivandrum) is the capital of Kerala in southwestern India.",
    "Patna is the capital of Bihar, one of India's eastern states.",
    "Amaravati is the new capital of Andhra Pradesh after the state's bifurcation in 2014.",
  ],
  "World Countries and Capitals": [
    "Washington D.C. (District of Columbia) is the capital of the United States, named after George Washington.",
    "London has been the capital of England and later the United Kingdom for over a thousand years.",
    "Paris is the capital of France and is known as the 'City of Light'.",
    "Tokyo became the capital of Japan in 1868, replacing Kyoto.",
    "Berlin became the reunified capital of Germany after the fall of the Berlin Wall in 1989.",
    "Canberra was specifically designed as Australia's capital city, a compromise between Sydney and Melbourne.",
    "Ottawa became Canada's capital in 1857, chosen by Queen Victoria.",
    "Rome, known as the Eternal City, has been Italy's capital since 1871.",
    "Moscow has been Russia's capital since 1918, except for a period when St. Petersburg was the capital.",
    "Beijing has been China's capital for most of the last 800 years.",
  ],
  "Indian Cricket": [
    "Sachin Tendulkar is widely regarded as the 'God of Cricket' in India due to his extraordinary achievements and legacy.",
    "Rohit Sharma holds the record for the highest individual score in ODIs with 264 runs against Sri Lanka in 2014.",
    "MS Dhoni captained India to victory in the 2011 World Cup, ending a 28-year wait since their first win in 1983.",
    "Eden Gardens in Kolkata is considered the 'Mecca of Indian Cricket' and has hosted many historic matches.",
    "Anil Kumble achieved the rare feat of taking all 10 wickets in a Test innings against Pakistan in 1999.",
    "Rohit Sharma was appointed as the Test captain of India in 2022 and continues to lead the team.",
    "Rohit Sharma earned the nickname 'Hitman' for his aggressive batting style and ability to hit massive sixes.",
    "Rohit Sharma led India to victory in the 2024 T20 World Cup as captain of the Indian team.",
    "Virat Kohli has the most runs in T20 Internationals for India, showcasing his consistency across formats.",
    "Mumbai Indians (MI) has won the most IPL titles, establishing themselves as the most successful franchise.",
  ],
  "Football - UCL & FIFA": [
    "Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002), more than any other country.",
    "Argentina won the 2022 FIFA World Cup in Qatar, defeating France in a penalty shootout after a 3-3 draw.",
    "Cristiano Ronaldo is the all-time top scorer in the Champions League with over 140 goals.",
    "Real Madrid has won the Champions League/European Cup 14 times, more than any other club.",
    "Lionel Messi won the 2023 Ballon d'Or, his eighth, extending his record as the player with the most wins.",
    "Russia hosted the 2018 FIFA World Cup, with France emerging as champions.",
    "Manchester City won their first UEFA Champions League title in 2023, defeating Inter Milan in the final.",
    "Kylian Mbappé scored a hat-trick in the 2022 World Cup final against Argentina, becoming only the second player to do so in a final.",
    "Lionel Messi joined Inter Miami in the MLS in 2023 after leaving Paris Saint-Germain.",
    "Qatar hosted the 2022 FIFA World Cup, becoming the first Middle Eastern country to host the tournament.",
  ],
};

function App() {
  const [category, setCategory] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (category && !isFinished && timerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [category, isFinished, timerRunning]);

  const quizData = quizzes[category] || [];

  const handleOptionClick = (option) => {
    if (!isSubmitted) setSelected(option);
  };

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setTimerRunning(true);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setIsSubmitted(true);
    
    const isCorrect = selected === quizData[currentQ].answer;
    if (isCorrect) setScore(score + 1);
    
    const updatedAnswers = [
      ...answeredQuestions,
      {
        questionIndex: currentQ,
        question: quizData[currentQ].question,
        selectedAnswer: selected,
        correctAnswer: quizData[currentQ].answer,
        isCorrect
      }
    ];
    setAnsweredQuestions(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQ + 1 < quizData.length) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
      setTimerRunning(false);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setIsSubmitted(false);
    setScore(0);
    setIsFinished(false);
    setAnsweredQuestions([]);
    setTimer(0);
    setCategory("");
    setTimerRunning(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getOptionClass = (option) => {
    if (!isSubmitted) return selected === option ? "selected" : "";
    if (option === quizData[currentQ].answer) return "correct";
    if (option === selected && selected !== quizData[currentQ].answer) return "wrong";
    return "";
  };

  const calculatePerformance = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 90) return "Excellent! You're a master of this topic!";
    if (percentage >= 70) return "Great job! You have good knowledge in this area.";
    if (percentage >= 50) return "Good effort! There's room for improvement.";
    return "Keep learning! You'll do better next time.";
  };

  // Generate confetti elements for high scores
  const renderConfetti = () => {
    if (score / quizData.length >= 0.8) {
      const confettiElements = [];
      const colors = ['#5e72e4', '#825ee4', '#37b24d', '#ff9f43', '#ff6b6b'];
      
      for (let i = 0; i < 50; i++) {
        const left = `${Math.random() * 100}%`;
        const animationDelay = `${Math.random() * 5}s`;
        const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        confettiElements.push(
          <div 
            key={i}
            className="confetti" 
            style={{
              left,
              animationDelay,
              backgroundColor
            }}
          />
        );
      }
      
      return confettiElements;
    }
    
    return null;
  };

  // Category Selection Screen
  if (!category) {
    return (
      <div className="container">
        <h1>Quiz Master</h1>
        <div className="category-grid">
          {Object.keys(quizzes).map((cat) => (
            <button 
              key={cat} 
              className="category-button" 
              onClick={() => handleCategorySelect(cat)}
              data-category={cat}
            >
              <div className="category-name">{cat}</div>
              <div className="questions-count">{quizzes[cat].length} questions</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Results Screen
  if (isFinished) {
    const percentage = (score / quizData.length) * 100;
    
    return (
      <div className="container">
        {percentage >= 80 && renderConfetti()}
        <h1>{category}</h1>
        <div className="result-box">
          <h2>Quiz Completed!</h2>
          
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/{quizData.length}</span>
            </div>
            <div className="score-percentage">{percentage.toFixed(0)}%</div>
          </div>
          
          <div className="result-stats">
            <p><strong>Time taken:</strong> {formatTime(timer)}</p>
            <p><strong>Performance:</strong> {calculatePerformance()}</p>
          </div>
          
          <h3>Question Summary</h3>
          <div className="question-summary">
            {answeredQuestions.map((item, index) => (
              <details key={index} className="summary-item">
                <summary>
                  <span className={`summary-indicator ${item.isCorrect ? "correct-indicator" : "wrong-indicator"}`}>
                    {item.isCorrect ? "✓" : "✗"}
                  </span>
                  Question {index + 1}
                </summary>
                <div className="summary-details">
                  <p><strong>Q:</strong> {item.question}</p>
                  <p><strong>Your answer:</strong> {item.selectedAnswer}</p>
                  {!item.isCorrect && <p><strong>Correct answer:</strong> {item.correctAnswer}</p>}
                  <p><strong>Explanation:</strong> {explanations[category][item.questionIndex]}</p>
                </div>
              </details>
            ))}
          </div>
          
          <div className="button-group">
            <button className="btn blue" onClick={handleRestart}>Try Again</button>
            <button className="btn green" onClick={() => setCategory("")}>Choose Another Quiz</button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="container">
      <div className="quiz-header">
        <h1>{category}</h1>
        <div className="quiz-meta">
          <span className="timer">{formatTime(timer)}</span>
          <span className="score-counter">Score: {score}/{currentQ}</span>
        </div>
      </div>
      
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentQ) / quizData.length) * 100}%` }}
        ></div>
      </div>
      
      <div className="status-bar">
        Question {currentQ + 1} of {quizData.length}
      </div>
      
      <div className="question-card">
        <h3 className="question">{quizData[currentQ].question}</h3>
        
        <div className="options-box">
          {quizData[currentQ].options.map((opt, i) => (
            <button 
              key={i} 
              className={`option ${getOptionClass(opt)}`} 
              onClick={() => handleOptionClick(opt)} 
              disabled={isSubmitted}
            >
              {opt}
            </button>
          ))}
        </div>
        
        {isSubmitted && (
          <div className={`feedback-box ${selected === quizData[currentQ].answer ? "correct-feedback" : "wrong-feedback"}`}>
            <p className="feedback-icon">{selected === quizData[currentQ].answer ? "✓" : "✗"}</p>
            <p className="feedback-text">
              {selected === quizData[currentQ].answer 
                ? "Correct! Well done!" 
                : `Incorrect. The correct answer is ${quizData[currentQ].answer}.`}
            </p>
            <p className="explanation">{explanations[category][currentQ]}</p>
          </div>
        )}
        
        <div className="button-group">
          {!isSubmitted ? (
            <button 
              className="btn blue" 
              disabled={selected === null} 
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button 
              className="btn purple" 
              onClick={handleNext}
            >
              {currentQ === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
