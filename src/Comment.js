import react from 'react';

const Comment = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}></img>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.authorName}
                </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="commentText">{props.commentText}</div>
            </div>
        </div>
    );
}

export default Comment;