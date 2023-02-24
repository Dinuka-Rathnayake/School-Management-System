import React,{useState} from "react";
import CounterFunction from "./CounterFunction";
import CounterClass from "./CounterClass";

export default function counter() {

    return(
        <div>
            <CounterFunction />
            <hr />
            <CounterClass />
        </div>
    )
}