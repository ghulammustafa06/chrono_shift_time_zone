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