import heroLeft from "../assets/images/heroLeft.webp";
import heroMiddle from "../assets/images/heroMiddle.webp";
import heroRight from "../assets/images/heroRight.webp";
import Riverside from "../assets/images/330Riverside.svg";
import HeroBottom1 from "../assets/images/heroBottom.webp";
import HeroBottom from "../assets/images/main.webp";
import headerWave from "../assets/images/headerCurve3.svg";
import handover from "../assets/icons/handover.svg";
import price from "../assets/icons/price.svg";
import paymentplan from "../assets/icons/book.svg";
export const data = [
	{
		template: 1,
		titleOne: "HeaderTitleOne",
		subTitleOne: "HeaderSubTitleOne",
		titleTwo: "HeaderTitleTwo",
		subTitleTwo: "HeaderSubTitleTwo",
		mainTitle: "HeaderMainTitle",
		heroLeft,
		heroMiddle,
		heroRight,
		Riverside,
		HeroBottom: HeroBottom1,
	},
	{
		template: 2,
		HeroBottom,
		textSlider: [
			{
				icon: price,
				title: "AED1.2M",
				subTitle: "Starting Price",
			},
			{
				icon: paymentplan,
				title: "Easy 20/80",
				subTitle: "Payment Plans",
			},
			{
				icon: handover,
				title: "Q3 2023",
				subTitle: "Handover",
			},
		],
	},
	{
		template: 3,
		HeroBottom,
		headerWave,
		textSlider: [
			{
				icon: price,
				title: "AED3.2M",
				subTitle: "Starting Price",
			},
			{
				icon: paymentplan,
				title: "5 Years ",
				subTitle: "Payment Plans",
			},
			{
				icon: handover,
				title: "Q3 2026",
				subTitle: "Handover",
			},
		],
	},
];
