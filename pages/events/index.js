import EventList from "@/components/event/event-list";
import { getAllEvents } from "../dummy-data"

export default function AllEventsPage(){
    const events = getAllEvents();
    return(
        <div>
            <EventList items={events}/>
        </div>
    )
}