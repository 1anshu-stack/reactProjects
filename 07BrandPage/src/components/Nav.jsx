import ButtonSign from "./ButtonSign";

function Nav(){
    
    return (
        <>
          <div className="w-full h-20 px-16 py-4 flex justify-between shadow-md">
            <div>
                <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/brand_logo.png?raw=true" alt="" srcset="" />
            </div>
            <div className="flex gap-5 text-lg font-bold mt-2 text-white">
                <div className="cursor-pointer underline underline-offset-8">Menu</div>
                <div className="cursor-pointer" >Location</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">contact</div>
            </div>
            <div className="mt-2">
                <ButtonSign btnName="Login" />
            </div>
          </div>
        </>
    )
}

export default Nav;