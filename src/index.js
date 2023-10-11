import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import {faker} from '@faker-js/faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail userName="Bob" timeAgo="Today at 5:00pm" commentDetail="Nice blog 1" image={faker.image.avatar()} />
            <CommentDetail userName="Sam" timeAgo="Yesterday at 12:00pm" commentDetail="Nice blog 2" image={faker.image.avatar()} />
            <CommentDetail userName="Dud" timeAgo="12 December at 5:00pm" commentDetail="Worst blog 1" image={faker.image.avatar()} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root") );