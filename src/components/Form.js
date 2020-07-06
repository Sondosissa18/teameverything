import React from 'react';
import { StoreContext } from '../store/useStore';

export default class Form extends React.Component {

    handleSubmit = (e, store) => {
        e.preventDefault();
        store.postMessage(this.message.value);
        this.message.value = "";
    }

    render() {
        return (
            <StoreContext.Consumer>
                {
                    store => (

                        <form onSubmit={(e) => this.handleSubmit(e, store)}>
                            <div>
                                <input type="text" id={'message'} className="form-control" placeholder={"Write a message ..."} ref={node => {
                                    this.message = node;
                                }} />
                            </div>
                        </form>
                    )
                }
            </StoreContext.Consumer>
        )
    }
}