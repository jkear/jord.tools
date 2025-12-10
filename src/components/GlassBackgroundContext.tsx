import React, { createContext, useContext } from "react";

const BackgroundContext = createContext<string>("/bg-lava.jpg");

interface BackgroundProviderProps {
    value: string;
    children: React.ReactNode;
}

export function BackgroundProvider({ value, children }: BackgroundProviderProps) {
    return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>;
}

export function useBackgroundImage() {
    return useContext(BackgroundContext);
}
