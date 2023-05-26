import Link from 'next/link';
import classes from './event-item.module.css';

const EventItem = (props) => {
  const { id, title, date, location, image } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exportedLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exportedLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
