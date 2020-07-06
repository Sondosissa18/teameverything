import React from "react";
import { useStore } from '../store/useStore';

export default function Buttons() {
    const store = useStore()
    return (
        <div className="row">
            <div className="col-sm">
                <button type="button" className="btn btn-light align-top" onClick={() => store.updateCount()}><i className="fa fa-thumbs-o-up" />Like</button>
            </div>
            <div className="col-sm">
                <button type="button" className="btn btn-light" onClick={() => document.getElementById('comment').focus()}><i className="fa fa-comment-o" />Comment</button>
            </div>
        </div>
    );
}