import React, { useState } from 'react';
import DiscussStyles from './DiscussStyles';

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
    <div className="discuss-container">
      <DiscussStyles />
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
            <div className="discuss-question">{question.text}</div>
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
                  <div>{reply}</div>
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
  );
};

export default Discuss;
