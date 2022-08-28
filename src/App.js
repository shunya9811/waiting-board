import React from 'react';
import './App.css';

class WaitingInput extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      name: "",
      number: "",
      table: "テーブル"
    })
    this.handleName = this.handleName.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
    this.handleTable = this.handleTable.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleName(e){
    this.setState({
      name: e.target.value
    })
  }

  handleNumber(e){
    this.setState({
      number: e.target.value
    })
  }

  handleTable(e){
    this.setState({
      table: e.target.value
    })
  }

  handleClick(){
    this.props.inputCustomer(this.state.name, this.state.number, this.state.table)
    this.setState({
      name: "",
      number: "",
      table: "テーブル"
    })
  }

  render() {
    return (
      <>
        <div className='customerInput'>
          <input type="text" placeholder='お名前' className='nameInput' value={this.state.name} onChange={this.handleName}></input>
          <input type="number" placeholder='人数' className='numberInput' value={this.state.number} onChange={this.handleNumber} min="1"></input>
          <select className='tableInput' value={this.state.table} onChange={this.handleTable}>
            <option value='テーブル'>テーブル</option>
            <option value='カウンター'>カウンター</option>
            <option value='どちらでも可'>どちらでも可</option>
          </select>
          <button className='inputBtn' onClick={this.handleClick}>順番待ちする</button>
        </div>
      </>
    )
  }
}

class Wating extends React.Component{
  displayCustomer(){
    const customer = [];
    for (let i = 0; i < this.props.wating.length; i++){
      customer.push(<tr
                      key={i}
                      >
                      <td>{this.props.wating[i].name}</td>
                      <td>{this.props.wating[i].number}</td>
                      <td>{this.props.wating[i].table}</td>
                      <div className='buttonDisplay'>
                        <button className='cancelBtn'>取り消し</button>
                        <button className='guidanceBtn'>案内</button>
                      </div>
                    </tr>)
    }
    return customer;
  }

  
  
  render(){
    return (
      <>
        <div className='tableDisplay'>
          <table>
            <thead>
              <tr>
                <th >名前</th>
                <th >人数</th>
                <th >テーブル</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >高橋</td>
                <td >3</td>
                <td >テーブル</td>
                <div className='buttonDisplay'>
                  <button className='cancelBtn'>取り消し</button>
                  <button className='guidanceBtn'>案内</button>
                </div>
              </tr>
              <tr>
                <td >佐藤</td>
                <td >4</td>
                <td >カウンター</td>
                <div className='buttonDisplay'>
                  <button className='cancelBtn'>取り消し</button>
                  <button className='guidanceBtn'>案内</button>
                </div>
              </tr>
              {this.displayCustomer()}
            </tbody>
          </table>
          
        </div>
      </>
    )
  }
}

class Eating extends React.Component{
  handleCheck(e){
    this.props.check(e.target.key)
  }
  
  displayDiner(){
    const diner = [];
    for (let i = 0; i < this.props.eating.length; i++){
      diner.push(<tr
                  key={i}
                  >
                    <td >{this.props.eating[i].name}</td>
                    <td >{this.props.eating[i].number}</td>
                    <td >{this.props.eating[i].table  }</td>
                    <button className='checkBtn' >お会計(退店)</button>
                  </tr>) 
    }
    return diner
  }

  render(){
    return(
      <>
        <table className='table'>
          <thead>
            <tr>
              <th >名前</th>
              <th >人数</th>
              <th >テーブル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >高橋</td>
              <td >3</td>
              <td >テーブル</td>
              <button className='checkBtn'>お会計(退店)</button>
            </tr>
            <tr>
              <td >佐藤</td>
              <td >4</td>
              <td >カウンター</td>
              <button className='checkBtn'>お会計(退店)</button>
            </tr>
            {this.displayDiner()}
          </tbody>
        </table>
        
      </>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      wating: [{name: "高橋", number: "3", table: "どちらでも可"}],
      eating: [{name: "高橋", number: "3", table: "どちらでも可"}]
    })
    this.inputCustomer = this.inputCustomer.bind(this)
  }

  inputCustomer(name, number, table){
    this.setState({
      //pushはできない 結合するconcatを使う
      wating: this.state.wating.concat({name, number, table})
    })
  }

  check(index){
    this.setState({
      eating: this.state.eating.splice(index, 1)
    })
  }

  render(){
    return (
      <div className="App">
        <div className='waitingPage'>
          <h1>Wating Board</h1>
          <hr width="30%" align="center" color='blue'></hr>
          <WaitingInput
            inputCustomer = {this.inputCustomer}
          />
        </div>
        <hr width="100%" align="center" color='blue' size='4'></hr>
        <div className='waitingTablePage'>
          <h2 className='waitingTableTitle'>順番待ち</h2>
          <Wating 
            wating = {this.state.wating}
          />
        </div>
        <hr width="100%" align="center" color='blue' size='4'></hr>
        <div className='eatingPage'>
          <h2 className='eatingTitle'>食事中</h2>
          <div className='tableDisplay'>
            <Eating
              eating = {this.state.eating}
              check = {this.check}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
