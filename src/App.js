// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,button ,Row,Col,Navbar,Nav,NavDropdown,Carousel,ExampleCarouselImage,CardGroup,Card,ProgressBar,Accordion} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import myimg1 from './img/i1.png';
import myimg2 from './img/i2.jpg';
import myimg3 from './img/i3.jpg';
import myimg4 from './img/i4.jpg';
import myimg5 from './img/i5.jpg';
import myimg6 from './img/i6.jpg';
import myimg7 from './img/i7.jpg';
import myimg8 from './img/i20.png';
import myimg9 from './img/i21.png';
import myimg10 from './img/i22.png';
import myimg11 from './img/i23.png';








import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { IoBarChartSharp } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { SlHome } from "react-icons/sl";
import { FaChartPie } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiBaseStationLine } from "react-icons/ri";
import { ImHeadphones } from "react-icons/im";
import { FaPlayCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const option={
    responsive:{
        0:{
            items:1,
            dots:false,
            autoplay:true,
            autoplayTimeout:1000,
        },
        600:{
            items:2,
            dots:false,
            autoplay:true,
            autoplayTimeout:1000,
        },
        1000:{
            items:5,
            dots:false,
            autoplay:true,
            autoplayTimeout:1000,
        }
    }
}

function App(){
    return(
      
        <>
       
 
    <div className="bgblue">
    <Container>
    <div className="row py-3">

<div className="col-lg-9 col-md-9 Me-5 text-center lg-me-5 text-center col-xs-12   text-lg-start text-center  right_text">
    <i className=" me-2 "><FaHome></FaHome></i>
    <span className="me-3 ">56 Road Kurigram Street, 60 New York, UK</span>
 
    <i className=" text-xs-center text-sm-start"><IoIosCall></IoIosCall></i>
    <span>+968 556 778 345</span>
</div>

<div className="col-md-auto col-sm-12 ms-auto  text-center social_icon">
  <a href="#"><FaFacebookF></FaFacebookF></a>
  <a href="#"><IoLogoTwitter></IoLogoTwitter></a>
  <a href="#"><IoLogoInstagram></IoLogoInstagram></a>
  <a href="#"><FaThreads></FaThreads></a> 
  <a href="#"><FaTiktok></FaTiktok></a>
  
  
</div>
</div>
        </Container>
    </div>
    {/* ----------------------------------------------- */}
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div>
        <img src={require ('./img/i1.png')}></img>

        </div>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto m-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Page</Nav.Link>
            <Nav.Link href="#home">Gallery</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#home"><IoSearch></IoSearch></Nav.Link>
            <div>
            <button className="btn2">Free Estimate</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    {/* -------------------------------------------------------- */}
    <div className="slider_img">
    <Carousel>
        <Carousel.Item>
          <img src={require('./img/i2.jpg')} style={{width:"100%",height:"70%"}}></img>
          <Container>
          <Carousel.Caption className="slider_center">
            <h3 className="slider_h">Make Your Business Perfect WordPress Site</h3>
            <p className="slider_n">Nulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="slider_btn">
            <button className="btn1">Contant Now</button>
            </div>
          </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./img/i3.jpg')} style={{width:"100%",height:"70%"}}></img>
          <Container>
          <Carousel.Caption>
            <h3 className="slider_h">Generate Engaging content Through.</h3>
            <p className="slider_n">Nulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdum.</p>

          <div className="slider_btn">         
          <button className="btn1">Contant Now</button>
          </div>  
          </Carousel.Caption>
          </Container>
        </Carousel.Item>
      </Carousel>

    </div>
   

      {/* ----------------------------------- */}
    <section>
        <Container>
        <div class="sec_title">
      <p class="h1 text-center main_title">Our Feature</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </Container>
    </section>
{/* ----------------------------------------------- */}

{/* -------------------------------------- */}
<Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="card_back border-0">
        <Card.Body className="card_1">
        <div className="our_i1"> <RiComputerLine ></RiComputerLine >     </div>     

        <h1 className="front_title">Awesome Work Place</h1>
          <Card.Text className="front_text">
          Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore et dolore magna.
          <button className="btn3">READ MORE</button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="card_back border-0">
        <Card.Body className="card_2">
        <div className="our_i2"><IoBarChartSharp></IoBarChartSharp>    </div> 
        <h1 className="front_title">Unlimited facility</h1>
              <Card.Text className="front_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore et dolore magna.
              <button className="btn3">READ MORE</button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="card_back border-0 ">
        <Card.Body className="card_3">
        <div className="our_i3"><FaComputer ></FaComputer>     </div> 
        <h1 className="front_title">Responsive Design</h1>
              <Card.Text className="front_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore et dolore magna.
              <button className="btn3">READ MORE</button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </CardGroup>
    </Row>
    </Container>
    {/* ------------------------------------------ */}
    <div className="bgsky1">
      <Container>
        <Row>
          <Col className="abo_info m-5" lg={6} md={6} sm={12} >
          <img src={require('./img/i4.jpg')} style={{width:"90%"}}></img> 
          </Col>
          <Col>
          <div className="ser_part2 m-4">
          <h1>Why We Are Different?</h1>
          <div>
            
          </div>

            <h1 className="abo_dark"><a className="ser_icon"><SlHome ></SlHome></a>Our Company History</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</h1>

             <h1 className="abo_dark"><a className="ser_icon"><IoBarChartSharp></IoBarChartSharp></a>Our Success Mission</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</h1>

            <h1 className="abo_dark"><a className="ser_icon"><FaChartPie></FaChartPie></a>Our Future Plan</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</h1>
            <ProgressBar variant="info" now={90} />
             <h6>Support</h6>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/* ---------------------------------------- */}
    <section>
        <Container>
        <div class="sec_title m-5">
      <p class="h1 text-center main_title">Our Service</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </Container>
    </section>
{/* ------------------------------------- */}
<Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i1"> <RiComputerLine ></RiComputerLine >     </div>     

        <h1 className="back_title">CLEAN DESIGN</h1>
          <Card.Text className="back_text">
          Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore .
          <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i2"><MdPeopleOutline></MdPeopleOutline>    </div> 
        <h1 className="back_title">CREATIVE IDEA</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore .
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i2"><FaChalkboardTeacher></FaChalkboardTeacher>    </div> 
        <h1 className="back_title">COMMUNICATION</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i2"><HiOutlinePhotograph></HiOutlinePhotograph>    </div> 
        <h1 className="back_title">PHOTOGRAPHY</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i2"><RiBaseStationLine></RiBaseStationLine>    </div> 
        <h1 className="back_title">ONLINE MARKETING</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0 ">
        <Card.Body className="main_1">
        <div className="sit_i3"><ImHeadphones ></ImHeadphones>     </div> 
        <h1 className="back_title">UNLIMITED SUPPORT</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </CardGroup>
    </Row>
    </Container>

    {/* ---------------------------------------- */}
    <section>
        <Container>
        <div class="sec_title m-5">
      <p class="h1 text-center main_title">Our Portfolio</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="btn6">All Work</button>      <button className="btn5">Branding</button>      <button className="btn5">Photoshop</button>      <button className="btn5">Web Design</button>      <button className="btn5">Wordpress</button>
      
    </div>
        </Container>
    </section>
{/* ------------------------------------- */}
<Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0">
        <Card.Body className="img_1">
        <div className="our_i1_img"> 
        <img src={require('./img/i5.jpg')} style={{width:"100%"}}></img> 
   </div>     

        <h1 className="front_v">Amalia Edinson</h1>
        <p className="font_t">Marketing Manager</p>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0">
        <Card.Body className="img_2">
        <div className="our_i2_img">
        <img src={require('./img/i6.jpg')} style={{width:"100%"}}></img> 
  </div> 
        <h1 className="front_v">Marian Chirs</h1>
        <p className="font_t">Funder</p>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0 ">
        <Card.Body className="img_3">
        <div className="our_i3_img">
        <img src={require('./img/i7.jpg')} style={{width:"100%"}}></img> 
    </div> 
        <h1 className="front_v">Maria Andaloro</h1>
        <p className="font_t">Support</p>
        </Card.Body>
      </Card>
      </Col>
    </CardGroup>
    </Row>
    </Container>
    {/* -------------------------------------------- */}
  
<section className="bg-black p-5">
    <Container>
  <Row>
    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
           <div className="count_icon">
              <img src={require ('./img/i20.png')}></img>
              <p className="count_text">Happy Customers</p>
              <p className="count">130+</p>
            </div>
            </Col>

    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="count_icon">
              <img src={require ('./img/i21.png')}></img>
              <p className="count_text">Employer Solutions</p>
              <p className="count">60+</p>
            </div>
            </Col>

    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="count_icon">
              <img src={require ('./img/i22.png')}></img>
              <p className="count_text">Online Support</p>
              <p className="count">30+</p>
            </div>
            </Col>

    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="count_icon">
              <img src={require ('./img/i23.png')}></img>
              <p className="count_text">Project Completed</p>
              <p className="count">33+</p>
            </div>  
            </Col>
    </Row>
    </Container>
  </section>
    {/* ----------------------------------------------- */}
    <section>
        <Container>
        <div class="sec_title m-5">
      <p class="h1 text-center main_title">Frequently Asked Questions</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </Container>
    </section>
    {/* ------------------------------------------------- */}

    <Container>
      <Row>
      <Col className="abo_info m-3" lg={6} md={6} sm={12} >
          <img src={require('./img/i8.jpg')} style={{width:"90%"}}></img> 
          </Col>
          <Col>
          <div className="accordion1 m-3">
      <Accordion defaultActiveKey="2">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do You Need A Business Service?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item> 
    </Accordion>
    </div>
    </Col>
      </Row>
    </Container>
    {/* --------------------------------------------- */}
    <div className="slider3">
    <Container>
    <OwlCarousel className='owl-theme' {...Option} loop margin={10} nav>
    <div class='item'>
    <img src={require('./img/i9.png')}  style={{width:"50%"}} ></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i11.png')}  style={{width:"50%"}} ></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i12.png')}  style={{width:"50%"}} ></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i13.png')}  style={{width:"50%"}} ></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i11.png')}  style={{width:"50%"}} ></img> 
    </div>
</OwlCarousel>;
    </Container>
</div>
    {/* -------------------------------------------------------------------------------- */}
   <section className="count2 bg-black">
      <Container>
      <Col>
            <div className="play_icon">
              <FaPlayCircle></FaPlayCircle>
              <p className="icon_text">Get Introduction</p>
            </div>
            </Col>
    </Container>
   </section>
   {/* --------------------------------------------------------------- */}
   <section>
   <div className="slider_next">
      <Container>
        <Row>
          <Col className="abo_info m-5" lg={6} md={6} sm={12} >
          <img src={require('./img/i14.jpg')} style={{width:"90%"}}></img> 
          </Col>
          <Col>
          <div className="ser_part2 ">
          <div>  
          </div>
             <h1 className="slider2_dark"><a className="ser_icon"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></a>Execllent!!</h1>
            <h1 className="pro_des1">Labore sed dolore magna aliquay enim ad minim veniam quis nostr exercitation well laboris ni ut aliquip ex reprehen deritin voluptate. minim veniam.</h1>
            <img src={require('./img/i24.png')} style={{width:"10%"}}></img> 
             <h6 className="slider_n">Donald James</h6>
             <p className="slider_per">Designer</p>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
    </section>
    {/* ----------------------------------------------------------- */}
  <section className="bg-black">
<Container>
  <Row>
    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
           <div className="footer_icon">
              <img src={require ('./img/i15.png')}></img>
              <p className="footer_text">There are many vari of pass of lorem ipsum availab majority have suffered in some form by injected humour or words.</p>
              <p className="footer"><FaFacebookF></FaFacebookF><IoLogoTwitter></IoLogoTwitter><IoLogoInstagram></IoLogoInstagram></p>
            </div>
           </Col>
    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="footer_icon">
              <p className="footer">Links</p>
              <p className="footer">About</p>
              <p className="footer">FAQ's</p>
              <p className="footer">Links</p>
              <p className="footer">Links</p>
            </div>
          </Col>
     <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="footer_icon">
              <p className="footer">Contact</p>
              <p className="footer"><FaMapMarkerAlt></FaMapMarkerAlt> 56 Road Kurigram Street, 60 New York, UK</p>
              <p className="footer"><IoIosCall></IoIosCall> +968 556 778 345</p>
              <p className="footer"><IoIosMail></IoIosMail> demo@gmail.com</p>
          </div>
        </Col>
    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="footer_icon">
              <p className="footer">Newsletter</p>
              <p className="footer">Subscribe to Our Newsletter for Daily News and Updates</p>
              <button className="btn7">Send Request</button> 
            </div>  
          </Col>
      </Row>
    </Container>
   </section>

        </>
    );
}
export default App;