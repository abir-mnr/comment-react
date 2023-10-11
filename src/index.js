import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import {faker} from '@faker-js/faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning !</h4>
                <div>
                    Are you sure you want to accept this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail userName="Sam" timeAgo="Yesterday at 12:00pm" commentDetail="Nice blog 2" image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail userName="Bob" timeAgo="Today at 5:00pm" commentDetail="Nice blog 1" image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail userName="Dud" timeAgo="12 December at 5:00pm" commentDetail="Worst blog 1" image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root") );