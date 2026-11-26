import flowerimg1 from '../assets/flower_image1.jpg'
const About = () =>{
    return(
        <>
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
        </>
    );
};
export default About