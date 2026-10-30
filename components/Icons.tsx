import type { SVGProps } from "react";

/* Shared inline-SVG icon set for Verity Cleaning.
   Size is controlled by the parent CSS context (e.g. `.btn svg{width:18px}`).
   stroke="currentColor" so icons inherit text color. */

export type IconProps = SVGProps<SVGSVGElement> & { sw?: number };

function Base({ sw = 2, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const Phone = (p: IconProps) => (
  <Base sw={2.2} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Base>
);

export const Sms = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base sw={2.5} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Base>
);

export const CheckCircle = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Base>
);

export const Pin = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
);

export const Shield = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Base>
);

export const Medal = (p: IconProps) => (
  <Base sw={2} {...p}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </Base>
);

export const Star = (p: IconProps) => (
  <Base sw={2} fill="currentColor" {...p}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Base>
);

export const Clock = (p: IconProps) => (
  <Base sw={2} {...p}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Base>
);

export const Sparkles = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    <path d="m5 3 .8 2.2L8 6l-2.2.8L5 9l-.8-2.2L2 6l2.2-.8L5 3z" />
  </Base>
);

export const Home = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </Base>
);

export const Building = (p: IconProps) => (
  <Base sw={2} {...p}>
    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
    <path d="M7 22V4" />
    <path d="M17 22V4" />
    <path d="M2 12h20" />
    <path d="M2 7h20" />
    <path d="M2 17h20" />
  </Base>
);

export const SprayBottle = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M12 2h2v4h-2V2z" />
    <path d="M9 6h8l1 3v2h-10V9l1-3z" />
    <path d="M9 11v8a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-8H9z" />
    <path d="M10 2H8" />
    <path d="M8 4l-2 2" />
  </Base>
);

export const Bucket = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 9H3v4a9 9 0 0 0 18 0V9z" />
    <path d="M21 9a9 9 0 0 0-18 0" />
    <path d="M12 13v6" />
    <circle cx="12" cy="13" r="2" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base sw={2} {...p}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Base>
);

export const ArrowRight = (p: IconProps) => (
  <Base sw={2} {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Base>
);

export const ChevronDown = (p: IconProps) => (
  <Base sw={2.2} {...p}>
    <polyline points="6 9 12 15 18 9" />
  </Base>
);

export const Sparkle = (p: IconProps) => (
  <Base sw={0} fill="currentColor" {...p}>
    <path d="M12 2c.6 3.6 1.9 4.9 5.5 5.5-3.6.6-4.9 1.9-5.5 5.5-.6-3.6-1.9-4.9-5.5-5.5C10.1 6.9 11.4 5.6 12 2z" />
  </Base>
);

export const Camera = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </Base>
);

export const FileText = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </Base>
);

export const CalendarCheck = (p: IconProps) => (
  <Base sw={2} {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </Base>
);

export const HomeSparkle = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22v-6h6v6" />
  </Base>
);

export const CreditCard = (p: IconProps) => (
  <Base sw={2} {...p}>
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </Base>
);

export const MessageCircle = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Base>
);

export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/* Yelp burst from simple-icons, without the registered-trademark mark,
   which is unreadable at footer size. */
export const YelpIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041z" />
  </svg>
);

export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...p}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Map = (p: IconProps) => (
  <Base sw={1.8} {...p}>
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
    <path d="M9 4v14M15 6v14" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base sw={2} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </Base>
);

export const Heart = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </Base>
);

export const Yelp = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="m9 10 3 2 3-2" strokeLinejoin="round" />
  </Base>
);

export const CurvedArrow = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M3 5c0 9 6 13 11 13" />
    <path d="M9 22c2-2 4-3 5-4" />
  </Base>
);

export const Nextdoor = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="m3 11 9-8 9 8" />
    <path d="M5 10v10h14V10" />
    <path d="M9 20v-6h6v6" />
  </Base>
);

export const X = (p: IconProps) => (
  <Base sw={2.2} {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Base>
);

export const XCircle = (p: IconProps) => (
  <Base sw={2} {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </Base>
);

export const ChevronRight = (p: IconProps) => (
  <Base sw={2.2} {...p}>
    <polyline points="9 6 15 12 9 18" />
  </Base>
);

export const Plus = (p: IconProps) => (
  <Base sw={2.4} {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Base>
);

export const WindowIcon = (p: IconProps) => (
  <Base sw={2} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </Base>
);

export const Shirt = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M16 3l-4 2-4-2-5 4 3 3 2-1.5V21h8V8.5l2 1.5 3-3z" />
  </Base>
);

export const Bed = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
    <path d="M2 18v2" />
    <path d="M22 18v2" />
    <path d="M4 12V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4" />
    <path d="M13 10V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6" />
  </Base>
);

export const Paw = (p: IconProps) => (
  <Base sw={2} fill="currentColor" {...p}>
    <circle cx="7.5" cy="9.5" r="1.8" />
    <circle cx="12" cy="7" r="1.8" />
    <circle cx="16.5" cy="9.5" r="1.8" />
    <path d="M12 12c-3 0-5.5 2-5.5 4.5S8.5 20 12 20s5.5-1 5.5-3.5S15 12 12 12z" stroke="none" />
  </Base>
);

