import React from "react";
import {Provider} from "react-redux";
import withRedux, {createWrapper} from "next-redux-wrapper";
import store from "../redux/redux-store";

function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
            <Component {...pageProps} />
        </Provider>

}
const makeStore=()=>store
const wrapper=createWrapper(makeStore)
export default wrapper.withRedux(MyApp)