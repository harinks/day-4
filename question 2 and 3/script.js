//1. create an xhr object
var request=new XMLHttpRequest();
//step 2. Create a connection
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
//step 3. send a request
//push a api from client to server
request.send();
//step 4. once data sucessfully recieved from server
request.onload=function(){
    var data = JSON.parse(request.response)
    for(i=0;i<data.length;i++){
        console.log((i+1)+"."+data[i].flag)
        console.log(data[i].name+"-"+data[i].region+","+data[i].subregion+","+data[i].population)
    }
}