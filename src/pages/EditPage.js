import React from 'react';

const EditPage = props => {
    return (
        <div>
            Hello, World from Edit Page {props.match.params.id}
        </div>
    );
}

export default EditPage;
