'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

export function LocationCard() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locError, setLocError] = useState<string | null>(null);
  const [locLoading, setLocLoading] = useState(false);
  const [city, setCity] = useState<string | null>(null);
  const [town, setTown] = useState<string | null>(null);
  const [suburb, setSuburb] = useState<string | null>(null);
  const [w3w, setW3w] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocError('Geolocation is not supported by your browser');
      return;
    }
    setLocLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setLocation({ lat, lng });
        setLocError(null);
        setLocLoading(false);
        setCity(null);
        setTown(null);
        setSuburb(null);
        setW3w(null);

        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
          .then((res) => res.json())
          .then((data) => {
            setSuburb(data.address?.suburb || null);
            setTown(data.address?.town || data.address?.village || null);
            setCity(data.address?.city || data.address?.state || null);
          })
          .catch(() => {});

        fetch(`/api/w3w?coordinates=${lat},${lng}`)
          .then((res) => res.json())
          .then((data) => setW3w(data.words || null))
          .catch(() => setW3w(null));
      },
      (error) => {
        const message = error.code === 1 ? 'Location access denied' : 'Unable to retrieve your location';
        setLocError(message);
        setLocLoading(false);
      }
    );
  };

  const handleCopyW3W = () => {
    if (!w3w) return;
    navigator.clipboard.writeText(`///${w3w}`).then(() => {
      toast.success('Copied to clipboard');
    });
  };

  const placeName = suburb || town || city;
  const clickable = Boolean(locError);

  return (
    <div
      onClick={clickable ? getLocation : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      className={clickable ? 'cursor-pointer' : undefined}
    >
      <div className="text-caption" style={{ color: 'var(--page-ink-muted)' }}>
        You&rsquo;re in
      </div>
      <div className="text-h3 font-bold" style={{ color: 'var(--page-ink)' }}>
        {!isOnline ? 'Offline' : locLoading ? 'Getting location…' : placeName || 'Location unavailable'}
      </div>

      {!isOnline ? (
        <div className="mt-0.5 text-caption" style={{ color: 'var(--page-ink-muted)' }}>
          No connection. Mnemonic pages still work offline.
        </div>
      ) : locLoading ? null : location ? (
        w3w ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopyW3W();
            }}
            type="button"
            className="font-mono mt-0.5 text-caption underline decoration-dotted"
            style={{ color: 'var(--page-ink-muted)' }}
          >
            {'///'}
            {w3w}
          </button>
        ) : (
          <a
            href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-mono mt-0.5 block text-caption underline decoration-dotted"
            style={{ color: 'var(--page-ink-muted)' }}
          >
            {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
          </a>
        )
      ) : locError ? (
        <div className="mt-0.5 text-caption" style={{ color: 'var(--page-ink-muted)' }}>
          {locError}. Tap to try again.
        </div>
      ) : null}
    </div>
  );
}
