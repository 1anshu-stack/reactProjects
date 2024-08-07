import Button from "./Button";


function Contact() {
    return (
        <>
           <div className="bg-yellow-300 flex flex-col mx-40">
            <div>
                <div className="bg-red-800 text-6xl font-bold">CONTACT US</div>
                <div className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, saepe atque velit, nam nesciunt necessitatibus soluta harum asperiores molestiae cupiditate dicta ratione nemo similique facere iure voluptatum at aperiam, minima aut quisquam! Praesentium aut officiis aperiam voluptas, blanditiis labore commodi at deserunt alias asperiores architecto magnam cupiditate maiores consequatur doloribus.</div>
            </div>
            <div>
                <div>
                    <div className=""><Button btuName="VIA SUPPORT CHAT"/> <Button btuName="btn" /></div>
                    <div ></div>
                </div>
                <div></div>
            </div>
           </div>
        </>
    )
}

export default Contact;