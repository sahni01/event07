import { LoaderProvider } from "./loader";

const { createContext } = require("react");


const AppContext = createContext();
const { Provider } = AppContext;


export default function AppContextProvider({ children }) {

    return (
        <Provider>
            <LoaderProvider>
                {children}
            </LoaderProvider>
        </Provider>
    )
}