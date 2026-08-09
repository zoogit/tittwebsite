"use client";

import { useState } from "react";

const screenshots = [
  {
    src: "/screenshots/12.JPG",
    label: "Thunder in the Territories screenshot 1",
  },
  {
    src: "/screenshots/213.JPG",
    label: "Thunder in the Territories screenshot 2",
  },
  {
    src: "/screenshots/324.JPG",
    label: "Thunder in the Territories screenshot 3",
  },
  {
    src: "/screenshots/435.JPG",
    label: "Thunder in the Territories screenshot 4",
  },
];

const offsets = [-2, -1, 0, 1, 2];

export default function ScreenshotCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      const next = current + direction;
      return (next + screenshots.length) % screenshots.length;
    });
  };

  const finishDrag = (clientX: number) => {
    if (dragStart === null) {
      return;
    }

    const distance = clientX - dragStart;
    setDragStart(null);

    if (Math.abs(distance) < 48) {
      return;
    }

    move(distance > 0 ? -1 : 1);
  };

  return (
    <div className="galleryShell">
      <div
        className="screenshotCarousel"
        aria-label="Screenshot gallery"
        onPointerDown={(event) => setDragStart(event.clientX)}
        onPointerCancel={() => setDragStart(null)}
        onPointerLeave={(event) => finishDrag(event.clientX)}
        onPointerUp={(event) => finishDrag(event.clientX)}
      >
        {offsets.map((offset) => {
          const index =
            (activeIndex + offset + screenshots.length) %
            screenshots.length;
          const screenshot = screenshots[index];
          const direction = offset < 0 ? -1 : 1;

          return (
            <button
              className={`galleryItem ${offset === 0 ? "isFeatured" : ""}`}
              data-position={offset}
              type="button"
              key={`${screenshot.src}-${offset}`}
              onClick={() => {
                if (offset !== 0) {
                  move(direction);
                }
              }}
              aria-label={
                offset === 0
                  ? screenshot.label
                  : `Show ${screenshot.label}`
              }
            >
              <div className="galleryPlaceholder">
                <img src={screenshot.src} alt={screenshot.label} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
