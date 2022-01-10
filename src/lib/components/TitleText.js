import React from 'react';

const TitleText = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.text }} />
        </div>
    );
}
 
export default TitleText;