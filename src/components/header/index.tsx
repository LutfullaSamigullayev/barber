import { ButtonBron } from "../buttonBron"
import { Menu } from "./components"

export const Header = () => {
    return (
        <header className="containerUz section flex justify-between">
            <Menu />
            <ButtonBron />
        </header>
    )
}