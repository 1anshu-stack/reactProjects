function Nav() {
    return (
        <>
          <div className="flex justify-between px-6 shadow-lg ">
            <div>
                <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-2/project-2/public/images/logo.png?raw=true" alt="" />
            </div>
            <div className="flex gap-5 my-auto text-xl font-bold">
                <div className="underline underline-offset-8">Home</div>
                <div>Contact</div>
                <div>About</div>
            </div>
          </div>
        </>
    )
}

export default Nav;