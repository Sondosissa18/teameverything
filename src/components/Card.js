import React from "react";
import Count from "./Count";
import Buttons from "./Buttons";
//import imageStore from '../store/ImageStore'
import { useObserver } from "mobx-react";

export default function Card() {
    return (
        useObserver(() => (
            <div className="card">
                <img src="" className="card-img-top" alt="..." />
                <button className="btn btn-light" >
                    <i className="fa fa-chevron-right" />
                </button>
                <Count />
                <div className="card-body" >
                    <Buttons />
                </div>
            </div>
        ))
    );
}