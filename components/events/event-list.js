import EventItem from "./event-item";

export default function Eventlist(props){
    const {items}=props;
    return(

     <ul>
        {items.map(event => <EventItem 
        key={event.id}
        id={event.id} 
        title={event.title} 
        date={event.date}
         image={event.image} 
         location={event.location}/>)}
     </ul>
    )
}