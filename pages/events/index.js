import EventList from "@/components/events/event-list";
import { getAllEvents } from "../dummy-data";
import EventSearch from "../../components/events/events-search";
import { Fragment } from "react";

export default function AllEventsPage(){
    const events = getAllEvents();
    return(
        <Fragment>
            <EventSearch />
            <EventList items={events}/>
        </Fragment>
    )
}