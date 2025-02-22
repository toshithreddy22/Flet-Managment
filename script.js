let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.6139, lng: 77.2090 }, // Default center (New Delhi)
        zoom: 10
    });

    // Array of vehicle locations
    let vehicleLocations = [
        { lat: 28.7041, lng: 77.1025 },  // Example location 1
        { lat: 28.5355, lng: 77.3910 },  // Example location 2
        { lat: 28.4595, lng: 77.0266 }   // Example location 3
    ];

    // Truck icon URL (custom icon that works)
    let truckIcon = {
        url: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png", // Custom truck icon
        scaledSize: new google.maps.Size(40, 40) // Adjust size for better visibility
    };

    // Loop through vehicle locations and add markers
    vehicleLocations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map: map,
            icon: truckIcon
        });
    });
}
