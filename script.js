$(document).ready(function() {
    initializeApp();
});

function initializeApp() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded');
    });
    populateTimeZones();
    setupEventListeners();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
}

function populateTimeZones() {
    const timeZones = [
        { zone: 'America/New_York', label: 'New York (EDT)' },
        { zone: 'America/Los_Angeles', label: 'Los Angeles (PDT)' },
        { zone: 'America/Chicago', label: 'Chicago (CDT)' },
        { zone: 'Europe/London', label: 'London (BST)' },
        { zone: 'Europe/Paris', label: 'Paris (CEST)' },
        { zone: 'Asia/Tokyo', label: 'Tokyo (JST)' },
        { zone: 'Asia/Dubai', label: 'Dubai (GST)' },
        { zone: 'Asia/Kolkata', label: 'Mumbai (IST)' },
        { zone: 'Australia/Sydney', label: 'Sydney (AEST)' },
        { zone: 'Pacific/Auckland', label: 'Auckland (NZST)' },
        { zone: 'Asia/Karachi', label: 'Karachi (PKT)' },
        { zone: 'Europe/Berlin', label: 'Berlin (CET)' },
        { zone: 'America/Sao_Paulo', label: 'São Paulo (BRT)' },
        { zone: 'Asia/Shanghai', label: 'Shanghai (CST)' },
        { zone: 'Europe/Moscow', label: 'Moscow (MSK)' },
        { zone: 'Africa/Cairo', label: 'Cairo (EET)' },
        { zone: 'Africa/Johannesburg', label: 'Johannesburg (SAST)' },
        { zone: 'America/Toronto', label: 'Toronto (EDT)' },
        { zone: 'Asia/Seoul', label: 'Seoul (KST)' },
        { zone: 'Europe/Istanbul', label: 'Istanbul (TRT)' },
        { zone: 'America/Mexico_City', label: 'Mexico City (CDT)' },
        { zone: 'Asia/Bangkok', label: 'Bangkok (ICT)' },
        { zone: 'Asia/Hong_Kong', label: 'Hong Kong (HKT)' },
        { zone: 'Europe/Stockholm', label: 'Stockholm (CET)' },
    ];

    const $fromZone = $('#fromZone');
    const $toZone = $('#toZone');

    timeZones.forEach(tz => {
        $fromZone.append(`<option value="${tz.zone}">${tz.label}</option>`);
        $toZone.append(`<option value="${tz.zone}">${tz.label}</option>`);
    });

    $fromZone.val(guessUserTimeZone());
    $toZone.val('Asia/Karachi'); 
}

function setupEventListeners() {
    $('#convertBtn').on('click', convertTime);
    $('#swapBtn').on('click', swapTimeZones);
    $('#fromZone, #toZone').on('change', convertTime);
}

function updateCurrentTime() {
    const now = new Date();
    const fromZone = $('#fromZone').val();
    const options = {
        timeZone: fromZone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const currentTime = now.toLocaleString('en-US', options);
    $('#currentTime').text(`Current time: ${currentTime}`);
    convertTime();
}

function convertTime() {
    const now = new Date();
    const fromZone = $('#fromZone').val();
    const toZone = $('#toZone').val();

    const options = {
        timeZone: toZone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const convertedTime = now.toLocaleString('en-US', options);
    const $resultElement = $('#result');
    $resultElement.removeClass().addClass('animate__animated animate__fadeIn');
    $resultElement.html(`
        <i class="fas fa-clock"></i> Converted Time: ${convertedTime}
        <br>
        <i class="fas fa-map-marker-alt"></i> Time Zone: ${toZone}
        <br>
        ${getFlag(fromZone)} → ${getFlag(toZone)}
    `);

    updateTimeDifference(fromZone, toZone);
}

function swapTimeZones() {
    const $fromZone = $('#fromZone');
    const $toZone = $('#toZone');
    const temp = $fromZone.val();
    $fromZone.val($toZone.val());
    $toZone.val(temp);
    convertTime();
}

function updateTimeDifference(fromZone, toZone) {
    const now = new Date();
    const fromTime = new Date(now.toLocaleString('en-US', { timeZone: fromZone }));
    const toTime = new Date(now.toLocaleString('en-US', { timeZone: toZone }));
    const diffHours = (toTime - fromTime) / (1000 * 60 * 60);
    const absHours = Math.abs(diffHours);
    const sign = diffHours >= 0 ? '+' : '-';
    $('#timeDifference').text(`Time difference: ${sign}${absHours.toFixed(1)} hours`);
}

function getFlag(timeZone) {
    const countryCode = timeZoneToCountryCode(timeZone);
    return `<img src="https://flagcdn.com/w40/${countryCode}.png" class="flag-icon" alt="${timeZone} flag">`;
}

function timeZoneToCountryCode(timeZone) {
    const countryMapping = {
        'Europe/Berlin': 'de',
        'America/Sao_Paulo': 'br',
        'Asia/Shanghai': 'cn',
        'Europe/Moscow': 'ru',
        'Africa/Cairo': 'eg',
        'Africa/Johannesburg': 'za',
        'America/Toronto': 'ca',
        'Asia/Seoul': 'kr',
        'Europe/Istanbul': 'tr',
        'America/Mexico_City': 'mx',
        'Asia/Bangkok': 'th',
        'Asia/Hong_Kong': 'hk',
        'Europe/Stockholm': 'se',
        'America/New_York': 'us',
        'America/Los_Angeles': 'us',
        'America/Chicago': 'us',
        'Europe/London': 'gb',
        'Europe/Paris': 'fr',
        'Asia/Tokyo': 'jp',
        'Asia/Dubai': 'ae',
        'Asia/Karachi': 'pk',
        'Asia/Kolkata': 'in',
    };

    return countryMapping[timeZone] || 'unknown';
}

function guessUserTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}


function applyAnimation(timeZoneElement, animationClass) {
    timeZoneElement.classList.add(animationClass);
    timeZoneElement.addEventListener('animationend', () => {
        timeZoneElement.classList.remove(animationClass);
    }, { once: true });
}

const timeZoneElement = document.querySelector('#timeZoneDisplay');
applyAnimation(timeZoneElement, 'fade-in');


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