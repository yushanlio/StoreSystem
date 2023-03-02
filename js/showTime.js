
var linkgoogle = 'https://script.google.com/macros/s/AKfycbyOU3wubtAmEFf1CTV8BwalG8Pz7-hC57lU2Ql5dBy7dq8TrRk5M-cq7Y1dgnrU5XRikA/exec';
document.getElementById('SingUp').onclick = function order(){

console.log(sessionStorage.getItem ('StoreID'));
var a = {
    ID:sessionStorage.getItem ('ID'),//表單ID
    program :'2',
    storeID:sessionStorage.getItem ('StoreID'),//店家ID
    AppointmentPeople:document.getElementById("contactNum").value,//人數
    guestName :document.getElementById("contactName").value,
    guestPhone:document.getElementById("contactPhone").value,
    guestMail:document.getElementById("contactEmail").value,
    FiveNum:"12345"

};
//試算表
console.log(sessionStorage.getItem ('ID'));
alert("OK");    
const ka = $.post(linkgoogle,a ,function(){
   

})
};	    
function myFunction() {

var getStoreData = sessionStorage.getItem('StoreItem');
var getStoreDataAry = JSON.parse(getStoreData);
var selectValue =  document.getElementById("StoreName");
var forTable =  document.getElementById("folio-wrapper");
console.log(getStoreDataAry);
var selectValue2 =  getStoreDataAry[selectValue.value].id;
selectValue.style = "display: none";
setTimeout(function() {
    selectValue.style = "";
  }, 2000)
    //console.log(forTable);
    forTable.innerHTML="請稍後...";
  //alert(selectValue.value);
  var a = {
    id:selectValue2,
    program :2
};

//試算表
console.log("3");
try{
const ka = $.get(linkgoogle,a ,function(result){
    //alert(result);  
    var json = JSON.stringify(result);
    var forTable =  document.getElementById("folio-wrapper");
    
    forTable.innerHTML="";
    var country = [];
     for (var i = 0, len = 30; i < len; i++) {
        var myObj = {
              ID : result[i].id,
            storeID: result[i].name,    
        };	
    country.push(myObj)	;	
    var Time = new Date(result[i].Time);
    var Month = 	Time.getMonth().valueOf()+1;
    var Day = Time.getDay();
    
    if(Day =='0')
        Day='日';
    else if(Day =='6')
        Day='六';
    else if(Day =='5')
        Day='五';
    else if(Day =='1')
        Day='一';
    else if(Day =='2')
        Day='二';
    else if(Day =='3')
        Day='三';
    else if(Day =='4')
        Day='四';
    
     forTable.innerHTML =  forTable.innerHTML+

'<div class="bgrid folio-item" style="height : 200px; ">'+
' <div class="item-wrap"  >'+

'<div style="width:90%;">'+
    
    '<a class="button full-width" id = "btnn">'+(Time.getFullYear()+'-'+Month+'-'+Time.getDate()+"   星期"+Day)+'</a>'+
    '<a class="button stroke full-width" id = "btcc">'+((Time.getHours().toString()).padStart(2,0)+":"+(Time.getMinutes().toString()).padStart(2,0))+'</a> '+
    '<a class="button button-primary full-width">'+'可報名人數 : '+result[i].Num+'</a>'+
    ' </div>	   '+ 
    
    '  <a href="#contact" class="overlay" id = button  onclick="ShowMeDate('+(i)+')">	     '+             	           
        '<div class="folio-item-table">'+
            '<div class="folio-item-cell" >'+
                ' <h3 class="folio-title">報名點我</h3>	 '+    					    
                ' <span class="folio-types">'+
                     ' 一起來玩吧'+
                     ' </span>'+
                     ' </div>	   '+                   	
                     '</div>'+                    
                     ' </a>'+

                     '  </div>'+	               
                     '</div>		'	
                         ;	
    
     if(!result[i+1]) {break;}
     }

     var countryStr = JSON.stringify(country); // 變字串
     //console.log(countryStr); // [{"farmer":"Tom"}]
     localStorage.removeItem('IDItem');
     sessionStorage.removeItem('IDItem');
     sessionStorage.setItem('IDItem', countryStr); 	
    //console.log(countryStr);
    //console.log(result[0].name);

})
}
catch(e){
    forTable.innerHTML="查無資料";
}



};

window.onload = function () {

var a = {
    id:1,
    program :3
};
//試算表
var forTable =  document.getElementById("folio-wrapper");
    forTable.innerHTML ="";

const ka = $.get(linkgoogle,a ,function(result){
    //alert(result);  
    
    var json = JSON.stringify(result);
    //console.log(forTable);
    var store = [];
     for (var i = 0, len = 30; i < len; i++) {
        var myObj = {
              id : result[i].id,
              storeID: result[i].Name,  
              Location:result[i].Location  ,
              part : result[i].Part,
        };	
        store.push(myObj)	;
        var x = document.getElementById("StoreName");
        var option = document.createElement("option");
        option.text = result[i].Name;
        option.value = i;
        x.add(option);
    
    if(!result[i+1]) break;
    }
     var storeStr = JSON.stringify(store); // 變字串
     console.log(storeStr); // [{"farmer":"Tom"}]
     sessionStorage.setItem('StoreItem', storeStr); 	
     console.log(result[0].name);
})
}

function ShowMeDate(r) {
    console.log(r);
    
    var getData = sessionStorage.getItem('IDItem');
    var getDataAry = JSON.parse(getData);



    var forTable = document.querySelectorAll('#btnn');
    var forTable2 = document.querySelectorAll('#btcc');
    var selectValue =  document.getElementById("StoreName");

    //console.log(getDataAry);
　						var Today=new Date();
    var forP = document.querySelectorAll('.lead');
    //console.log(forP);
    forP[1].innerHTML =getDataAry[r].storeID +'<br>'+forTable[r].innerHTML+'<br>'+forTable2[r].innerHTML;
    sessionStorage.setItem ('ID', getDataAry[r].ID);
    sessionStorage.setItem ('StoreID', getDataAry[r].storeID);
    //console.log(getDataAry[r].ID);
    //alert("今天日期是 "+r + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");
}


