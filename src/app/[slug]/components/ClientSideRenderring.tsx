"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const primaryColor = "#f3f3f3";
import RunEffect from "./effect";
import jsonToFunction from "./jsToFnc";
export default function ClientSideRenderring({ Element, data }) {
    const parentDiv = Element.filter((el) => el.parentIndex === undefined).sort(
        (a, b) => a.index - b.index
    );

    // state management
    const [stateValues, setStateValues] = useState({});

    const childDiv = Element.filter((el) => el.parentIndex).sort((a, b) => a.index - b.index);

    return (
        <>
            {parentDiv.map((pd, i) => {
                pd.state ? eval(`let ${pd.state} = ${pd.stateValue}`) : null;

                const [yeasir, setYeasir] = useState(0);
                // define parent tag
                const ParentTag = pd.tag;

                // define onCLick function
                const myFunction = jsonToFunction(pd, "onclick");

                // define useEffect function
                const effectFn = jsonToFunction(pd, "useEffect");
                RunEffect(
                    pd.shouldRunEffect,
                    effectFn,
                    pd?.effectDeps,
                    { yeasir2: yeasir },
                    { yeasir: yeasir }
                );

                return pd.tag === "img" ? (
                    <img
                        key={i}
                        src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0="
                        style={pd.style}
                    />
                ) : (
                    <ParentTag key={i} style={pd.style} onClick={() => setYeasir(1)}>
                        parent - {pd.index}
                        {childDiv.map((cd, i) => {
                            // define child tag

                            const ChildTag = cd.tag;
                            console.log(yeasir, ":");

                            // dynamic import component and checking if component exists or not

                            const ChildComponent = dynamic(
                                () =>
                                    import(`./${cd.component}.js`).catch(() => {
                                        return {
                                            default: <div>Hello world!</div>,
                                        };
                                    }),
                                {
                                    loading: () => <p className="p-4 text-center">Loading...</p>,

                                    suspense: cd.suspense,

                                    ssr: false,
                                }
                            );

                            if (cd.parentIndex === pd.index)
                                return (
                                    <ChildTag key={i} style={cd.style}>
                                        {cd.component ? (
                                            <ChildComponent />
                                        ) : (
                                            <span>
                                                Child of parent - {cd.parentIndex}, Child index -{" "}
                                                {cd.index}
                                            </span>
                                        )}
                                    </ChildTag>
                                );
                        })}
                    </ParentTag>
                );
            })}
        </>
    );
}
