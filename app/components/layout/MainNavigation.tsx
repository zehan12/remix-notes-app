import { NavLink } from "@remix-run/react";

export const MainNavigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className=" active:text-blue-700">
                        <NavLink to={"/notes"}>Create Notes</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};
