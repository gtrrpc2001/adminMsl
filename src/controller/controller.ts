import { NavigateFunction, To } from "react-router-dom";
import axios from "axios";

export const createAxios = (url: string) => {
    return axios.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export const setInitialParams = (pageStatus: string) => {
    switch (pageStatus) {
        case "init":
            return { opacity: 0, x: 1 };
        case "next":
            return { opacity: 0, x: 100 };
        case "prev":
            return { opacity: 0, x: -100 };
        default:
            return { opacity: 0, x: 0 };
    }
}

export const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const pwd_regex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const LOGO = "MSL"

export const handleAnimateNext = (
    to: To,
    setFunc: React.Dispatch<React.SetStateAction<{
        opacity: number;
        x: number;
    }>>,
    nav: NavigateFunction
) => {
    setFunc({ opacity: 0, x: -100 });
    nav(to, { state: { pageStatus: "next" } });
}

