import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, FormControl, Button, Form, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <switch>
        <Route exact path="/">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">신발사</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link> <Link to="#">신발종류</Link></Nav.Link>
                  <Nav.Link> <Link to="/detail">신발보기</Link></Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="Jumbo">
            <h1 className="Jumboh1">SPRING, SEASON</h1>
              <p className="p1">
                collection
              </p>
            <p>
              <Button className="Learnbutton" bsStyle="primary">더보기</Button>
            </p>
          </div>

          <div className="container"> 
            <div className="row">
              {
                shoes.map((a,i)=>{
                  return <Card shoes={shoes[i]} i={i} key={i} />
                })
              }
            </div>
          </div> 
          
          <hr/>

          <div class="container">
            <div class="container-md">
              <Card2/>
            </div>
          </div>  

          <hr/>

          <div class="container">
            <div class="container-md">
              <Card3/>
            </div>
          </div>  


          <footer>
            <div class="inner">
              <div class="footer-message">100% AUTHENTIC<br/>

              신발사스토어에서 판매되는 모든 브랜드 제품은 정식제조, 정식수입원을 통해 유통되는 100% 정품임을 보증합니다.</div>
              <div class="footer-contact">주식회사 신발사 (SINBALSA Co., Ltd.) | 사랑시 고백구 행복동 350-2 로빈명품관 지하1층 | 사업자등록번호 : 000-00-00000 |
              통신판매업 : 0000-서울강남-00000 | 대표 : 이선재 | 개인정보관리책임자 : 이선재(senju5585@naver.com) ｜ 호스팅사업자 : (주)신발사</div>
              <div class="footer-copyright">Copyright 2022 © All rights reserved.</div>
            </div>
          </footer>
        </Route>
      </switch>


      <Route path="/detail/:id">

        <Detail shoes={shoes}/>

      </Route>




      

    </div>
  );
}



function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + ( props.i+1) + '.jpg'} width="100%" />
      <h4>{ props.shoes.title }</h4>
      <hr></hr>
      <p>{ props.shoes.content }</p>
      <p>{ props.shoes.price }</p>
    </div>
  )
}



function Card2(props){
  return (
    <div className="container">
      <div className="banner1">
        <br/>
        <p>SINBALSA / 20% SLAE</p>
        <br/>
        <br/>
        <h2 className="bannername">편안한 운동화의<br/>새로운 기준</h2>
        <p>4.18~4.30 까지 20% 세일중</p>
      </div>
    </div>
  )
}

function Card3(props){
  return (
    <div className="container">
      <div className="banner2">
        <br/>
        <p>SINBALSA / NEW</p>
        <br/>
        <br/>
        <h2 className="bannername">쿠폰 지급!<br/>할인쿠폰 10,000원</h2>
        <p>지금 바로 회원가입시 쿠폰 지급!</p>
      </div>
    </div>
  )
}


export default App;
