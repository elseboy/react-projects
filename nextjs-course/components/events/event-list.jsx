import EventItem from './event-item';

const EventsList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          id={item.id}
          title={item.title}
          date={item.date}
          location={item.location}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventsList;
