import Button from "./Button";


function Contact() {
    return (
        <>
           <div className=" flex flex-col mx-40">
            <div>
                <div className="text-4xl font-extrabold">CONTACT US</div>
                <div className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, saepe atque velit, nam nesciunt necessitatibus soluta harum asperiores molestiae cupiditate dicta ratione nemo similique facere iure voluptatum at aperiam, minima aut quisquam! Praesentium aut officiis aperiam voluptas, blanditiis labore commodi at deserunt alias asperiores architecto magnam cupiditate maiores consequatur doloribus.</div>
            </div>
            <div className=" mt-16">
                <div>
                    <div className="">
                        <Button btuName="VIA SUPPORT CHAT"/> 
                        <Button btuName="VIA CALL" />
                        <div className="w-72 mt-4 text-center border-solid border-2 border-slate-500 bg-white-950 text-slate py-2 px-4 rounded font-medium">VIA EMAIL FORM</div>
                    </div>
                </div>
                <div></div>
            </div>
           </div>
        </>
    )
}

export default Contact;