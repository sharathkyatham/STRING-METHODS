import './App.css';


function App() {

  return (
  <div className='App'>
    
    <div className="marquee-container">
      <div className="marquee-content">
        <span>STRING METHODS</span>
      </div>
    </div>

    <button onClick={()=>{
      let rcbfriend = "Ee Saala Cup Naamdhe..!"
      let cskfriend = "Adhi Avvadhamma..🤣🤣🤣🤣"
      console.log(rcbfriend.toUpperCase());
      console.log(cskfriend.toLowerCase());
    }}>Upper/LowerCase</button>

    <button onClick={()=>{
      let bhalkaTeertha = "    BhalkaTeertha: place where lord Krishna was hit by an arrow by a hunter.           "
      console.log(`----->${bhalkaTeertha.trim()}<-----`);
      console.log(`----->${bhalkaTeertha.trimStart()}<-----`);
      console.log(`----->${bhalkaTeertha.trimEnd()}<-----`);
    }}>Trim/Trimstart</button>

    <button onClick={()=>{
      let goldenCity = "Dwaraka"
      console.log(goldenCity.padStart(30,"D"));
      console.log(goldenCity.padEnd(30,"a"));
    }}>PadStart/End</button>

    <button onClick={()=>{
      let firstName = "Sharath "
      let lastName = "Kyatham"
      console.log(firstName.concat(lastName));
    }}>Concat</button>

    <button onClick={()=>{
      let myCity = "Nizamabad fort,also known as Nizamabad or(INDURU) of quilla, was build by Rashtrakuta Kings situated at South West of Nizamabad."
     console.log(myCity.replace("Nizamabad","Induru"));
     console.log(myCity.replaceAll("Nizamabad","Induru"));
    }}>Replace/ReplaceAll</button>

    <button onClick={()=>{
      let slogan = "Hare Krishna....! "
      console.log(slogan.repeat(51));
    }}>Repeat</button>

    <button onClick={()=>{
      let myCity = "Nizamabad fort,also known as Nizamabad or(INDURU) of quilla, was build by Rashtrakuta Kings situated at South West of Nizamabad."
      console.log(myCity.split(" "));
    }}>Split</button>

    <button onClick={()=>{
      let nzbVillages = "Nizamabad district has 922 villages which are administered in 36 mandals."
      console.log(nzbVillages.slice(22,35));
      console.log(nzbVillages.substring(62,72));
      console.log(nzbVillages.substr(22,72));
    }}>Slice/SubString/Substr</button>

    <button onClick={()=>{
      let myCity = "Nizamabad fort,also known as Nizamabad or(INDURU) of quilla, was build by Rashtrakuta Kings situated at South West of Nizamabad,Nizamabad district has 922 villages which are administered in 36 mandals."
      console.log(myCity.length);
    }}>Length</button>

    <button onClick={()=>{
      let nzbVillages = "Nizamabad district has 922 villages which are administered in 36 mandals."
      for (let i = 0; i < nzbVillages.length; i++){
        console.log(nzbVillages.charAt(i));
      }
      console.log(nzbVillages.charAt(23));
      console.log(nzbVillages.charAt(24));
      console.log(nzbVillages.charAt(25));
    }}>CharAt</button>

    <button onClick={()=>{
      let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      for(let i = 0; i < alphabets.length;i++){
        console.log(`for this letter ${alphabets.charAt(i)} unicode assigned is ${alphabets.charCodeAt(i)}`);
      }
    }}>charcodeAt</button>

    <button onClick={()=>{
      let name = "Mr. Sharath Kyatham"
      console.log(name.startsWith("Mr."));
      console.log(name.endsWith(" "));
      console.log(name.includes("Kyatham"));
    }}>Starts/Endswith/Includes</button>

    <button onClick={()=>{
      let name = "Mr. Sharath Kyatham"
      console.log(name.search(/sharath/i));
    }}>Search</button>
    </div>
  );
}

export default App;
