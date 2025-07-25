import React, { useEffect, useRef } from 'react';

// Declare global initMap function for Google Maps callback
declare global {
  interface Window {
    initMap: () => void;
  }
}

interface MapProps {
  center?: [number, number];
  showAllBusinesses?: boolean;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ 
  center = [40.7128, -74.0060], 
  showAllBusinesses = true, 
  zoom = 13 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    // Set up the callback function for Google Maps
    window.initMap = () => {
      if (mapRef.current && !googleMapRef.current) {
        // Initialize Google Map
        googleMapRef.current = new google.maps.Map(mapRef.current, {
          center: { lat: center[0], lng: center[1] },
          zoom: zoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: true,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 8px;">
              <p style="font-weight: 600; margin: 0 0 4px 0;">Senior Care Location</p>
              <p style="font-size: 14px; margin: 0; color: #666;">Providing quality care</p>
            </div>
          `
        });

        // Add marker
        const marker = new google.maps.Marker({
          position: { lat: center[0], lng: center[1] },
          map: googleMapRef.current,
          title: "Senior Care Location"
        });

        marker.addListener("click", () => {
          infoWindow.open(googleMapRef.current, marker);
        });
      }
    };

    // If Google Maps is already loaded, initialize immediately
    if (typeof google !== 'undefined' && google.maps) {
      window.initMap();
    }
  }, [center, zoom]);

  return (
    <div className="h-full w-full">
      <div 
        ref={mapRef}
        className="h-full w-full"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
};

export default Map;