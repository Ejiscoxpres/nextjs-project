import { Fragment } from "react";
import MainHeader from "./main-header";

export default function(props){
    return(
        <Fragment>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}