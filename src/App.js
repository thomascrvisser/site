
import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [isDayTime, setIsDayTime] = useState('daytime');


  // useEffect(()=> {
  //   document.title = "thomas visser";
  //   let t = new Date();
  //   if (t.getHours() > 18) {
  //     setIsDayTime('nighttime');
  //   }
  //   const favicon = document.getElementById('fav')
  //   if (isDayTime == 'daytime'){
  //     favicon.href = 'favicon.ico';
  //   }
  //   else {
  //     favicon.href = 'night.ico';
  //   }
  // }, []);

  useEffect(() => {
    document.title = "thomas visser";
    let t = new Date();
    if (t.getHours() >= 18) {
      setIsDayTime('nighttime');
    }
    const favicon = document.getElementById('fav');
    if (isDayTime == 'daytime'){
      favicon.href = 'favicon.ico';
    }
    else {
      favicon.href = 'night.ico';
    }
  }, []);
  return (
    <div className="App" >
      <header className="App-header" id={isDayTime}>
        <p>
          thomas visser is a <a href="https://www.linkedin.com/in/thomas-visser-79981a182/" target="_blank">SOFTWARE ENGINEER</a> at <a href="https://www.lovevery.com" target="blank">LOVEVERY</a> living in  <a href="https://www.google.com/search?q=san+diego" target="_blank">SAN DIEGO</a>. feel free to <a href="mailto:thomascrvisser@gmail.com" target="_blank"> REACH OUT</a>. 
        </p>
      </header>
    </div>
  );
}

export default App;
