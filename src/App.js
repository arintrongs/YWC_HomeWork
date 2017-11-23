import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.png';
import market from './img/001-market.png';
import design from './img/002-website-design-symbol.png';
import content from './img/003-web-design.png';
import programming from './img/004-coding.png';
import axios from 'axios';
import { Container, Row, Col, Table,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Data extends Component{
  constructor(props){
    super(props);
    this.state={data:[] ,sum : 0,programming : [],marketing:[],design:[],content:[]};
  }

  componentDidMount() {
    this.getData().then(result => this.setState({
      data : result
    }));

  }

  getData(){
    let list = axios.get('https://ywc15.ywc.in.th/api/interview')
                .then((response)=>{
                    return response.data;
                }) ;
    return list;
  }

  getEachMajorData(){

    var pattern = "content";
    let list2 = [];
    for(var i =0;i<this.state.data.length;++i){
      var temp = this.state.data[i];
      if(temp.major === pattern){
        list2.push(temp);
      }
    }
    this.state.content=list2;


    var pattern = "design";
    list2 = [];
    for(var i =0;i<this.state.data.length;++i){
      var temp = this.state.data[i];
      if(temp.major === pattern){
        list2.push(temp);
      }
    }
    this.state.design=list2;

    var pattern = "marketing";
    list2 = [];
    for(var i =0;i<this.state.data.length;++i){
      var temp = this.state.data[i];
      if(temp.major === pattern){
        list2.push(temp);
      }
    }
    this.state.marketing=list2;

    var pattern = "programming";
    list2 = [];
    for(var i =0;i<this.state.data.length;++i){
      var temp = this.state.data[i];
      if(temp.major === pattern){
        list2.push(temp);
      }
    }
    this.state.programming=list2;
  }

  render(){
    this.state.data.sort((a, b) => a.interviewRef.localeCompare(b.interviewRef))
    this.getEachMajorData();
    return (
      <div>
      <Header length={this.state.data.length}/>
      <Announce data={this.state}/>
      </div>
    )
  }
}

class Logo extends Component{
  render(){
    return (
    <Container className="logo-container container-fluid">
      <link href="https://fonts.googleapis.com/css?family=Kanit:200,300,400|Varela+Round" rel="stylesheet" />
      <img src={logo} class="img-fluid" />
    </Container>
    );
  }
}

class Header extends Component{
  render(){
    return(
    <Container className="header-container container-fluid">
      <Row>
        <Col>
          <div class="header2"><center>Semi Final Round </center></div>
          <center>
            <div>ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</div>
            <span class="passed-context">มีผู้ผ่านการคัดเลือกทั้งหมด&nbsp;</span>
            <span class="passed-sum">{this.props.length}</span>
            <span class="passed-context">&nbsp;คน</span>
          </center>
        </Col>
      </Row>
    </Container>
      );
  }
}

class Announce extends Component{
  constructor(props){
    super(props);
    this.state={major:'',menu:true,passed:0};
    this.selectedProgrammingMajor = this.selectedProgrammingMajor.bind(this);
    this.selectedContentMajor = this.selectedContentMajor.bind(this);
    this.selectedDesignMajor = this.selectedDesignMajor.bind(this);
    this.selectedMarketingMajor = this.selectedMarketingMajor.bind(this);
    this.back = this.back.bind(this);
    this.selectedNormal = this.selectedNormal.bind(this);
  }
  selectedProgrammingMajor(){
    this.state.passed = this.props.data.programming.length;
    this.setState({
      major:'programming',
      menu:false,
      special:true
    })
  }
   selectedContentMajor(){
    this.state.passed = this.props.data.content.length;
    this.setState({
      major:'content',
      menu:false,
      special:true
    })
  }
   selectedDesignMajor(){
    this.state.passed = this.props.data.design.length;
    this.setState({
      major:'design',
      menu:false,
      special:true
    })
  }
   selectedMarketingMajor(){
    this.state.passed = this.props.data.marketing.length;
    this.setState({
      major:'marketing',
      menu:false,
      special:true
    })
  }
  selectedNormal(){
    this.setState({
      menu:false,
      special:false
    });
  }
  isMenuOn(){
    if(this.state.menu === true){
      return (
        <Row>
            <Col>
            <br/>
            <br/>
              <div class="passed-context">เลือกสาขาที่ต้องการดูผลการคัดเลือกแบบ 40 ไข่สองฟอง</div>
              <div class="major-select">
              <br/>
                <Row>
                  <Col lg="4"></Col>
                  <Col lg="4">
                    <div class="major-field" >
                      <Row className="content" onClick={this.selectedContentMajor}>
                        <Col lg="4" className="major-img"><img src={content}/></Col>
                        <Col lg="8" className="major-context">Web Content</Col>
                      </Row>
                      <br/>
                      <Row className="content" onClick={this.selectedDesignMajor}>
                        <Col lg="4" className="major-img" ><img src={design}/></Col>
                        <Col lg="8" className="major-context">Web Design</Col>
                      </Row>
                      <br/>
                      <Row className="content" onClick={this.selectedMarketingMajor}>
                        <Col lg="4" className="major-img"><img src={market}/></Col>
                        <Col lg="8" className="major-context">Web Marketing</Col>
                      </Row>
                      <br/>
                      <Row className="content" onClick={this.selectedProgrammingMajor}>
                        <Col lg="4" className="major-img"><img src={programming}/></Col>
                        <Col lg="8" className="major-context">Web Programming</Col>
                      </Row>
                    </div>
                  </Col>  
                  <Col lg="4"></Col>
                </Row>
              </div>
              <br/><br/>
              <div class="passed-context">หรือ...</div>
              <br/><br/>
              <div class="passed-context">ดูผลการคัดเลือกทั้งหมดแบบธรรมดา    <Button color="link" size="lg" onClick={this.selectedNormal}><h1>คลิก</h1></Button></div>
              <br/><br/>
            </Col>
          </Row>
          );
    }
    return null;
  }
  specialResult(){
    var returnVal=[];
    if(this.state.menu===false && this.state.special===true){
      if(this.state.major === 'programming')
        returnVal.push(<Special passed={this.state.passed} data={this.props.data.programming} major={this.state.major}/>);
      if(this.state.major === 'content')
        returnVal.push(<Special passed={this.state.passed} data={this.props.data.content} major={this.state.major}/>);
      if(this.state.major === 'design')
        returnVal.push(<Special passed={this.state.passed} data={this.props.data.design} major={this.state.major}/>);
      if(this.state.major === 'marketing')
        returnVal.push(<Special passed={this.state.passed} data={this.props.data.marketing} major={this.state.major}/>);
      returnVal.push(<div class="back-button"><Button color="danger" onClick={this.back}>Back</Button></div>);
      return returnVal;
    }
  }
  normalResult(){
    var returnVal=[];
    if(this.state.menu===false && this.state.special===false){
      returnVal.push(<Normal data={this.props.data}/>);
      returnVal.push(<div class="back-button"><Button color="danger" onClick={this.back}>Back</Button></div>);
      return returnVal;
    }
  }
  back(){
    this.setState({
      menu:true
    });
  }
  render(){
    return(
      <Container className="announce-container container-fluid">
        {this.isMenuOn()}
        {this.specialResult()} 
        {this.normalResult()}

      </Container>
        
    );
  }
}
class Special extends Component{
  constructor(props){
    super(props);
    this.state = {passed : this.props.passed ,winner:{},result:false,loser:false};
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({passed:nextProps.passed});
  }
  handleChange(event){
    let pattern = event.target.value;
    let list = this.props.data;
    let re = new RegExp(pattern,"g");
    let sum =0;
    let winner;
    for(var i=0 ; i<list.length ;i++ ){
      let concat = list[i].firstName+" "+list[i].lastName;
      if(re.test(concat)===false)
        sum=sum+1
      else{
        winner = list[i];
      }
    }
  
    if(sum < this.props.passed-1){
      this.state.result=false;
      this.setState({passed:this.props.passed-sum,loser:false});
    }
    else{
      console.log(sum,this.props.passed)
      if(sum == this.props.passed){
        this.state.result=true;
        this.setState({loser:true});
      }
      else{
        this.state.result=true;
        this.setState({winner:winner,loser:false});
      }
   }

  }
  preResult(){
    if(this.state.result===false)
      return(
        <div>
          <span class="passed-context pre-result">จำนวนคงเหลือ&nbsp;</span>
          <span class="remaining pre-result">{this.state.passed}</span>
          <span class="passed-context pre-result">&nbsp;คน</span>
        </div>
      );
    return null;
  }

  postResult(){

    if(this.state.result===true && this.state.loser === false)
      return(
        <div>
          <div class="post-result">Congratulations!!</div>
          <span class="winner-name">น้อง {this.state.winner.firstName} {this.state.winner.lastName} </span>
          <span class="winner-info">({this.state.winner.interviewRef})</span>
        </div>);
    else if(this.state.result===true) {
      return(
        <div>
          <div class="post-result">แห้วจ้าาา ไว้โอกาสหน้านะ</div>
        </div>);
    }
    return null;
  }

  render(){
    return (
      <Container className="special-container" >
        <div class="passed-context"> 
          ผู้ผ่านการคัดเลือกสาขา Web {this.props.major} ทั้งหมด {this.props.passed} คน
        </div>
        {this.preResult()}
        {this.postResult()}
        <div class="special-input">
          <FormGroup>
            <Label className="passed-context">ค่อย ๆ ใส่ค่อย ๆ ลุ้นนะจ้ะ (ใส่ ชื่อ เว้นวรรค 1 ครั้ง ตามด้วยนามสกุล)</Label>
            <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" onChange={this.handleChange}/>
          </FormGroup>
        </div>
        
      </Container>
      );
  }
}

class Normal extends Component{
  constructor(props){
    super(props);
    this.state={major:'content'}
    this.selectedDesignMajor = this.selectedDesignMajor.bind(this);
    this.selectedContentMajor = this.selectedContentMajor.bind(this);
    this.selectedMarketingMajor = this.selectedMarketingMajor.bind(this);
    this.selectedProgrammingMajor = this.selectedProgrammingMajor.bind(this);
  }
  selectedContentMajor(){
    this.setState({major:'content'});
  }
  selectedMarketingMajor(){
    this.setState({major:'marketing'});
  }
  selectedDesignMajor(){
    this.setState({major:'design'});
  }
  selectedProgrammingMajor(){
    this.setState({major:'programming'});
  }
  table(){
    var list = [];
    var returnVal = [];
    var tempVal = [];
    if(this.state.major==='content')
      list=this.props.data.content;
    if(this.state.major==='design')
      list=this.props.data.design;
    if(this.state.major==='marketing')
     list=this.props.data.marketing;
    if(this.state.major==='programming')
     list=this.props.data.programming;
    tempVal.push(
        <thead>
          <tr class="table-header">
            <td>Ref ID</td>
            <td>First Name</td>
            <td>Last Name</td>
          </tr>
        </thead>
      );
    for(var i = 0 ;i<list.length;i++){
      returnVal.push(<tr>
        <td>{list[i].interviewRef}</td>
        <td>{list[i].firstName}</td>
        <td>{list[i].lastName}</td>
      </tr>)
    }

    return(
      <Table striped>
        {tempVal}
        <tbody class="table-infoo">
          {returnVal}
        </tbody>
      </Table>
      )
  }
  render(){
    return(
      <Container className="normal-container">
        <Row>
          <Col>
            <span class="normal-header">เลือกสาขาที่ต้องการเลยจ้าา</span>
            <hr/>
          </Col>
        </Row>
        <Row >
          <Col className="normal-major" onClick={this.selectedContentMajor}>
            <img src={content}/><span class="normal-context">Web Content</span>
          </Col>
          <Col className="normal-major" onClick={this.selectedDesignMajor}>
            <img src={design}/><span class="normal-context">Web Design</span>
          </Col>
          <Col className="normal-major" onClick={this.selectedMarketingMajor}>
            <img src={market}/><span class="normal-context">Web Marketing</span>
          </Col>
          <Col className="normal-major" onClick={this.selectedProgrammingMajor}>
            <img src={programming}/><span class="normal-context">Web Prog</span>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Container className="normal-table">
            <div class="normal-header">Web {this.state.major[0].toUpperCase()}{this.state.major.slice(1)}</div>
            {this.table()}
          </Container>
        </Row>
      </Container>
      );
  }
}
class App extends Component {
  render() {
    return (
      // <Data/>
      <div>
      <Logo/>
      <Data/>
      </div>
    );
  }
}

export default App;
