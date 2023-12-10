import Link from "next/link"
import classes from '../event-item.module.css';
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
            <div>
                <div>
                    <h2>TITLe</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                        <div>
                            <address>{formattedAddress}</address>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href="/">Explore Event</Link>
                </div>
            </div>
        </li>

    )
}