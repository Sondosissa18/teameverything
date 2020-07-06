import React from 'react';
import { useStore } from '../store/useStore';
import { useObserver } from 'mobx-react';


export default function Messages() {
    const store = useStore()
    return useObserver(() => (
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
            <input type="text" id={'comment'} className="form-control" placeholder={"Write a message ..."} ref={node => {
                store.message = node;
            }} />
        </div>
    </form>
    )
    )
}

