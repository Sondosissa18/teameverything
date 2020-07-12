import React from 'react';
import { useStore } from '../store/useStore';
import { useObserver, useLocalStore } from 'mobx-react';


export default function MessageForm() {
    const store = useStore() 
    const state = useLocalStore(() => {
        return {
          message: "",
          updateMessage(message) {
            state.message = message;
          },
        };
      });
    let handleSubmit = (e) => {
        e.preventDefault()
        store.messageStore.postMessage(state.message)
        state.updateMessage('')
    }
    return useObserver(() => (
        <form onSubmit={handleSubmit} > 
        <div>
            <input type="text" id={'comment'} className="form-control" placeholder={"Write a message ..."} value={state.message} onChange={(e) =>state.updateMessage(e.target.value)} />
        </div>
    </form>
    )
    )
}

