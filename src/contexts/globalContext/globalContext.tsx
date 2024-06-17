import { createContext, FC, ReactNode } from "react";
import { itfGlobalContext } from "../../interfaces/ItfContexts";

const defaultValues:itfGlobalContext =  {
    
}

export const GlobalContext = createContext<itfGlobalContext>(defaultValues)


export const GlobalContextProvider:FC<{children:ReactNode}> = ({children}) => {
    
    return <GlobalContext.Provider value={{}}>
        {children}
    </GlobalContext.Provider>

}