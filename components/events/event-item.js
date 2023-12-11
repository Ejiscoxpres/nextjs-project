import Button from '../ui/button';
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';
import ArrowRightIcon from '../icons/arrow-right-icon';
export default function EventItem(props){
    const {title,image,date,location,id} =props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:"numeric",
        month:"long",
        year:"numeric",
    });

    const formattedAddress = location.replace(',', '\n');
    const exploreLink =`/events/${id}`;
    return(
        <li className={classes.item}>
            <img src={"/" + image} alt="title" />
            <div className={classes.content}> 
                <div className={classes.sumary}>
                    <h2>TITLe</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                        <div className={classes.address}>
                            <AddressIcon />
                            <address>{formattedAddress}</address>
                        </div>
                    </div>
                </div>
                <div className={classes.actions}>
                   <Button link={exploreLink}>
                    <span>Exploore Event</span>
                    <span className={classes.icon}><ArrowRightIcon />
                    </span>
                    </Button>
                </div>
            </div>
        </li>

    )
}