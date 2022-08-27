
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='waitingPage'>
        <h1>Wating Board</h1>
        <hr width="30%" align="center" color='blue'></hr>
        <div className='customerInput'>
          <input type="text" placeholder='お名前' className='nameInput'></input>
          <input type="number" placeholder='人数' className='numberInput'></input>
          <select className='tableInput'>
            <option value='テーブル'>テーブル</option>
            <option value='カウンター'>カウンター</option>
            <option value='どちらでも可'>どちらでも可</option>
          </select>
          <button className='inputBtn'>順番待ちする</button>
        </div>
      </div>
      <hr width="100%" align="center" color='blue' size='4'></hr>
      <div className='waitingTablePage'>
        <h2 className='waitingTableTitle'>順番待ち</h2>
        <div className='tableDisplay'>
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
                <td >３</td>
                <td >テーブル</td>
              </tr>
              <tr>
                <td >佐藤</td>
                <td >４</td>
                <td >カウンター</td>
              </tr>
              <tr>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
            </tbody>
          </table>

          <div className='btnDisplay'>
            <button className='cancelBtn'>取り消し</button>
            <button className='cancelBtn'>取り消し</button>
            <button className='cancelBtn'>取り消し</button>
            <button className='cancelBtn'>取り消し</button>
            <button className='cancelBtn'>取り消し</button>
            <button className='cancelBtn'>取り消し</button>
          </div>

          <div className='btnDisplay'>
            <button className='guidanceBtn'>案内</button>
            <button className='guidanceBtn'>案内</button>
            <button className='guidanceBtn'>案内</button>
            <button className='guidanceBtn'>案内</button>
            <button className='guidanceBtn'>案内</button>
            <button className='guidanceBtn'>案内</button>
          </div>
        </div>
      </div>
      <hr width="100%" align="center" color='blue' size='4'></hr>
      <div className='eatingPage'>
        <h2 className='eatingTitle'>食事中</h2>
        <div className='tableDisplay'>
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
                <td >３</td>
                <td >テーブル</td>
              </tr>
              <tr>
                <td >佐藤</td>
                <td >４</td>
                <td >カウンター</td>
              </tr>
              <tr>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
            </tbody>
          </table>

          <div className='btnDisplay'>
            <button className='checkBtn'>お会計(退店)</button>
            <button className='checkBtn'>お会計(退店)</button>
            <button className='checkBtn'>お会計(退店)</button>
            <button className='checkBtn'>お会計(退店)</button>
            <button className='checkBtn'>お会計(退店)</button>
            <button className='checkBtn'>お会計(退店)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
