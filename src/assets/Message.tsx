import { SVGProps } from "react";

export default function Message(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.644-1.142l-4.29 1.117a.85.85 0 0 1-1.037-1.036l1.116-4.289A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2Zm1.252 11H8.75l-.102.007a.75.75 0 0 0 0 1.486l.102.007h4.502l.101-.007a.75.75 0 0 0 0-1.486L13.252 13Zm1.998-3.5h-6.5l-.102.007a.75.75 0 0 0 0 1.486L8.75 11h6.5l.102-.007a.75.75 0 0 0 0-1.486L15.25 9.5Z" />
        </svg >
    );
}