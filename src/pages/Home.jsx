import slider1 from '../assets/flower_banner1.png'
import slider2 from '../assets/flower_banner2.png'
import slider3 from '../assets/flower_banner3.png'
import flowerimg1 from '../assets/flower_image1.jpg'
import flowerimg2 from '../assets/flower_image2.jpg'
import flowerimg3 from '../assets/flower_image3.jpg'
import flowerimg4 from '../assets/flower_image4.jpg'
import '../assets/css/home.css'

const headingColor = {
    color: "red",
    backgroundColor: "yellow",
    font: "50"
}
const Home = () =>{
    return(
        <>
        <section>
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </section>

        <section className='mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur delectus eos quasi dicta, consequatur dolor perspiciatis distinctio! Culpa mollitia, dolor ipsa accusamus ab commodi nihil asperiores deleniti quia placeat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eveniet repellendus hic corrupti nobis aspernatur vel at provident libero, quisquam consequatur voluptate nostrum doloremque velit atque facilis, fugit debitis molestias!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores accusamus veritatis quasi nihil nobis odio eaque quisquam eligendi, illum nulla modi ipsam placeat est corporis et facere laudantium debitis nesciunt.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={flowerimg1} alt="" />
                    </div>
                </div>
            </div>

        </section>

        <section className="mt-5">
            <div className="container">
                <h1>Services</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                        <img src={flowerimg2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                        <img src={flowerimg3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                        <img src={flowerimg4} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h1 style={{color:"black", backgroundColor:"brown"}}>This in Inline CSS</h1>

            <h1 style={headingColor}>This is Internal CSS</h1>

            <h1 className="my-text">This is external CSS</h1>
        </section>
        </>
    );
};
export default Home