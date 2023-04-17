let app = document.querySelector("#app")
let i
let data= localStorage.data?localStorage.data:[]
let levelSelector=document.createElement("select")
import jishoApi from '../node_modules/npunofficial-jisho-api';
let jisho 
function init(){

    jisho= new JishoAPI();

} 

// jisho.searchForPhrase('日').then(result => {
//   console.log(result);
// });


levelSelector.id="levelSelector"
// children
for(i=5;i>0;i--){
    let opt= document.createElement("option")
    opt.value=`n${i}`
    opt.label=opt.value
    levelSelector.options.add(opt)
}
app.append(levelSelector)
//select level
levelSelector= document.querySelector("#levelSelector")
levelSelector.addEventListener("change",()=>{
    let level = levelSelector.value


})
