import Link from "next/link"
import classes from './event-item.module.css';
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
                        <time>{humanReadableDate}</time>
                        <div className={classes.address}>
                            <address>{formattedAddress}</address>
                        </div>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href="/">Explore Event</Link>
                </div>
            </div>
        </li>

    )
}