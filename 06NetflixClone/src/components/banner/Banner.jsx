import "./banner.css"

function Banner() {
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner_content">
                <h1 className="banner_title">Movie name</h1>
                <div className="banner_">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">This is a test description</h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;