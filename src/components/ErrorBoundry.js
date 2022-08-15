import React from 'react';
import { useState } from 'react';

function ErrorBoundry(props){
        // this.state = {hasError: false}
    const [ hasError ] = useState(false);

    // componentDidCatch(error, info){
    //     this.setState({hasError: true});
    // }

        if(hasError){
            return(
                    <p>oops, something went wrong</p>
                )
        }else {
            return (props.children)
        }
}

export default ErrorBoundry;
