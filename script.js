let app = document.querySelector("#app")
let i
let data= localStorage.data?localStorage.data:[]
let levelSelector=document.createElement("select")
// import jishoApi from './node_modules/unofficial-jisho-api';
// let jisho = new jishoApi();



// // jisho.searchForPhrase('日').then(result => {
// //   console.log(result);
// // });


levelSelector.id="levelSelector"
// children
i= document.createElement('option')
i.label="choose a level"
levelSelector.options.add(i)
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
    let url= 'https://jisho.org/api/v1/search/words?keyword=%23jlpt-'+ level
    console.log(url)
fetch(url,{
    method: "GET", 
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    }
  })
.then(res=>{console.log(res)})



})