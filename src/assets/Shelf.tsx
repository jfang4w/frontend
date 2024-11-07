import { SVGProps } from "react";

export default function Shelf(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M20 8v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5V8h16Zm-6 3.5h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5ZM20 3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16Z" />
        </svg>
    );
}