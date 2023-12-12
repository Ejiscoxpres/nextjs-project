import { useRouter } from "next/router";
import { getFilteredEvents } from "../dummy-data";
import Eventlist from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import { Fragment } from "react";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";

export default function FilteredEventPage(filteredEvents){

    const router =useRouter(); 
    const filterData = router.query.slug;

    if (!filterData){
        return <p className="center">Loading...</p>;
    }

        const filteredYear = filterData[0];
        const filteredMonth = filterData[1];

        const numYear = + filteredYear;
        const numMonth = + filteredMonth;

        if(
            isNaN(numYear)||
            isNaN(numMonth)||
            numYear > 2030||
            numYear < 2021||
            numMonth < 1 ||
            numMonth > 12
        ) {
            return <Fragment>

                <ErrorAlert>
                <p>Invlid filter, please adjust your values!</p>;
                </ErrorAlert>

                <div className="center"> 
                            <Button link ='/events'>Show All Buttons</Button>
                          </div>
            </Fragment>

            const filteredEvents = getFilteredEvents({
                year: numYear,
                month: numMonth,
            });
        }


            if(!filteredEvents || filteredEvents.length === 0){
                return(
                    <Fragment>
                          <ErrorAlert>
                          <p>No event found for the chosen filter!</p>;
                          </ErrorAlert>

                          <div className="center"> 
                            <Button link ='/events'>Show All Buttons</Button>
                          </div>
                         

                    </Fragment>
                )
              
            }

       

        const date = new Date(numYear, numMonth -1);
    
    return(
        <Fragment>
            <ResultsTitle date ={date}/>
           <Eventlist items = {filteredEvents} />
        </Fragment>
    )
}