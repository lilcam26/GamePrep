import './App.css';

function App() {

  const clear = (event) => {
    if (event.target.value == "Password" || event.target.value == "Email"){
      event.target.value = "";
    }
    };

  const reset1 = (event) => {
      if (document.getElementById("input1").value == ""){
        document.getElementById("input1").value = "Email";
      }
    };

  const reset2 = (event) => {
        if (document.getElementById("input2").value == ""){
          document.getElementById("input2").value = "Password";
        }
    };
  

  const SIanim = (event) => {
    console.log(document.getElementById("input1").value)
    console.log(document.getElementById("input2").value)
    event.target.style.width = "22vw";
    event.target.style.height = "8vw";
    event.target.style.marginLeft = "5.5vw";
    event.target.style.marginTop = "16vw";
    event.target.style.fontSize = "3.2vw";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    setTimeout(() => {
      event.target.style.width = "25vw";
      event.target.style.height = "10vw";
      event.target.style.marginLeft = "4vw";
      event.target.style.marginTop = "15vw";
      event.target.style.fontSize = "3.5vw";
    }, 200)

    

    };


  return (
    <div className="App">
      <svg
        width="18%"
        height="100"
        viewBox="0 0 1193 1084"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
      >
        <path
          d="M594.554 116.215L524.816 224.915L500.483 260H357.151H356.881L356.612 260.029L353.631 260.352C295.491 266.654 211.608 293.826 140.315 355.236C67.0839 418.317 9.33283 515.847 5.67083 655.919C1.97559 797.262 58.586 899.185 131.814 967.241C203.226 1033.61 289.404 1067.11 349.31 1078.02L354.242 1078.92L354.686 1079H355.138H606.027H608.809L610.275 1076.64L790.86 785.636L795.599 778H786.612H661.304H658.591L657.112 780.275L541.56 958H365.964C325.075 949.533 264.102 924.999 214.187 878.609C163.983 831.951 123.925 762.541 126.63 659.081C129.368 554.351 170.951 488.549 219.285 446.914C268.216 404.765 326.287 385.703 363.664 381H870.5H875.5V380.638C877.634 380.877 879.802 381 882 381C914.713 381 941 353.783 941 320.5C941 287.217 914.713 260 882 260C879.802 260 877.634 260.123 875.5 260.362V260H870.5H646.068L731.716 126.5H912.926C938.89 132.936 977.516 149.861 1009.35 180.426C1041.86 211.646 1068.08 257.566 1066.66 326.251C1065.23 395.862 1038.19 438.63 1007.46 465.666C976.316 493.069 939.253 505.945 915.61 509.5H523.095H520.207L518.764 512.001L467.707 600.5H382.012H377.012V600.648C375.522 600.55 374.017 600.5 372.5 600.5C337.798 600.5 308.509 626.733 308.509 660.5C308.509 694.1 337.121 721.5 372 721.5C373.686 721.5 375.358 721.436 377.012 721.31V721.5H382.012H534.705H537.593L539.036 718.999L590.092 630.5H922.987H923.288L923.587 630.464L926.9 630.064C971.214 624.716 1034.07 603.421 1087.39 556.509C1142.59 507.938 1185.47 433.54 1187.64 328.749C1189.82 223.03 1147.62 145.451 1093.15 93.1488C1040.34 42.4333 976.766 15.9591 931.811 6.73474L926.291 5.60204L925.793 5.5H925.286H668H665.26L663.786 7.80881L594.554 116.215Z"
          fill="black"
          stroke="black"
          strokeWidth="10"
        />
      </svg>
      <h1 className="title">Welcome to Gameprep</h1>
      <h2 className="sub">The Player's Playbook</h2>

      <div className = "SIbox"> 
        <h1 className="SIhead">Get Started</h1>
        <h1 className="SIsub">This sign in is only allowed with an email invite</h1>
        <input className="email" id="input1" type="text" defaultValue="Email" onBlur={reset1} onClick={clear}></input>
        <input className="password" id="input2" type="text" defaultValue="Password" onBlur={reset2}onClick={clear}></input>
        <button onClick={SIanim} id="SIbut" className='SIbutton'>Sign In</button>
      </div>

      <div className='termFlex'>
        <button id="item1">Trademark</button>
        <button id="item">FAQ</button>
        <button id="item">Privacy</button>
        <button id="item">Team Registration</button>

      </div>

    </div>
  );
}


export default App;
