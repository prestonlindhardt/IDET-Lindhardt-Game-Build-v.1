
function router(value){
    
    hide_all_views();
    
    switch(value) {
      case "view_landing":
            console.log("Show the landing UI view");
            view_landing.classList.remove("d-none");
        break;
      case "sign_into_bruinmail":
            console.log("sign into bruinmail");
         view_location_1.classList.remove("d-none");
        break;
            
        case "view_location_1":
        console.log("Show the map for location 1");
         view_location_1.classList.remove("d-none");
        break;
      case "view_location_2":
   
            console.log("Show the location 2");
            view_location_2.classList.remove("d-none");
          
        break;
            case "view_missed_date_location":
   
            console.log("Show the missed date location");
            view_missed date location.classList.remove("d-none");
          
        break;
      default:
  
            console.log("Error: The requested view is not recognized by the router");
    }
}

function hide_all_views(){
    view_landing.classList.add("d-none");
    view_loading.classList.add("d-none");
    view_location_1.classList.add("d-none");
    view_location_2.classList.add("d-none");
    view_missed_date_location.classList.add("d-none");
    
   
}
