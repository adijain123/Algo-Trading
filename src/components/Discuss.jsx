import React, { useState } from 'react';
import DiscussStyles from './DiscussStyles';
import { Link } from 'react-router-dom';

const Discuss = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingReply, setEditingReply] = useState(null);
  const [showAllReplies, setShowAllReplies] = useState({});

  const handleNewQuestionChange = (e) => setNewQuestion(e.target.value);
  const handleNewQuestionSubmit = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, { text: newQuestion, replies: [], newReply: '' }]);
      setNewQuestion('');
    }
  };

  const handleNewReplyChange = (index, text) => {
    const newQuestions = [...questions];
    newQuestions[index].newReply = text;
    setQuestions(newQuestions);
  };

  const handleNewReplySubmit = (index) => {
    const newQuestions = [...questions];
    if (newQuestions[index].newReply.trim()) {
      newQuestions[index].replies.push(newQuestions[index].newReply);
      newQuestions[index].newReply = '';
      setQuestions(newQuestions);
    }
  };

  const handleEditQuestion = (index) => setEditingQuestion(index);
  const handleEditReply = (qIndex, rIndex) => setEditingReply({ qIndex, rIndex });
  const handleSaveQuestion = (index) => setEditingQuestion(null);
  const handleSaveReply = () => setEditingReply(null);

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleDeleteReply = (qIndex, rIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].replies.splice(rIndex, 1);
    setQuestions(newQuestions);
  };

  const handleKeyPress = (event, callback) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      callback();
    }
  };

  const toggleShowAllReplies = (qIndex) => {
    setShowAllReplies((prevState) => ({
      ...prevState,
      [qIndex]: !prevState[qIndex],
    }));
  };

  return (
    <>
     {(localStorage.getItem("authToken")) ?
    <div className="discuss-container">
      <DiscussStyles />
      <h1 className='text-3xl text-yellow-500 text-center font-semibold'>Welcome, <span className='capitalize'>{localStorage.getItem("name")}</span></h1>
      <div className="discuss-title">Discuss</div>
      <div className="discuss-newQuestion">
        <textarea
          className="discuss-textarea"
          value={newQuestion}
          onChange={handleNewQuestionChange}
          onKeyPress={(e) => handleKeyPress(e, handleNewQuestionSubmit)}
          placeholder="Type your question here..."
        />
        <button className="discuss-submitButton" onClick={handleNewQuestionSubmit}>
          Submit
        </button>
      </div>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="discuss-questionContainer">
          {editingQuestion === qIndex ? (
            <textarea
              className="discuss-textarea"
              value={question.text}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[qIndex].text = e.target.value;
                setQuestions(newQuestions);
              }}
              onKeyPress={(e) => handleKeyPress(e, () => handleSaveQuestion(qIndex))}
            />
          ) : (
            <div className="text-black font-medium"> <span className='capitalize font-bold text-red-600'>{localStorage.getItem("name")} :</span> {question.text}</div>
          )}
          {editingQuestion === qIndex ? (
            <button className="discuss-saveButton" onClick={() => handleSaveQuestion(qIndex)}>
              Save
            </button>
          ) : (
            <>
              <div className="discuss-threeDots">...</div>
              <div className="discuss-buttonContainer">
                <button className="discuss-editButton" onClick={() => handleEditQuestion(qIndex)}>
                  Edit
                </button>
                <button className="discuss-deleteButton" onClick={() => handleDeleteQuestion(qIndex)}>
                  Delete
                </button>
              </div>
            </>
          )}
          <div className="discuss-replyContainer">
            {question.replies.slice(0, showAllReplies[qIndex] ? question.replies.length : 2).map((reply, rIndex) => (
              <div key={rIndex} className="discuss-reply">
                {editingReply?.qIndex === qIndex && editingReply?.rIndex === rIndex ? (
                  <textarea
                    className="discuss-textarea"
                    value={reply}
                    onChange={(e) => {
                      const newQuestions = [...questions];
                      newQuestions[qIndex].replies[rIndex] = e.target.value;
                      setQuestions(newQuestions);
                    }}
                    onKeyPress={(e) => handleKeyPress(e, handleSaveReply)}
                  />
                ) : (
                  <div><span className='capitalize font-bold text-green-700'>Anonymous :</span> {reply}</div>
                )}
                {editingReply?.qIndex === qIndex && editingReply?.rIndex === rIndex ? (
                  <button className="discuss-saveButton" onClick={handleSaveReply}>
                    Save
                  </button>
                ) : (
                  <>
                    <div className="discuss-threeDots">...</div>
                    <div className="discuss-buttonContainer">
                      <button className="discuss-editButton" onClick={() => handleEditReply(qIndex, rIndex)}>
                        Edit
                      </button>
                      <button className="discuss-deleteButton" onClick={() => handleDeleteReply(qIndex, rIndex)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
            {question.replies.length > 2 && (
              <button className="discuss-showMoreButton" onClick={() => toggleShowAllReplies(qIndex)}>
                {showAllReplies[qIndex] ? 'Show Less' : 'Show More'}
              </button>
            )}
            <textarea
              className="discuss-textarea"
              value={question.newReply || ''}
              onChange={(e) => handleNewReplyChange(qIndex, e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, () => handleNewReplySubmit(qIndex))}
              placeholder="Type your reply here..."
            />
            <button className="discuss-replyButton" onClick={() => handleNewReplySubmit(qIndex)}>
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
    : 
     <div className="relative w-full h-[89vh] bg-cover bg-center" style={{ backgroundImage: "url('../src/assets/community.jpg')" }}>
     <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center">
       <Link to="/Login" className="bg-red-600 hover:bg-red-800 text-white font-bold text-2xl py-3 px-6 rounded-lg">
         Login
       </Link>
     </div>
    </div>

    }
    </>
  );
};

export default Discuss;
