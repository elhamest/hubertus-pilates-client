import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import classicReformerImg from "../../public/img/products/classic-reformer.jpg";
import cadillacImg from "../../public/img/products/cadillac.jpg";

const productsPersian = [
  {
    title: "ریفورمر کلاسیک (Classic Reformer)",
    desc: "سطح تمرینات پیلاتس خود با استفاده از ریفورمر کالسیک بالا ببرید. این دستگاه یکی از اصلی‌ترین وسایل تمرینی پیلاتس است که به شما در تقویت عضلات مرکزی، بهبود تعادل و انعطاف پذیری کمک می‌کند.",
    image: classicReformerImg,
    bullets: [
      {
        desc: "استفاده از ایده آل ترین نوع چوب آلمانی از نظر مرغوبیت و سنگینی و زیبایی طرح",
        icon: <FaceSmileIcon />,
      },
      {
        desc: "استفاده از رنگ نانوتکنولوژی با حداکثر مقاومت دربرابر سایش، خراش و نفوذ آب برای قسمت های چوبی دستگاه",
        icon: <ChartBarSquareIcon />,
      },
      {
        desc: "استفاده از جنس خاص برای تایرها و ریل ها که باعث نرمی ، بی صدایی ، روان بودن در حرکت دستگاه می شود",
        icon: <CursorArrowRaysIcon />,
      },
      {
        desc: "باکس و جامپینگ بورد بر روی دستگاه به صورت استاندارد موجود می باشد",
        icon: <FaceSmileIcon />,
      },
      {
        desc: "امکان تنظیم ارتفاع قرقره ها جهت تغییر زاویه اعمال نیرو بر عضلات بدن",
        icon: <FaceSmileIcon />,
      },
      {
        desc: "سیستم قفل یکسو در کریج, برای قفل کردن طناب و تنظیم دستگاه برای قد استفاده کننده و همچنین انجام حرکت های اختصاصی",
        icon: <FaceSmileIcon />,
      },
      {
        desc: "قابلیت تنظیم در سه حالت برای محل قرار گرفتن سر",
        icon: <FaceSmileIcon />,
      },
      {
        desc: "دارای هفت فنر با سختی های مختلف که با رنگ های مختلف مشخص شده اند",
        icon: <FaceSmileIcon />,
      },
      {
        desc: "قابلیت تنظیم فوت بار در 5 زاویه مختلف برای انجام حرکات متفاوت",
        icon: <FaceSmileIcon />,
      },
    ],
  },
  {
    title: "کادیلاک (Cadillac)",
    desc: "کادیلاک، که به آن میز ترازو نیز می‌گویند، یکی از پرکاربردترین و برجسته‌ترین وسایل تمرینی در روش پیلاتس است. کادیلاک یک تمرین کلی بدنی را فراهم می‌کند که عضلات مرکزی، انعطاف‌پذیری، قدرت و تعادل را هدف قرار می‌دهد. با فنرها و میله‌های قابل تنظیم، کادیلاک امکان تنظیم مقاومت و شدت تمرینات را فراهم می‌کند، به گونه‌ای که برای افراد مبتدی و پیشرفته مناسب است.همچنین این دستگاه امکان انجام حرکات نوآورانه و چالش‌برانگیزی مانند پوزیشن‌های معکوس، کشش‌های مهره‌بندی و تمرینات تعادل را فراهم می‌کند که به راحتی با دیگر وسایل قابل انجام نیست.",
    image: cadillacImg,
    bullets: [
      {
        desc: "ضخامت تشک استاندارد به منظور استفاده بهتر ورزشکاران",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        desc: "دارای ده فنر با فشار های مختلف",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        desc: "همراه با دو عدد فوزی (Fuzzie)",
        icon: <SunIcon />,
      },
      {
        desc: "در صورت تمایل باکس به صورت سفارشی روی این دستگاه عرضه می شود",
        icon: <FaceSmileIcon />,
      },
    ],
  },
];
export { productsPersian };

// const productOne = {
//   title: "Highlight your benefits",
//   desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
//   image: productOneImg,
//   bullets: [
//     {
//       title: "Understand your customers",
//       desc: "Then explain the first point breifly in one or two lines.",
//       icon: <FaceSmileIcon />,
//     },
//     {
//       title: "Improve acquisition",
//       desc: "Here you can add the next benefit point.",
//       icon: <ChartBarSquareIcon />,
//     },
//     {
//       title: "Drive customer retention",
//       desc: "This will be your last bullet point in this section.",
//       icon: <CursorArrowRaysIcon />,
//     },
//   ],
// };

// const productTwo = {
//   title: "Offer more benefits here",
//   desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
//   image: productTwoImg,
//   bullets: [
//     {
//       title: "Mobile Responsive Template",
//       desc: "Nextly is designed as a mobile first responsive template.",
//       icon: <DevicePhoneMobileIcon />,
//     },
//     {
//       title: "Powered by Next.js & TailwindCSS",
//       desc: "This template is powered by latest technologies and tools.",
//       icon: <AdjustmentsHorizontalIcon />,
//     },
//     {
//       title: "Dark & Light Mode",
//       desc: "Nextly comes with a zero-config light & dark mode. ",
//       icon: <SunIcon />,
//     },
//   ],
// };

// export { productOne, productTwo };
