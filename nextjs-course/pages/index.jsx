import { getFeaturedEvents } from '../data.js';
import EventList from '../components/events/event-list.jsx';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
