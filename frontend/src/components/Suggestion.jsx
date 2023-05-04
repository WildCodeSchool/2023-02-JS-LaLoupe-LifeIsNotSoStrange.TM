import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment("");
    }
  };

  return (
    <form className="containered min-h-auto" onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="input-content">
          <div className="input-dist">
            <div className="input-type">
              <h3 className="text-white text-center text-2xl mt-4 w-[40%] ml-[30%] rounded-full">
                Espace de suggestion
              </h3>

              <label
                htmlFor="comment-input"
                className="mt-1 mb-1 text-white underline"
              >
                Laissez votre suggestion :
              </label>
              <br />
              <textarea
                className="w-[80%] mt-2 ml-[10%] rounded-md"
                id="comment-input"
                value={comment}
                onChange={handleCommentChange}
                rows="4"
                cols="50"
                placeholder="Entrez votre suggestion ici..."
              />
              <br />
              <button
                type="submit"
                className="text-white hover:border-2 hover:border-white rounded-full w-[25%] ml-[37%] text-xl mb-2"
              >
                Soumettre
              </button>

              <hr />
              <h4 className="text-white text-xl underline">
                Liste des suggestions
              </h4>
              <ul className="text-white">
                {commentsList.map((items, thing) => (
                  <li key={thing.id}>{items}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentBox;
