import { Button } from "../ui/button";

function Header() {
    return (
        <div className="p-2 shadow-sm flex justify-between items-center bg-red-400">
            <img src="/logo.svg" alt="" />
            <Button>Sign IN</Button>
        </div>
    )
}

export default Header;