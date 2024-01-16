"use client"



export default function Menu(props: any) {
    return(
        <header>
            <div className="">
                {props.name}
                {props.age}
                {props.isHuman ? ' Is a Human!' : 'Is a Robot'}
            </div>
        </header>
    )
}