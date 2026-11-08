import type { ReactNode, SVGProps } from "react";

function S({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M21.5 16.9v2.6a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.6 19.6 0 0 1 1.6 3.8a2 2 0 0 1 2-2.2h2.6a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.2 9.4a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </S>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </S>
  );
}

export function KeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <circle cx="7.5" cy="7.5" r="4.5" />
      <path d="m10.8 10.8 9.7 9.7" />
      <path d="m16.5 16.5 2.5-2.5" />
      <path d="m13.8 13.8 2.2-2.2" />
    </S>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M12 2.8 19 6v5.2c0 4.9-3.4 8-7 9.9-3.6-1.9-7-5-7-9.9V6l7-3.2z" />
      <path d="m9 12 2.1 2.1L15.2 10" />
    </S>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </S>
  );
}

export function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M20 12v9H4v-9" />
      <path d="M2.5 7h19v5h-19z" />
      <path d="M12 22V7" />
      <path d="M12 7c-1.2-3-2.6-5-4.5-5-1.5 0-2.5 1.1-2.5 2.4C5 6 6.3 7 8.5 7H12z" />
      <path d="M12 7c1.2-3 2.6-5 4.5-5 1.5 0 2.5 1.1 2.5 2.4C19 6 17.7 7 15.5 7H12z" />
    </S>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18M8 3v4M16 3v4" />
      <path d="M8 14h2M14 14h2M8 17.5h2" />
    </S>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="m5 12.2 4.4 4.4L19 7" />
    </S>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </S>
  );
}

export function ExpandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </S>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </S>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="m15 18-6-6 6-6" />
    </S>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="m9 18 6-6-6-6" />
    </S>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </S>
  );
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z" />
    </S>
  );
}

export function SmokeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M2 15h13v4H2z" />
      <path d="M17.5 15H22" />
      <path d="M18 10c1.7-1 1.7-3 0-4" />
    </S>
  );
}

export function PawIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <circle cx="6" cy="10" r="2" />
      <circle cx="10" cy="6.5" r="2" />
      <circle cx="14" cy="6.5" r="2" />
      <circle cx="18" cy="10" r="2" />
      <path d="M12 12.5c-3 0-5 2.4-5 4.8 0 1.9 1.4 2.9 2.9 2.9.8 0 1.3-.5 2.1-.5s1.3.5 2.1.5c1.5 0 2.9-1 2.9-2.9 0-2.4-2-4.8-5-4.8z" />
    </S>
  );
}

export function DocIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M6 2.5h8L19 7.5V21.5H6z" />
      <path d="M14 2.5v5h5" />
      <path d="M9 12h6M9 15.5h6M9 8.5h2" />
    </S>
  );
}

export function StoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M4 9.5 5.5 3h13L20 9.5" />
      <path d="M4 9.5h16v2.2a2.6 2.6 0 0 1-5.2 0 2.7 2.7 0 0 1-5.6 0 2.6 2.6 0 0 1-5.2 0z" />
      <path d="M5.5 14.5V21h13v-6.5" />
      <path d="M9.5 21v-4.5h5V21" />
    </S>
  );
}

export function CafeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M5 9.5h11V15a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" />
      <path d="M16 10.5h1.8a2.7 2.7 0 0 1 0 5.4H16" />
      <path d="M8 3.5c-1 1.2-1 2.3 0 3.5M12 3.5c-1 1.2-1 2.3 0 3.5" />
    </S>
  );
}

export function ParkingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9.5 16.5v-9H13a3 3 0 0 1 0 6H9.5" />
    </S>
  );
}

export function BedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="M3 18.5v-11M3 14.5h18v4" />
      <path d="M3 12h18v2.5" />
      <circle cx="7" cy="9.7" r="1.8" />
      <path d="M3 12V9.7A1.7 1.7 0 0 1 4.7 8h8.6a4 4 0 0 1 4 4" />
    </S>
  );
}

export function BroomIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="m14 3 7 7" />
      <path d="m11.5 8.5 4 4" />
      <path d="M13 13c-2.5.5-5.5 3-7 8 4.5-.5 8.5-2.5 10-6z" />
    </S>
  );
}

export function PartyOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <S {...props}>
      <path d="m3 3 18 18" />
      <path d="M12 3v3.5" />
      <path d="M17.8 5.2 15.5 7.5M19.5 11H16" />
      <path d="M6.2 5.2l2.3 2.3M4.5 11H8" />
      <path d="M9 21h6l-1.2-4.2a1.9 1.9 0 0 0-3.6 0z" />
    </S>
  );
}
