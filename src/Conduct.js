export const Conduct=()=>{
    let menus=[
        'home','ABout','Contact'
    ]
    return(
        <header>
            <ul>
                <li>{menus[0]}</li>
                <li>{menus[1]}</li>
                <li>{menus[2]}</li>
            </ul>
        </header>
    )
}