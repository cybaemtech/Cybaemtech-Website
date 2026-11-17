import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapPin,
  ExternalLink,
  Phone,
  Mail,
  Globe,
  Navigation,
  RotateCcw,
  X
} from "lucide-react";

export interface LocationDetail {
  id: "india" | "usa";
  name: string;
  badge: string;
  flagUrl: string;
  flagEmoji: string;
  lat: number;
  lng: number;
  zoom: number;
  company: string;
  subtext?: string;
  address: string;
  phone: string;
  email: string;
  mapsUrl: string;
}

export const LOCATIONS: Record<"india" | "usa", LocationDetail> = {
  india: {
    id: "india",
    name: "Head Office - Pune",
    badge: "Pune, India",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    flagEmoji: "🇮🇳",
    lat: 18.590475,
    lng: 73.745759,
    zoom: 16,
    company: "Cybaem Tech Private Limited",
    address:
      "Office 304, Suratwala Mark Plazzo, Hinjewadi, Pune, Maharashtra 411057, India",
    phone: "+91 9028541383 / 020 2069010200",
    email: "sales@cybaemtech.com",
    mapsUrl:
      "https://maps.google.com/?q=Cybaem+Tech+Suratwala+Mark+Plazzo+Hinjewadi+Pune",
  },
  usa: {
    id: "usa",
    name: "North America Office",
    badge: "United States",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    flagEmoji: "🇺🇸",
    lat: 29.593740,
    lng: -95.621400,
    zoom: 16,
    company: "Cybaem Tech Private Limited",
    subtext: "In Association with RMDG Technology Consultants LLC",
    address:
      "16107 Kensington Drive, Suite 227, Sugar Land, TX 77479, United States",
    phone: "+1 (713) 234-7916",
    email: "ralph@cybaemtech.com",
    mapsUrl:
      "https://maps.google.com/?q=16107+Kensington+Drive+Suite+227+Sugar+Land+TX+77479",
  },
};

const WORLD_VIEW = {
  center: [22, 10] as [number, number],
  zoom: 2.2,
};

// Create SVG Map Pin Icon correctly anchored at its bottom tip without double-translating
const createCustomMarkerIcon = (label: string, isSelected: boolean) => {
  const pinColor = isSelected ? "#dc2626" : "#e11d48";
  return L.divIcon({
    className: "custom-map-pin-container",
    html: `
      <div style="width: 36px; height: 50px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; cursor: pointer;">
        <svg width="34" height="42" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 3px 6px rgba(0,0,0,0.35)); transition: transform 0.2s ease;">
          <path d="M12 0C5.37258 0 0 5.37258 0 12C0 19.5 12 30 12 30C12 30 24 19.5 24 12C24 5.37258 18.6274 0 12 0Z" fill="${pinColor}" stroke="#ffffff" stroke-width="1.8"/>
          <circle cx="12" cy="11" r="4.5" fill="#ffffff"/>
        </svg>
        <span style="background: rgba(15, 23, 42, 0.9); color: #ffffff; font-weight: 700; font-size: 10px; padding: 2px 6px; border-radius: 9999px; white-space: nowrap; margin-top: 2px; box-shadow: 0 2px 5px rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.25); pointer-events: none;">
          ${label}
        </span>
      </div>
    `,
    iconSize: [36, 50],
    iconAnchor: [18, 42], // Exact bottom tip point of the 24x30 SVG scaled to 34x42
  });
};

const InteractiveLocationMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const [selectedLocation, setSelectedLocation] = useState<"india" | "usa" | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: WORLD_VIEW.center,
      zoom: WORLD_VIEW.zoom,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false,
      scrollWheelZoom: false, // Prevents unintended page scroll trapping
      attributionControl: false,
    });

    // 100% Free OpenStreetMap raster tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      subdomains: ["a", "b", "c"],
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    mapInstanceRef.current = map;

    // Create markers for both locations
    Object.values(LOCATIONS).forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], {
        icon: createCustomMarkerIcon(loc.badge, false),
      }).addTo(map);

      // Tooltip shown on hover (wider width, compact height)
      const tooltipHtml = `
        <div style="text-align: left; font-family: inherit; line-height: 1.35; width: 100%;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px; border-bottom: 1px solid #f1f5f9; padding-bottom: 3px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 13px;">${loc.flagEmoji}</span>
              <strong style="font-size: 12px; color: #0f172a; font-weight: 700; white-space: nowrap;">${loc.company}</strong>
            </div>
            <span style="font-size: 10px; font-weight: 700; color: #2563eb; background: #eff6ff; padding: 1px 6px; border-radius: 9999px; white-space: nowrap;">${loc.badge}</span>
          </div>
          <div style="font-size: 11px; color: #475569; line-height: 1.35;">
            ${loc.address}
          </div>
        </div>
      `;

      marker.bindTooltip(tooltipHtml, {
        direction: "top",
        offset: [0, -44],
        opacity: 1,
        className: "custom-leaflet-tooltip",
      });

      marker.on("click", () => {
        handleSelectLocation(loc.id);
      });

      markersRef.current[loc.id] = marker;
    });

    // Invalidate size to ensure full tile rendering without grey edges
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update marker icons based on selected location
  useEffect(() => {
    Object.values(LOCATIONS).forEach((loc) => {
      const marker = markersRef.current[loc.id];
      if (marker) {
        marker.setIcon(
          createCustomMarkerIcon(loc.badge, selectedLocation === loc.id)
        );
      }
    });
  }, [selectedLocation]);

  const handleSelectLocation = (locId: "india" | "usa") => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (selectedLocation === locId) {
      // Toggle back to world view if clicked again
      handleResetWorldView();
      return;
    }

    const target = LOCATIONS[locId];
    setSelectedLocation(locId);

    map.flyTo([target.lat, target.lng], target.zoom, {
      duration: 1.8,
      easeLinearity: 0.25,
    });
  };

  const handleResetWorldView = () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    setSelectedLocation(null);
    map.flyTo(WORLD_VIEW.center, WORLD_VIEW.zoom, {
      duration: 1.6,
      easeLinearity: 0.25,
    });
  };

  const activeData = selectedLocation ? LOCATIONS[selectedLocation] : null;

  return (
    <div className="relative isolate z-0 w-full rounded-3xl overflow-hidden border border-blue-100 shadow-[0_10px_35px_rgba(0,50,150,0.08)] bg-slate-50">
      {/* Custom Leaflet Pin and Tooltip Styling */}
      <style>{`
        .custom-map-pin-container {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-container {
          background: #e5effd !important;
          font-family: inherit;
        }
        .custom-leaflet-tooltip {
          background: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(8px);
          border: 1px solid #cbd5e1 !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          padding: 10px 14px !important;
          min-width: 320px !important;
          max-width: 380px !important;
          width: max-content !important;
          white-space: normal !important;
        }
        .custom-leaflet-tooltip::before {
          border-top-color: rgba(255, 255, 255, 0.98) !important;
        }
      `}</style>

      {/* Top Controls Bar */}
      <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
        {/* Location Selector Tabs */}
        <div className="inline-flex items-center gap-1 p-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-slate-200/90 pointer-events-auto">
          {/* World View Tab */}
          <button
            type="button"
            onClick={handleResetWorldView}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedLocation === null
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Globe size={14} />
            <span>World Map</span>
          </button>

          {/* India Tab */}
          <button
            type="button"
            onClick={() => handleSelectLocation("india")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedLocation === "india"
                ? "bg-primary text-white shadow-xs"
                : "text-slate-700 hover:text-primary hover:bg-blue-50"
            }`}
          >
            <span>🇮🇳</span>
            <span>India (Pune)</span>
          </button>

          {/* USA Tab */}
          <button
            type="button"
            onClick={() => handleSelectLocation("usa")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedLocation === "usa"
                ? "bg-primary text-white shadow-xs"
                : "text-slate-700 hover:text-primary hover:bg-blue-50"
            }`}
          >
            <span>🇺🇸</span>
            <span>USA (Sugar Land)</span>
          </button>
        </div>

        {/* High-Visibility Zoom Controls */}
        <div className="flex items-center gap-1 p-1 bg-white shadow-md rounded-2xl border border-slate-200/90 pointer-events-auto">
          <button
            type="button"
            onClick={() => mapInstanceRef.current?.zoomIn()}
            className="w-8 h-8 rounded-xl flex items-center justify-center bg-slate-50 hover:bg-primary hover:text-white text-slate-900 font-extrabold text-base transition-colors cursor-pointer border border-slate-200/60"
            title="Zoom In"
            aria-label="Zoom In"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => mapInstanceRef.current?.zoomOut()}
            className="w-8 h-8 rounded-xl flex items-center justify-center bg-slate-50 hover:bg-primary hover:text-white text-slate-900 font-extrabold text-base transition-colors cursor-pointer border border-slate-200/60"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            −
          </button>
          {selectedLocation !== null && (
            <button
              type="button"
              onClick={handleResetWorldView}
              className="w-8 h-8 rounded-xl flex items-center justify-center bg-slate-50 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer border border-slate-200/60"
              title="Reset to World View"
              aria-label="Reset to World View"
            >
              <RotateCcw size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Map Canvas Container with reduced height */}
      <div
        ref={mapContainerRef}
        className="w-full h-[360px] sm:h-[400px] lg:h-[440px] z-0 focus:outline-none"
      />

      {/* Google Maps-style Detail Overlay Card */}
      {activeData && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-20 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,50,150,0.18)] border border-blue-100">
            {/* Header with Close button */}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-xs mt-0.5">
                  <img
                    src={activeData.flagUrl}
                    alt={`${activeData.name} Flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                    {activeData.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                    {activeData.company}
                  </p>
                  {activeData.subtext && (
                    <p className="text-[10px] text-primary font-medium mt-0.5">
                      {activeData.subtext}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={handleResetWorldView}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Close location card"
              >
                <X size={14} />
              </button>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs text-slate-600 my-2.5 leading-relaxed bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
              <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
              <span>{activeData.address}</span>
            </div>

            {/* Contact details */}
            <div className="space-y-1.5 text-xs text-slate-700 py-2 border-t border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-primary" />
                <span className="font-medium">{activeData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-primary" />
                <span className="font-medium">{activeData.email}</span>
              </div>
            </div>

            {/* Action Buttons: Open in Google Maps & Switch Location */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={activeData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <Navigation size={13} />
                <span>Open in Maps</span>
                <ExternalLink size={11} />
              </a>

              <button
                type="button"
                onClick={() =>
                  handleSelectLocation(activeData.id === "india" ? "usa" : "india")
                }
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Switch to {activeData.id === "india" ? "🇺🇸 USA" : "🇮🇳 India"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* World Map Hint Bar */}
      {!activeData && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium shadow-lg border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Click on 🇮🇳 India or 🇺🇸 USA to zoom into our local offices</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveLocationMap;
