import React, { useContext } from "react";
import { StoreContext } from '../store/useStore';

export default function Buttons() {
    const store = useContext(StoreContext)
    return (
        <div className="row">
            <div className="col-sm">
                <button type="button" className="btn btn-light align-top" onClick={() => store.updateCount()}><i className="fa fa-thumbs-o-up" />Like</button>
            </div>
            <div className="col-sm">
                <button type="button" className="btn btn-light" onClick={() => document.getElementById('message').focus()}><i className="fa fa-comment-o" />Message</button>
            </div>
        </div>
    );
}