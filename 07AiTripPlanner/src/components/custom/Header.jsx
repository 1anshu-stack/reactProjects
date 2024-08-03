import { Button } from "../ui/button";

function Header() {
    return (
        <div className="p-3 shadow-lg flex justify-between items-center">
            <img src="/logo.svg" alt="" />
            <Button>Sign IN</Button>
        </div>
    )
}

export default Header;