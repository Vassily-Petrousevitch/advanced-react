import { ReactNode, createContext, useContext, useState } from "react";
import { Toast } from "../components/Toast";

interface ToastContextInterface {
    toast: (message: string) => void;
}

interface ProvidersInterface {
    children: ReactNode;
}

const ToastContext = createContext<ToastContextInterface>({
    toast: () => {},
});

export const useToastContext = () => useContext(ToastContext);

export const Providers = ({ children }: ProvidersInterface) => {
    const [toastMessage, setToastMessage] = useState("");
    const [toastOpen, setToastOpen] = useState(false);

    const toast = (message: string) => {
        setToastOpen(true);
        setToastMessage(message);

        setTimeout(() => {
            setToastOpen(false);
            setToastMessage("");
        }, 3000);
    }

    return (
        <ToastContext.Provider value={{ toast }}>
            <Toast message={toastMessage} open={toastOpen}></Toast>
            {children}
        </ToastContext.Provider>
    )
}