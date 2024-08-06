import ButtonSign from "./ButtonSign";

function Content() {
    return (
        <>
           <div className="flex mt-16" >
            <div className="flex flex-col w-41 ">
                <div className="ml-36 w-1/2 font-extrabold text-7xl">YOUR FEET DESERVE THE BEST</div>
                <div className="ml-32 w-1/2 font-medium text-l mt-9">YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE TEH BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</div>
                <div className="mt-5 ml-32 w-1/2">
                    <span className="bg-red-600 px-5 py-1 font-medium text-xl text-white rounded mr-6">Shop Now</span>
                    <span className="px-5 py-1 font-medium text-xl text-green border-solid border border-black rounded">Category</span>
                </div>
                <div className="py-1 mt-4 ml-32 w-1/2">
                    <div>Also Available On</div>
                    <div className="flex mt-2">
                        <img className="mr-2" src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/flipkart.png?raw=true" alt="" />
                        <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/amazon.png?raw=true" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/hero-image.png?raw=true" alt="" />
            </div>
           </div>
        </>
    )
}

export default Content;