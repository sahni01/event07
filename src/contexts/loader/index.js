const { createContext, useState } = require("react");


const LoaderContext = createContext();
const {Provider} = LoaderContext;

function LoaderProvider({children}){
    const [loader,setLoader] = useState(true);
    return (
        <Provider value={{loader,setLoader}}>
            {children}
        </Provider>
    )
}

export {LoaderContext,LoaderProvider};