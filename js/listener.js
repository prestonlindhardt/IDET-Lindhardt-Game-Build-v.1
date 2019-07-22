input_ico_locate.addEventListener("click",function(){
    API_request();
});

input_begin_playing.addEventListener("click",function(){
    get_location_1("Location #1");
    
});

input_btn_Location_1.addEventListener("click",function(){
    get_location_1("Location #1");
});
input_btn_Location_2.addEventListener("click",function(){
    get_location_2("Location #2");
});
input_btn_Missed_Date_Location.addEventListener("click",function(){
    get_forecast("Missed Date Location");
});
