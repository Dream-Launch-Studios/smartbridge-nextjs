import {
  IconTestPipe,
  IconBuildingBroadcastTower,
  IconBrandSpeedtest,
  IconCpu,
  IconBlocks,
  IconChartHistogram,
} from "@tabler/icons-react";
import { images } from "@/images/image";

export const featuresOne = [
  {
    title: "Streamlined NLP Solutions",
    description:
      "Integrate advanced AI capabilities without the hassle of complex setups",
    icon: IconTestPipe,
    class: "md:col-span-2 md:row-span-2",
    href: "/nlp-solutions",
    image: images.cache,
  },
  {
    title: "Robust Connectivity",
    description:
      "Bridge the gap between smart devices, apps, and cloud platforms effortlessly",
    icon: IconBuildingBroadcastTower,
    class: "md:col-span-2 md:row-span-2",
    href: "/nlp-solutions",
    image: null,
  },
  {
    title: "Scalable Performance",
    description:
      "Grow from prototype to enterprise scale with APIs designed for scalability",
    icon: IconBrandSpeedtest,
    class: "md:col-span-2 md:row-span-2",
    href: "/nlp-solutions",
    image: null,
  },
  {
    title: "Real-Time Processing",
    description: "Deliver instant insights and responses with low-latency NLP",
    icon: IconCpu,
    class: "md:col-span-2 md:row-span-2",
    href: "/nlp-solutions",
    image: null,
  },
  {
    title: "Customizable Models",
    description: "Tailor AI models to your specific needs for better outcomes",
    icon: IconBlocks,
    class: "md:col-span-2 md:row-span-2",
    href: "/nlp-solutions",
    image: null,
  },
  {
    title: "Comprehensive Analytics",
    description:
      "Track performance and optimize your integrations with detailed usage data",
    icon: IconChartHistogram,
    class: "md:col-span-2 md:row-span-2",
    href: "/nlp-solutions",
    image: null,
  },
];

export const ctaSection = {
  title: "Explore more about SmartBridgeAPI",
  buttonText: "Explore Now",
  buttonHref: "/docs/getting-started",
};
