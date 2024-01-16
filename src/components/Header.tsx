"use client";

import Logo from "./Logo";
import Menu from "./Menu";

export default function Header(props: any) {

    // const name = 'Gabriel'

    return (
        <header>
            <div className="flex font-semibold items-center justify-evenly">
                <Logo />
                <Menu {...props} />
                {props.children}
            </div>
        </header>
    );
}
