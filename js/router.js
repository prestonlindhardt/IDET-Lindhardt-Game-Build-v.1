
function router(value){
    
    hide_all_views();
    
    switch(value) {
      case "view_landing":
            console.log("Show the landing UI view");
            view_landing.classList.remove("d-none");
        break;
      case "Sign_into_Bruinmail":
            console.log("Show the forecast UI view");
            view_forecast.classList.remove("d-none");
        break;
      case "view_settings":
   
            console.log("Show the settings UI view");
            view_settings.classList.remove("d-none");
          
        break;
      default:
  
            console.log("Error: The requested view is not recognized by the router");
    }
}

function hide_all_views(){
    view_landing.classList.add("d-none");
    view_loading.classList.add("d-none");
    view_forecast.classList.add("d-none");
    view_settings.classList.add("d-none");
    
   
}
