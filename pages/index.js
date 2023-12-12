import {getFeaturedEvents} from './dummy-data';
import EventList from '@/components/events/event-list';
const featuredEvents= getFeaturedEvents();

export default function Homepage(){
    return(
        <div>
          <EventList items = {featuredEvents}/>
        </div>
    )
}