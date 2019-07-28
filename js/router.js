
function get_location(value){
    
    hide_all_views();
    
    switch(value) {
      case "view_landing":
            console.log("Show the landing UI view");
            //view_landing.classList.remove("d-none");
            view_landing.classList.remove("d-none");
        break;
      case "Sign_into_Bruinmail":
            console.log("sign into bruinmail");
            //view_location_1.classList.remove("d-none");
        break;
            
        case "location_1":
            console.log("Show the location 1");
            //view_location_1.classList.remove("d-none");
            view_content.classList.remove("d-none");
        break;
      case "location_2":
            console.log("Show the location 2");
            //view_location_2.classList.remove("d-none");
          
        break;
            case "view_missed_date_location":
            console.log("Show the missed date location");
            //view_missed date location.classList.remove("d-none");
        break;
      default:
            console.log("Error: The requested view is not recognized by the router");
    }
}

function hide_all_views(){
    view_landing.classList.add("d-none");
    view_content.classList.add("d-none");
}
