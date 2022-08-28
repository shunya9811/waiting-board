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
  constructor(props){
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleGuidance = this.handleGuidance.bind(this)
  }

  handleCancel(index){
    this.props.cancel(index)
  }

  handleGuidance(index){
    this.props.guidance(index)
  }

  render(){
    let wating = this.props.wating
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
              {wating.map((customer, index) => 
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.number}</td>
                  <td>{customer.table}</td>
                  <div className='buttonDisplay'>
                    <button className='cancelBtn' onClick={() => this.handleCancel(index)}>取り消し</button>
                    <button className='guidanceBtn' onClick={() => this.handleGuidance(index)}>案内</button>
                  </div>
                </tr>
              )}
            </tbody>
          </table>
          
        </div>
      </>
    )
  }
}

class Eating extends React.Component{
  constructor(props){
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
  }
  
  handleCheck(index){
    this.props.check(index)
  }

  render(){
    let eating = this.props.eating
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
            {eating.map((diner, index) => 
              <tr key={index}>
                <td>{diner.name}</td>
                <td>{diner.number}</td>
                <td>{diner.table}</td>
                <button className='checkBtn' onClick={() => this.handleCheck(index)}>お会計(退店)</button>
                {/*onClickにおいて、引数を与える場合は、アロー関数で関数定義する形にする*/}
              </tr>
            )}
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
      wating: [],
      eating: []
    })
    this.inputCustomer = this.inputCustomer.bind(this)
    this.cancel = this.cancel.bind(this)
    this.guidance = this.guidance.bind(this)
    this.check = this.check.bind(this)
  }

  inputCustomer(name, number, table){
    this.setState({
      //pushはできない 結合するconcatを使う
      wating: this.state.wating.concat({name, number, table})
    })
  }

  cancel(index){
    const arr = this.state.wating.concat()
    arr.splice(index, 1)
    this.setState({
      wating: arr
    })
  }

  guidance(index){
    const arr = this.state.wating.concat()
    const diner = arr[index]
    arr.splice(index, 1)
    this.setState({
      wating: arr,
      eating: this.state.eating.concat(diner)
    })
  }

  check(index){
    //Object.assign形式だと配列ではないので、配列になおしてやる必要がでる
    const arr = this.state.eating.concat()
    arr.splice(index, 1)
    this.setState({
      eating: arr
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
            cancel = {this.cancel}
            guidance = {this.guidance}
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
