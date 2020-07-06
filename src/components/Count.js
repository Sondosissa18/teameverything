import React from 'react';
import { useObserver } from 'mobx-react';
import { useStore } from '../store/useStore';

export default function Count() {
    const store = useStore()
    return useObserver(() => (
        <div className="row reactions-count" >
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up" />{store.likesCount}
            </div>
            <div className="col-sm" align="right">
                {store.messageCount} message
        </div>
        </div>
    ))
}