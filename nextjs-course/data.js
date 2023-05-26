const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: 'Learn to code in 2021, get a job, and have fun along the way',
    location: 'Some Street 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: '/images/coding-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Networking for everyone',
    description: 'Learn to code in 2021, get a job, and have fun along the way',
    location: 'Some Street 25, 12345 San Somewhereo',
    date: '2021-05-18',
    image: '/images/nertwork-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e3',
    title: 'Web for everyone',
    description: 'Learn to code in 2021, get a job, and have fun along the way',
    location: 'Some Street 25, 12345 San Somewhereo',
    date: '2021-05-20',
    image: '/images/web-event.jpg',
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
  return filteredEvents;
}


