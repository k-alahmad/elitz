import floor1 from "../assets/images/floorplan/XX01.svg";
import floor2 from "../assets/images/floorplan/XX02.svg";
import floor3 from "../assets/images/floorplan/XX03.svg";
import floor4 from "../assets/images/floorplan/XX04.svg";
import floor5 from "../assets/images/floorplan/XX05.svg";
import floor6 from "../assets/images/floorplan/XX06.svg";
import floor7 from "../assets/images/floorplan/XX07.svg";
import floor8 from "../assets/images/floorplan/XX08.svg";
import floor9 from "../assets/images/floorplan/XX09.svg";
import floor10 from "../assets/images/floorplan/XX10.svg";
import floor11 from "../assets/images/floorplan/XX11.svg";
import floor12 from "../assets/images/floorplan/XX12.svg";
import floor13 from "../assets/images/floorplan/XX13.svg";
import floor14 from "../assets/images/floorplan/XX14.svg";
import floor15 from "../assets/images/floorplan/XX15.svg";
////////////////
import Studio from "../assets/images/floorplan/Studio.webp";
import BR1 from "../assets/images/floorplan/1BR.webp";
import BR2 from "../assets/images/floorplan/2BR.webp";
import BR3 from "../assets/images/floorplan/3BR.webp";
import BR4T from "../assets/images/floorplan/4BRT.webp";
import BR5T from "../assets/images/floorplan/5BRT.webp";
import BR5M from "../assets/images/floorplan/5BRM.webp";
import BR6M from "../assets/images/floorplan/6BRM.webp";
import BR7M from "../assets/images/floorplan/7BRM.webp";
export const data = [
	{
		template: 1,
		title: "floorTitle",
		floors: [
			{
				name: "XX01",
				color: "#88D2D7",
				image: floor1,
				bedRoomNumber: 1,
				type: "TYPE C (with powder room + balcony) - VARIANT 3",
				suite: "769.08 SQ.FT.",
				balcony: "59.09 SQ.FT.",
				total: "828.17 SQ.FT",
			},
			{
				name: "XX02",
				color: "#88D2D7",
				image: floor2,
				bedRoomNumber: 2,
				type: "TYPE D (with store room and powder room + balcony)",
				suite: "692.87. SQ.FT.",
				balcony: "55.97 SQ.FT.",
				total: "748.84 SQ.FT",
			},
			{
				name: "XX03",
				color: "#65B3C5",
				image: floor3,
				bedRoomNumber: 1.5,
				type: "TYPE A (with store room and powder room + balcony)",
				suite: "583.94 SQ.FT.",
				balcony: "55.22 SQ.FT.",
				total: "639.16 SQ.FT",
			},
			{
				name: "XX04",
				color: "#88D2D7",
				image: floor4,
				bedRoomNumber: 1,
				type: "TYPE A (with balcony) - VARIANT 1",
				suite: "441.00 SQ.FT.",
				balcony: "55.22 SQ.FT.",
				total: "496.22 SQ.FT",
			},
			{
				name: "XX05",
				color: "#4FC9EE",
				image: floor5,
				bedRoomNumber: 2,
				type: "TYPE A (with balcony)",
				suite: "811.92 SQ.FT.",
				balcony: "132.40 SQ.FT.",
				total: "944.32 SQ.FT",
			},
			{
				name: "XX06",
				color: "#88D2D7",
				image: floor6,
				bedRoomNumber: 1,
				type: "TYPE A (with balcony)",
				suite: "444.66 SQ.FT.",
				balcony: "55.97 SQ.FT.",
				total: "500.63 SQ.FT",
			},
			{
				name: "XX07",
				color: "#4FC9EE",
				image: floor7,
				bedRoomNumber: 2,
				type: "TYPE B (with powder room + balcony)",
				suite: "942.81 SQ.FT.",
				balcony: "11.19 SQ.FT.",
				total: "1054.00 SQ.FT",
			},
			{
				name: "XX08",
				color: "#88D2D7",
				image: floor8,
				bedRoomNumber: 1,
				type: "TYPE C (with powder room + balcony)",
				suite: "789.21 SQ.FT.",
				balcony: "59.09 SQ.FT.",
				total: "848.30 SQ.FT",
			},
			{
				name: "XX09",
				color: "#88D2D7",
				image: floor9,
				bedRoomNumber: 1,
				type: "TYPE C (with powder room + balcony) - VARIANT 1",
				suite: "777.15 SQ.FT.",
				balcony: "59.09 SQ.FT.",
				total: "836.24 SQ.FT",
			},
			{
				name: "XX10",
				color: "#65B3C5",
				image: floor10,
				bedRoomNumber: 1.5,
				type: "TYPE B (with study room and powder room + balcony)",
				suite: "680.60 SQ.FT.",
				balcony: "55.97 SQ.FT.",
				total: "736.57 SQ.FT",
			},
			{
				name: "XX11",
				color: "#4FC9EE",
				image: floor11,
				bedRoomNumber: 2,
				type: "TYPE C (with powder room + balcony)",
				suite: "1024.19 SQ.FT.",
				balcony: "110.44 SQ.FT.",
				total: "1134.63 SQ.FT",
			},
			{
				name: "XX12",
				color: "#4FC9EE",
				image: floor12,
				bedRoomNumber: 2,
				type: "TYPE A (with balcony) - VARIANT 1",
				suite: "811.81 SQ.FT.",
				balcony: "132.40 SQ.FT.",
				total: "944.21 SQ.FT",
			},
			{
				name: "XX13",
				image: floor13,
				color: "#88D2D7",
				bedRoomNumber: 1,
				type: "TYPE A (with balcony) - VARIANT 2",
				suite: "445.84 SQ.FT.",
				balcony: "55.97 SQ.FT.",
				total: "501.81 SQ.FT",
			},
			{
				name: "XX14",
				color: "#65B3C5",
				image: floor14,
				bedRoomNumber: 1.5,
				type: "TYPE C (with study room and powder room + balcony)",
				suite: "668.76 SQ.FT.",
				balcony: "55.97 SQ.FT.",
				total: "724.73 SQ.FT",
			},
			{
				name: "XX15",
				color: "#88D2D7",
				image: floor15,
				bedRoomNumber: 1,
				type: "TYPE C (with powder room + balcony) - VARIANT 2",
				suite: "785.12 SQ.FT.",
				balcony: "59.09 SQ.FT.",
				total: "844.21 SQ.FT",
			},
		],
	},
	{
		template: 2,
		title: [
			{ lng: "ar", value: "Floor Plan" },
			{ lng: "en", value: "Floor Plan" },
			{ lng: "ru", value: "поэтажный план" },
			{ lng: "fa", value: "Floor Plan" },
		],
		floors: [
			{
				btnTitle: "All",
				btnSubTitle: [{ lng: "en", value: "Studios" }],
				title: [{ lng: "en", value: "Studio Units" }],
				icon: "",
				total: "448 sqft",
				img: Studio,
			},
			{
				btnTitle: "1",
				btnSubTitle: [{ lng: "en", value: "BR" }],
				title: [{ lng: "en", value: "1-Bedroom Units" }],
				icon: "",
				total: "762 sqft",
				img: BR1,
			},
			{
				btnTitle: "2",
				btnSubTitle: [{ lng: "en", value: "BR" }],
				title: [{ lng: "en", value: "2-Bedroom Units" }],
				icon: "",
				total: "1,108 SQ.FT.",
				img: BR2,
			},
			{
				btnTitle: "3",
				btnSubTitle: [{ lng: "en", value: "BR" }],
				title: [{ lng: "en", value: "3-Bedroom Units" }],
				icon: "",
				total: "2,300 SQ.FT.",
				img: BR3,
			},
		],
	},
	{
		template: 3,
		title: [
			{ lng: "ar", value: "Floor Plan" },
			{ lng: "en", value: "Floor Plan" },
			{ lng: "ru", value: "поэтажный план" },
			{ lng: "fa", value: "Floor Plan" },
		],

		floors: [
			{
				btnTitle: "5",
				btnSubTitle: [
					{ lng: "ar", value: "BR Mansion" },
					{ lng: "en", value: "BR Mansion" },
					{ lng: "ru", value: "Ком Особняк" },
					{ lng: "fa", value: "BR Mansion" },
				],
				title: [
					{ lng: "ar", value: "5 BR MANSION" },
					{ lng: "en", value: "5 BR MANSION" },
					{ lng: "ru", value: "5 Ком Особняк" },
					{ lng: "fa", value: "5 BR MANSION" },
				],
				icon: "",
				plot: "7233 SQ.FT.",
				total: "8418 SQ.FT.",
				img: BR5M,
			},
			{
				btnTitle: "6",
				btnSubTitle: [
					{ lng: "ar", value: "BR Mansion" },
					{ lng: "en", value: "BR Mansion" },
					{ lng: "ru", value: "Ком Особняк" },
					{ lng: "fa", value: "BR Mansion" },
				],
				title: [
					{ lng: "ar", value: "6 BR MANSION" },
					{ lng: "en", value: "6 BR MANSION" },
					{ lng: "ru", value: "6 Ком Особняк" },
					{ lng: "fa", value: "6 BR MANSION" },
				],
				icon: "",
				plot: "8611 SQ.FT.",
				total: "11220 SQ.FT.",
				img: BR6M,
			},
			{
				btnTitle: "7",
				btnSubTitle: [
					{ lng: "ar", value: "BR Mansion" },
					{ lng: "en", value: "BR Mansion" },
					{ lng: "ru", value: "Ком Особняк" },
					{ lng: "fa", value: "BR Mansion" },
				],
				title: [
					{ lng: "ar", value: "7 BR MANSION" },
					{ lng: "en", value: "7 BR MANSION" },
					{ lng: "ru", value: "7 Ком Особняк" },
					{ lng: "fa", value: "7 BR MANSION" },
				],
				icon: "",
				plot: "10333 SQ.FT.",
				total: "13682 SQ.FT.",
				img: BR7M,
			},
			{
				btnTitle: "4",
				btnSubTitle: [
					{ lng: "ar", value: "BR Tounhouse" },
					{ lng: "en", value: "BR Tounhouse" },
					{ lng: "ru", value: "Ком Таунхаус" },
					{ lng: "fa", value: "BR Tounhouse" },
				],
				title: [
					{ lng: "ar", value: "4 BR Townhouse" },
					{ lng: "en", value: "4 BR Townhouse" },
					{ lng: "ru", value: "4 Ком Таунхаус" },
					{ lng: "fa", value: "4 BR Townhouse" },
				],
				icon: "",
				plot: "4219 SQ.FT.",
				total: "4271 SQ.FT.",
				img: BR4T,
			},
			{
				btnTitle: "5",
				btnSubTitle: [
					{ lng: "ar", value: "BR Tounhouse" },
					{ lng: "en", value: "BR Tounhouse" },
					{ lng: "ru", value: "Ком Таунхаус" },
					{ lng: "fa", value: "BR Tounhouse" },
				],
				title: [
					{ lng: "ar", value: "5 BR Townhouse" },
					{ lng: "en", value: "5 BR Townhouse" },
					{ lng: "ru", value: "5 Ком Таунхаус" },
					{ lng: "fa", value: "5 BR Townhouse" },
				],
				icon: "",
				plot: "3978 SQ.FT.",
				total: "3559 SQ.FT.",
				img: BR5T,
			},
		],
	},
];
