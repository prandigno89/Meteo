var key = "3514e99dafd840c206746328103ff0a9";
$(//start zepto
	
	function(){
        
        $('#meteo').on('click', function(){chiamaMeteo()});
        
        	
    }
    
       
    
);//end zepto

//Funzione per la chiamata meteo
function chiamaMeteo(){
    //chiamata:http://api.openweathermap.org/data/2.5/weather?q=Milan&appid=
    var url= "http://api.openweathermap.org/data/2.5/weather?q=Milano&units=metric&appid=";
    
    $.getJSON(url+key, function(data){
    console.log(data)
    var city = data.name;
    var descrizione = data.weather[0].description;
    var icona = data.weather[0].icon;
    var temperatura = data.main.temp;
    //var nome = data.main.name
    console.log(city + ", "+ descrizione + ", " + icona + ", "+ temperatura);
    
    var img = "<p><img style=\"float: left; margin: 0px 15px 15px 0px;\" src=\'icone\\day\\01d.png\'>";
    var descr="<h3>"+city+"</h3><h5>"+descrizione+"</h5><h3>"+temperatura+" &deg;C</h3></p>"
    
           
    $('#esito').html(img+descr);
    
    //alert(descrizione + ", "+ icona + ", " + nome);
    
    
})
    
}