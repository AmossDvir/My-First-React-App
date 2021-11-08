import react from 'react';
import faker from 'faker';

const Comment = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}></img>
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