document.addEventListener('DOMContentLoaded', function() {
    const facts = [
        {
            icon: 'fas fa-hourglass-half',
            title: 'Time Dilation',
            content: 'Time passes slower for objects moving at high speeds or in strong gravitational fields, a phenomenon known as time dilation in Einstein\'s theory of relativity.'
        },
        {
            icon: 'fas fa-calendar-alt',
            title: 'Leap Seconds',
            content: 'Occasionally, a leap second is added to Coordinated Universal Time (UTC) to account for the slowing of Earth\'s rotation.'
        },
        {
            icon: 'fas fa-sun',
            title: 'Sidereal Day',
            content: 'A sidereal day, based on Earth\'s rotation relative to distant stars, is about 4 minutes shorter than a solar day.'
        },
        {
            icon: 'fas fa-meteor',
            title: 'Time on Other Planets',
            content: 'A day on Venus is longer than its year. Venus rotates so slowly that it takes 243 Earth days to complete one rotation, but it orbits the Sun every 225 Earth days.'
        },
        {
            icon: 'fas fa-atom',
            title: 'Atomic Clocks',
            content: 'The most accurate clocks in the world are atomic clocks, which measure time based on the oscillations of cesium atoms and are accurate to within one second over millions of years.'
        },
        {
            icon: 'fas fa-clock',
            title: 'Time Zones',
            content: 'Time zones were first introduced in the 19th century to standardize time across different regions and facilitate global communication and transportation.'
        },
        {
            icon: 'fas fa-history',
            title: 'Historical Calendars',
            content: 'Different civilizations throughout history have used various calendars, such as the Mayan calendar, the Chinese calendar, and the Islamic calendar, to track time and organize their societies.'
        },
        {
            icon: 'fas fa-moon',
            title: 'Lunar Phases',
            content: 'The Moon goes through different phases as it orbits the Earth, resulting in the cycle of the lunar month. These phases include new moon, first quarter, full moon, and last quarter.'
        },
        {
            icon: 'fas fa-stopwatch',
            title: 'Chronometers',
            content: 'Chronometers are highly accurate timekeeping devices used in navigation and scientific research. They are designed to maintain precise timekeeping even in harsh conditions.'
        },
        {
            icon: 'fas fa-hourglass-start',
            title: 'Sand Timers',
            content: 'Sand timers, also known as hourglasses, have been used for centuries to measure time. They consist of two glass bulbs connected by a narrow neck, with sand flowing from one bulb to the other.'
        },
        {
            icon: 'fas fa-clock',
            title: 'Circadian Rhythms',
            content: 'Circadian rhythms are internal biological processes that regulate the sleep-wake cycle and other physiological functions. They are influenced by external cues such as light and temperature.'
        },
        {
            icon: 'fas fa-history',
            title: 'Historical Timekeeping',
            content: 'Throughout history, different cultures have used various methods to measure time, including sundials, water clocks, and mechanical clocks.'
        }
    ];

    const factContainer = document.getElementById('factContainer');
    facts.forEach(fact => {
        const factCard = document.createElement('div');
        factCard.className = 'fact-card animate__animated animate__fadeIn';
        factCard.innerHTML = `
            <div class="fact-icon"><i class="${fact.icon}"></i></div>
            <div class="fact-title">${fact.title}</div>
            <div class="fact-content">${fact.content}</div>
        `;
        factContainer.appendChild(factCard);
    });

    const randomFacts = [
        "The Earth's rotation is slowing down. Days are getting longer by about 1.8 milliseconds per century.",
        "The concept of time zones was first proposed in the late 1800s to standardize train schedules.",
        "There's a 26,000-year cycle called precession, which is slowly changing the position of the stars from Earth's perspective.",
        "The fastest spinning pulsar known rotates 716 times per second.",
        "Time moves faster at the top of a building compared to the bottom due to gravitational time dilation.",
        "The speed of light is approximately 299,792,458 meters per second.",
        "The Gregorian calendar, which is widely used today, was introduced by Pope Gregory XIII in 1582.",
        "The term 'nanosecond' refers to one billionth of a second.",
        "The International Date Line is an imaginary line that roughly follows the 180-degree longitude line and separates two consecutive calendar days.",
        "The concept of daylight saving time was first proposed by Benjamin Franklin in 1784.",
        "The atomic clock at the National Institute of Standards and Technology (NIST) is accurate to within one second every 33 million years.",
        "The speed of time is relative and can be influenced by factors such as gravity and velocity.",
        "The concept of a 'leap year' was introduced by Julius Caesar in 45 BCE.",
        "The term 'epoch' is used to refer to a specific point in time, often used as a reference for measuring time intervals.",
        "The first mechanical clock was invented in the 14th century by Richard of Wallingford.",
        "The concept of a 'time capsule' originated in the 19th century as a way to preserve artifacts for future generations.",
        "The time it takes for light to travel from the Sun to the Earth is approximately 8 minutes and 20 seconds.",
        "The concept of 'time travel' has been a popular theme in science fiction literature and movies.",
        "The term 'chronology' refers to the arrangement of events in the order of their occurrence in time.",
        "The concept of 'time dilation' was first proposed by Albert Einstein in his theory of relativity.",
    ];

    
    const randomFactText = document.getElementById('randomFactText');
    const randomFactBtn = document.getElementById('randomFactBtn');

    function showRandomFact() {
        const randomIndex = Math.floor(Math.random() * randomFacts.length);
        randomFactText.textContent = randomFacts[randomIndex];
        randomFactText.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
            randomFactText.classList.remove('animate__animated', 'animate__fadeIn');
        }, 1000);
    }

    randomFactBtn.addEventListener('click', showRandomFact);

    showRandomFact();
});

particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#e94560' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#e94560', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

function updateWorldClock() {
    const timeZones = [
        { city: 'New York', zone: 'America/New_York' },
        { city: 'London', zone: 'Europe/London' },
        { city: 'Tokyo', zone: 'Asia/Tokyo' },
        { city: 'Sydney', zone: 'Australia/Sydney' },
        { city: 'Islamabad', zone: 'Asia/Karachi' },
    ];

    const worldClockContainer = document.getElementById('worldClock');
    worldClockContainer.innerHTML = '';

    timeZones.forEach(tz => {
        const time = new Date().toLocaleTimeString('en-US', { timeZone: tz.zone });
        const clockElement = document.createElement('div');
        clockElement.className = 'clock-item';
        clockElement.innerHTML = `<strong>${tz.city}</strong>: ${time}`;
        worldClockContainer.appendChild(clockElement);
    });
}

setInterval(updateWorldClock, 1000);

function createTimeline() {
    const timelineEvents = [
        { year: '3500 BCE', event: 'Ancient Egyptians create the solar calendar' },
        { year: '45 BCE', event: 'Julius Caesar introduces the Julian calendar' },
        { year: '1582 CE', event: 'Gregorian calendar introduced by Pope Gregory XIII' },
        { year: '1656 CE', event: 'Christiaan Huygens invents the pendulum clock' },
        { year: '1884 CE', event: 'International Meridian Conference establishes global time zones' },
        { year: '1967 CE', event: 'Atomic time becomes the official standard for timekeeping' }
    ];

    const timeline = document.getElementById('timeline');
    timelineEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.innerHTML = `<strong>${event.year}</strong>: ${event.event}`;
        timeline.appendChild(eventElement);
    });
}

createTimeline()