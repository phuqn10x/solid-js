import { Router, Route , A } from "@solidjs/router";

function index(){
    return (
        <>
        <A href="/"> Home </A>
        <A href="/admin">admin</A>
        <A href="/users">users</A>
        </>

    )
}
export default index