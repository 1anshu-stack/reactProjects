import React from "react";
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" srcset="" />
                <div>
                    <p>
                        we are your one and only solution to the tech problems
                        you face
                        every day. We are leading tech company whose aim is to
                        increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who are we?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum corrupti fugit molestiae at voluptas. Atque architecto necessitatibus ea id sequi accusamus, accusantium natus, officia neque inventore quos commodi quibusdam ipsa nulla facere asperiores itaque odio dignissimos nihil soluta temporibus nemo impedit. Tempora vel voluptates voluptate distinctio? Exercitationem at recusandae doloremque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas dicta dolores, quos, omnis harum rem magnam tempore quam dolorum impedit iste vitae nisi. Deserunt reprehenderit mollitia iste est maxime.</p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s"
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.5s"
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.7s"
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "1s"
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;