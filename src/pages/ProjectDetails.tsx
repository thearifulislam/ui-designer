import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  ArrowLeft,
  User,
  Tag,
  CheckCircle,
  Circle,
  Layers,
  ArrowUpRight,
  Eye,
} from "lucide-react";

// for website ui design
import websiteui1 from "../assets/portfolios/ui/website ui/landing-page/1/Website UI Design.jpg";
import websiteui2 from "../assets/portfolios/ui/website ui/landing-page/1/Website UI-UX Design.jpg";


// logo design images (add more as needed)
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import momentum1 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/2.jpg";
import momentum2 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/3.jpg";
import momentum3 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/4.jpg";
import momentum4 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/5.jpg";
import momentum5 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/6.jpg";
import momentum6 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/7.jpg";
import momentum7 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/8.jpg";
import momentum8 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/9.jpg";
import momentum9 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/10.jpg";
import momentum10 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/11.jpg";
import momentum11 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/12.jpg";
import momentum12 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/13.jpg";
import momentum13 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/14.jpg";
import momentum14 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/15.jpg";
import momentum15 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/16.jpg";
import momentum16 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/17.jpg";
import momentum17 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/18.jpg";
import momentum18 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/19.jpg";
import momentum19 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/20.jpg";
import momentum20 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/21.jpg";
import momentum21 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/22.jpg";

import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import blooddonation1 from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/2.jpg";
import blooddonation2 from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/3.jpg";

import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";
import uniflora1 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/2.jpg";
import uniflora2 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/3.jpg";
import uniflora3 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/4.jpg";
import uniflora4 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/5.jpg";
import uniflora5 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/6.jpg";
import uniflora6 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/7.jpg";
import uniflora7 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/8.jpg";
import uniflora8 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/9.jpg";
import uniflora9 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/10.jpg";
import uniflora10 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/11.jpg";
import uniflora11 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/12.jpg";
import uniflora12 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/13.jpg";
import uniflora13 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/14.jpg";
import uniflora14 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/15.jpg";
import uniflora15 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/16.jpg";
import uniflora16 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/17.jpg";
import uniflora17 from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/18.jpg";

import winnest from "../assets/portfolios/logo-design/wordmark/real-estate/1/1.jpg";
import winnest1 from "../assets/portfolios/logo-design/wordmark/real-estate/1/2.jpg";
import winnest2 from "../assets/portfolios/logo-design/wordmark/real-estate/1/3.jpg";
import winnest3 from "../assets/portfolios/logo-design/wordmark/real-estate/1/4.jpg";
import winnest4 from "../assets/portfolios/logo-design/wordmark/real-estate/1/5.jpg";
import winnest5 from "../assets/portfolios/logo-design/wordmark/real-estate/1/6.jpg";
import winnest6 from "../assets/portfolios/logo-design/wordmark/real-estate/1/7.jpg";
import winnest7 from "../assets/portfolios/logo-design/wordmark/real-estate/1/8.jpg";
import winnest8 from "../assets/portfolios/logo-design/wordmark/real-estate/1/9.jpg";
import winnest9 from "../assets/portfolios/logo-design/wordmark/real-estate/1/10.jpg";
import winnest10 from "../assets/portfolios/logo-design/wordmark/real-estate/1/11.jpg";
import winnest11 from "../assets/portfolios/logo-design/wordmark/real-estate/1/12.jpg";
import winnest12 from "../assets/portfolios/logo-design/wordmark/real-estate/1/13.jpg";
import winnest13 from "../assets/portfolios/logo-design/wordmark/real-estate/1/14.jpg";
import winnest14 from "../assets/portfolios/logo-design/wordmark/real-estate/1/15.jpg";
import winnest15 from "../assets/portfolios/logo-design/wordmark/real-estate/1/16.jpg";
import winnest16 from "../assets/portfolios/logo-design/wordmark/real-estate/1/17.jpg";

import meloplay from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/1.jpg";
import meloplay1 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/2.jpg";
import meloplay2 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/3.jpg";
import meloplay3 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/4.jpg";
import meloplay4 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/5.jpg";
import meloplay5 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/6.jpg";
import meloplay6 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/7.jpg";
import meloplay7 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/8.jpg";
import meloplay8 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/9.jpg";
import meloplay9 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/10.jpg";
import meloplay10 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/11.jpg";
import meloplay11 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/12.jpg";
import melopaly12 from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/13.jpg";

import player from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/1.jpg";
import player1 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/2.jpg";
import player2 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/3.jpg";
import player3 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/4.jpg";
import player4 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/5.jpg";
import player5 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/6.jpg";
import player6 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/7.jpg";
import player7 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/8.jpg";
import player8 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/9.jpg";
import player9 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/10.jpg";
import player10 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/11.jpg";
import player11 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/12.jpg";
import player12 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/13.jpg";
import player13 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/14.jpg";
import player14 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/15.jpg";
import player15 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/16.jpg";
import player16 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/17.jpg";

import arborsphere from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/1.jpg";
import arborsphere1 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/2.jpg";
import arborsphere2 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/3.jpg";
import arborsphere3 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/4.jpg";
import arborsphere4 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/5.jpg";
import arborsphere5 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/6.jpg";
import arborsphere6 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/7.jpg";
import arborsphere7 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/8.jpg";
import arborsphere8 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/9.jpg";
import arborsphere9 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/10.jpg";
import arborsphere10 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/11.jpg";
import arborsphere11 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/2.jpg";
import arborsphere12 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/13.jpg";
import arborsphere13 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/14.jpg";
import arborsphere14 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/15.jpg";
import arborsphere15 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/16.jpg";
import arborsphere16 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/17.jpg";
import arborsphere17 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/18.jpg";
import arborsphere18 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/19.jpg";
import arborsphere19 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/20.jpg";
import arborsphere20 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/21.jpg";
import arborsphere21 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/22.jpg";

import wind from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/1.jpg";
import wind1 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/2.jpg";
import wind2 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/3.jpg";
import wind3 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/4.jpg";
import wind4 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/5.jpg";
import wind5 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/6.jpg";
import wind6 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/7.jpg";
import wind7 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/8.jpg";
import wind8 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/9.jpg";
import wind9 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/10.jpg";
import wind10 from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/11.jpg";

import zxon from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/1.jpg";
import zxon1 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/2.jpg";
import zxon2 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/3.jpg";
import zxon3 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/4.jpg";
import zxon4 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/5.jpg";
import zxon5 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/6.jpg";
import zxon6 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/7.jpg";
import zxon7 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/8.jpg";
import zxon8 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/9.jpg";
import zxon9 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/10.jpg";
import zxon10 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/11.jpg";
import zxon11 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/12.jpg";
import zxon12 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/13.jpg";
import zxon13 from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/14.jpg";

import zepeq from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/1.jpg";
import zepeq1 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/2.jpg";
import zepeq2 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/3.jpg";
import zepeq3 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/4.jpg";
import zepeq4 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/5.jpg";
import zepeq5 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/6.jpg";
import zepeq6 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/7.jpg";
import zepeq7 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/8.jpg";
import zepeq8 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/9.jpg";
import zepeq9 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/10.jpg";
import zepeq10 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/11.jpg";
import zepeq11 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/12.jpg";
import zepeq12 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/13.jpg";
import zepeq13 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/14.jpg";
import zepeq14 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/15.jpg";
import zepeq15 from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/16.jpg";

import ecogrow from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/1.jpg";
import ecogrow1 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/2.jpg";
import ecogrow2 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/3.jpg";
import ecogrow3 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/4.jpg";
import ecogrow4 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/5.jpg";
import ecogrow5 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/6.jpg";
import ecogrow6 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/7.jpg";
import ecogrow7 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/8.jpg";
import ecogrow8 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/9.jpg";
import ecogrow9 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/10.jpg";
import ecogrow10 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/11.jpg";
import ecogrow11 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/12.jpg";
import ecogrow12 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/13.jpg";
import ecogrow13 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/14.jpg";
import ecogrow14 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/15.jpg";
import ecogrow15 from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/16.jpg";

import playerlogo from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/1.jpg";
import playerlogo1 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/2.jpg";
import playerlogo2 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/3.jpg";
import playerlogo3 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/4.jpg";
import playerlogo4 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/5.jpg";
import playerlogo5 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/6.jpg";
import playerlogo6 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/7.jpg";
import playerlogo7 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/8.jpg";
import playerlogo8 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/9.jpg";
import playerlogo9 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/10.jpg";
import playerlogo10 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/11.jpg";
import playerlogo11 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/12.jpg";
import playerlogo12 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/13.jpg";
import playerlogo13 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/14.jpg";
import playerlogo14 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/15.jpg";
import playerlogo15 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/16.jpg";
import playerlogo16 from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/17.jpg";

import cycle from "../assets/portfolios/logo-design/lettermark-logo/cycle/1.png";
import cycle1 from "../assets/portfolios/logo-design/lettermark-logo/cycle/2.png";
import cycle2 from "../assets/portfolios/logo-design/lettermark-logo/cycle/3.png";
import cycle3 from "../assets/portfolios/logo-design/lettermark-logo/cycle/4.png";
import cycle4 from "../assets/portfolios/logo-design/lettermark-logo/cycle/5.png";
import cycle5 from "../assets/portfolios/logo-design/lettermark-logo/cycle/6.jpg";
import cycle6 from "../assets/portfolios/logo-design/lettermark-logo/cycle/7.png";
import cycle7 from "../assets/portfolios/logo-design/lettermark-logo/cycle/8.jpg";
import cycle8 from "../assets/portfolios/logo-design/lettermark-logo/cycle/9.png";
import cycle9 from "../assets/portfolios/logo-design/lettermark-logo/cycle/10.png";
import cycle10 from "../assets/portfolios/logo-design/lettermark-logo/cycle/11.png";
import cycle11 from "../assets/portfolios/logo-design/lettermark-logo/cycle/12.png";
import cycle12 from "../assets/portfolios/logo-design/lettermark-logo/cycle/13.jpg";

import dynamic from "../assets/portfolios/logo-design/brand-guidelines/letter-d/1.jpg"
import dynamic1 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/2.jpg"
import dynamic2 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/3.jpg"
import dynamic3 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/4.jpg"
import dynamic4 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/5.jpg"
import dynamic5 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/6.jpg"
import dynamic6 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/7.jpg"
import dynamic7 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/8.jpg"
import dynamic8 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/9.jpg"
import dynamic9 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/10.jpg"
import dynamic10 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/11.jpg"
import dynamic11 from "../assets/portfolios/logo-design/brand-guidelines/letter-d/12.jpg"





// for business card

import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";

import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";

import visitingcard from "../assets/portfolios/business-card/professional/1/1.jpg";
import visitingcard1 from "../assets/portfolios/business-card/professional/1/2.jpg";
import visitingcard2 from "../assets/portfolios/business-card/professional/1/3.jpg";
import visitingcard3 from "../assets/portfolios/business-card/professional/1/4.jpg";
import visitingcard4 from "../assets/portfolios/business-card/professional/1/5.jpg";

import minimalistcard from "../assets/portfolios/business-card/minimalist/3/mnvb-24.jpg";

import professionalcard from "../assets/portfolios/business-card/professional/2/1.jpg";
import professionalcard1 from "../assets/portfolios/business-card/professional/2/2.jpg";
import professionalcard2 from "../assets/portfolios/business-card/professional/2/3.jpg";
import professionalcard3 from "../assets/portfolios/business-card/professional/2/4.jpg";

import customcard from "../assets/portfolios/business-card/custom/1/1.jpg";
import customcard1 from "../assets/portfolios/business-card/custom/1/2.jpg";
import customcard2 from "../assets/portfolios/business-card/custom/1/3.jpg";
import customcard3 from "../assets/portfolios/business-card/custom/1/4.jpg";
import customcard4 from "../assets/portfolios/business-card/custom/1/5.jpg";
import customcard5 from "../assets/portfolios/business-card/custom/1/6.jpg";
import customcard6 from "../assets/portfolios/business-card/custom/1/7.jpg";

import moderncard from "../assets/portfolios/business-card/modern/1/1.jpg";
import moderncard1 from "../assets/portfolios/business-card/modern/1/2.jpg";
import moderncard2 from "../assets/portfolios/business-card/modern/1/3.jpg";
import moderncard3 from "../assets/portfolios/business-card/modern/1/4.jpg";
import moderncard4 from "../assets/portfolios/business-card/modern/1/5.jpg";
import moderncard5 from "../assets/portfolios/business-card/modern/1/6.jpg";

import custombusinesscard from "../assets/portfolios/business-card/custom/2/custombusinesscard1.jpeg"
import custombusinesscard1 from "../assets/portfolios/business-card/custom/2/custombusinesscard2.jpg"

// for letterhead

import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";

import corporate from "../assets/portfolios/letterhead/minimalist-corporate/1/1.jpg";
import corporate1 from "../assets/portfolios/letterhead/minimalist-corporate/1/2.jpg";
import corporate2 from "../assets/portfolios/letterhead/minimalist-corporate/1/3.jpg";

import modern from "../assets/portfolios/letterhead/modern&corporate/1/modern and corporate letterhead design.jpg";
import modern2 from "../assets/portfolios/letterhead/modern&corporate/1/modern and dynamic corporate letterhead.jpg";
import modern3 from "../assets/portfolios/letterhead/modern&corporate/1/modern and geometric corporate letterhead.jpg";

// for banner

import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";

// for social media cover
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";
import socialmediacoverdesign1 from "../assets/portfolios/social-cover/facebook-cover/1/2.jpg";

// for background remove

import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/1.jpg";
import imageclippingpath1 from "../assets/portfolios/background-remove/clipping-path/1/2.jpg";
import imageclippingpath2 from "../assets/portfolios/background-remove/clipping-path/1/3.jpg";
import imageclippingpath3 from "../assets/portfolios/background-remove/clipping-path/1/4.jpg";
import imageclippingpath4 from "../assets/portfolios/background-remove/clipping-path/1/5.jpg";
import imageclippingpath5 from "../assets/portfolios/background-remove/clipping-path/1/6.jpg";
import imageclippingpath6 from "../assets/portfolios/background-remove/clipping-path/1/7.jpg";
import imageclippingpath7 from "../assets/portfolios/background-remove/clipping-path/1/8.jpg";
import imageclippingpath8 from "../assets/portfolios/background-remove/clipping-path/1/9.jpg";
import imageclippingpath9 from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";
import imageclippingpath10 from "../assets/portfolios/background-remove/clipping-path/1/11.png";
import imageclippingpath11 from "../assets/portfolios/background-remove/clipping-path/1/12.jpg";
import imageclippingpath12 from "../assets/portfolios/background-remove/clipping-path/1/13.jpg";
import imageclippingpath13 from "../assets/portfolios/background-remove/clipping-path/1/14.jpg";

// for image editing
import colorcorrection from "../assets/portfolios/image-editing/color-correction/1/colorcorrection.jpeg"
import imageretouching from "../assets/portfolios/image-editing/image-retouching/1/image-retouching.jpg"
import spotremoval from "../assets/portfolios/image-editing/sport-removal/1/spotremove.jpg"



// for brand guidelines
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import boldpath1 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/2.jpg";
import boldpath2 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/3.jpg";
import boldpath3 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/4.jpg";
import boldpath4 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/5.jpg";
import boldpath5 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/6.jpg";
import boldpath6 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/7.jpg";
import boldpath7 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/8.jpg";
import boldpath8 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/9.jpg";
import boldpath9 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/10.jpg";
import boldpath10 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/11.jpg";
import boldpath11 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/12.jpg";
import boldpath12 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/13.jpg";
import boldpath13 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/14.jpg";
import boldpath14 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/15.jpg";
import boldpath15 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/16.jpg";
import boldpath16 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/17.jpg";
import boldpath17 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/18.jpg";
import boldpath18 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/19.jpg";
import boldpath19 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/20.jpg";
import boldpath20 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/21.jpg";
import boldpath21 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/22.jpg";
import boldpath22 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/23.jpg";
import boldpath23 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/24.jpg";
import boldpath24 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/25.jpg";
import boldpath25 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/26.jpg";
import boldpath26 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/27.jpg";
import boldpath27 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/28.jpg";
import boldpath28 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/29.jpg";
import boldpath29 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/30.jpg";
import boldpath30 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/31.jpg";
import boldpath31 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/32.jpg";
import boldpath32 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/33.jpg";
import boldpath33 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/34.jpg";
import boldpath34 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/35.jpg";
import boldpath35 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/36.jpg";
import boldpath36 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/37.jpg";
import boldpath37 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/38.jpg";
import boldpath38 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/39.jpg";
import boldpath39 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/40.jpg";
import boldpath40 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/41.jpg";
import boldpath41 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/42.jpg";
import boldpath42 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/43.jpg";
import boldpath43 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/44.jpg";
import boldpath44 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/45.jpg";
import boldpath45 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/46.jpg";
import boldpath46 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/47.jpg";

import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/pro.jpg";
import ranova1 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";
import ranova2 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/2.jpg";
import ranova3 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/3.jpg";
import ranova4 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/4.jpg";
import ranova5 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/5.jpg";
import ranova6 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/6.jpg";
import ranova7 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/7.jpg";
import ranova8 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/8.jpg";
import ranova9 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/9.jpg";
import ranova10 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/10.jpg";
import ranova11 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/11.jpg";
import ranova12 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/12.jpg";
import ranova13 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/13.jpg";
import ranova14 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/14.jpg";
import ranova15 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/15.jpg";
import ranova16 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/16.jpg";
import ranova17 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/17.jpg";
import ranova18 from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/18.jpg";

import nexus from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/1.jpg";
import nexus1 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/2.jpg";
import nexus2 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/3.jpg";
import nexus3 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/4.jpg";
import nexus4 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/5.jpg";
import nexus5 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/6.jpg";
import nexus6 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/7.jpg";
import nexus7 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/8.jpg";
import nexus8 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/9.jpg";
import nexus9 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/10.jpg";
import nexus10 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/11.jpg";
import nexus11 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/12.jpg";
import nexus12 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/13.jpg";
import nexus13 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/14.jpg";
import nexus14 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/15.jpg";
import nexus15 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/16.jpg";
import nexus16 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/17.jpg";
import nexus17 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/18.jpg";
import nexus18 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/19.jpg";
import nexus19 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/20.jpg";
import nexus20 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/21.jpg";
import nexus21 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/22.jpg";
import nexus22 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/23.jpg";
import nexus23 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/24.jpg";
import nexus24 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/25.jpg";
import nexus25 from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/26.jpg";

const allImgs = [
  momentum,
  momentum1,
  momentum2,
  momentum3,
  momentum4,
  momentum5,
  momentum6,
  momentum7,
  momentum8,
  momentum9,
  momentum10,
  momentum11,
  momentum12,
  momentum13,
  momentum14,
  momentum15,
  momentum16,
  momentum17,
  momentum18,
  momentum19,
  momentum20,
  momentum21,
];

type ProjectType = {
  title: string;
  category: string;
  client: string;
  date: string;
  tags: string[];
  coverImage: string;
  description: string;
  galleryImages: string[];
  tools?: string[];
  creativeFields?: string[]; // New field for creative fields
};

const projectsData: Record<string, ProjectType> = {
  "momentum-clothing-brand-for-men": {
    title: "Momentum Menswear",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Graphic Design", "Branding"],
    coverImage: momentum,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",
    galleryImages: allImgs,
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  "modern-minimalist-camera-business-card": {
    title: "Business Card Design",
    category: "Business Card",
    client: "Freelance.",
    date: "April 2025",
    tags: ["Business Card", "Card Design", "Visiting Card Design"],
    coverImage: websiteui1,
    description:
      "The business card embraces a sleek, minimalist aesthetic with bold typography and balanced spacing. The header 'SCIENCE CAMERA' hints at a niche focus—perhaps blending design with scientific or technical visuals. The empty 'ADDTAGLINEHER' space invites a punchy slogan (e.g., 'Designing Clarity Through Pixels').",

    galleryImages: [websiteui1, websiteui2],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  // for business card design

  "modern-business-card-design": {
    title: "Momentum Menswear",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: modernbusinesscard,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [modernbusinesscard],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "professional-business-card-design": {
    title: "Professional Business Card Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: visitingcard,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      visitingcard,
      visitingcard1,
      visitingcard2,
      visitingcard3,
      visitingcard4,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },
  
  "custom-business-card-design": {
    title: "Custom Business Card Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: custombusinesscard,
    description:
      "Custom Business Card Design is a design that is created to meet the specific needs of a client. It is a design that is created to meet the specific needs of a client. It is a design that is created to meet the specific needs of a client.",
    galleryImages: [custombusinesscard, custombusinesscard1],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },


  // for letterhead design

  "elegant-gold-accented-corporate-letterhead": {
    title: "Letterhead Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: elegantgoldaccentedcorporateletterhead,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [elegantgoldaccentedcorporateletterhead],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "professional-promotional-banner": {
    title: "Promotional Banner Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: professionalpromotionalbanner,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [professionalpromotionalbanner],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "creative-facebook-cover-design": {
    title: "Promotional Banner Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: socialmediacoverdesign,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [socialmediacoverdesign, socialmediacoverdesign1],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "image-background-remove-clipping-path": {
    title: "Promotional Banner Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: imageclippingpath,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      imageclippingpath,
      imageclippingpath1,
      imageclippingpath2,
      imageclippingpath3,
      imageclippingpath4,
      imageclippingpath5,
      imageclippingpath6,
      imageclippingpath7,
      imageclippingpath8,
      imageclippingpath9,
      imageclippingpath10,
      imageclippingpath11,
      imageclippingpath12,
      imageclippingpath13,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  // for image editing

  "color-correction-photoshop-1": {
    title: "Color Correction in Photoshop",
    category: "Image Editing",
    client: "Freelance",
    date: "April 2025",
    tags: ["Image Editing", "Color Correction"],
    coverImage: colorcorrection,
    description:
      "Color Correction is a process of adjusting the color of an image to make it look more natural and realistic. It is a technique used to correct the color of an image that has been affected by lighting or other factors.",

    galleryImages: [colorcorrection],
    tools: ["Adobe Photoshop"],
  },

  "color-retouching-photoshop-1": {
    title: "Image Retouching in Photoshop",
    category: "Image Editing",
    client: "Freelance",
    date: "April 2025",
    tags: ["Image Editing", "Image Retouching"],
    coverImage: imageretouching,
    description:
      "Image Retouching is a process of editing an image to make it look more natural and realistic. It is a technique used to correct the image that has been affected by lighting or other factors.",

    galleryImages: [imageretouching],
    tools: ["Adobe Photoshop"],
  },

  "spot-remova-1": {
    title: "Spot Removal in Photoshop",
    category: "Image Editing",
    client: "Freelance",
    date: "April 2025",
    tags: ["Image Editing", "Spot Removal"],
    coverImage: spotremoval,
    description:
      "Spot Removal is a process of removing a spot from an image. It is a technique used to remove a spot from an image that has been affected by lighting or other factors.",

    galleryImages: [spotremoval],
    tools: ["Adobe Photoshop"],
  },

  // for brand guidelines

  "boldpath-brand-guidelines": {
    title: "Promotional Banner Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: boldpath,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      boldpath,
      boldpath1,
      boldpath2,
      boldpath3,
      boldpath4,
      boldpath5,
      boldpath6,
      boldpath7,
      boldpath8,
      boldpath9,
      boldpath10,
      boldpath11,
      boldpath12,
      boldpath13,
      boldpath14,
      boldpath15,
      boldpath16,
      boldpath17,
      boldpath18,
      boldpath19,
      boldpath20,
      boldpath21,
      boldpath22,
      boldpath23,
      boldpath24,
      boldpath25,
      boldpath26,
      boldpath27,
      boldpath28,
      boldpath29,
      boldpath30,
      boldpath31,
      boldpath32,
      boldpath33,
      boldpath34,
      boldpath35,
      boldpath36,
      boldpath37,
      boldpath38,
      boldpath39,
      boldpath40,
      boldpath41,
      boldpath42,
      boldpath43,
      boldpath44,
      boldpath45,
      boldpath46,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },


  "dynamic-brand-guidelines": {
    title: "Dynamic Brand Guidelines",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: dynamic,
    description:
      "Dynamic Brand Guidelines is a collection of images that showcase the different ways to use the brand's logo. The guidelines are designed to help the brand maintain a consistent look and feel across all of its marketing materials.",

    galleryImages: [dynamic, dynamic1, dynamic2, dynamic3, dynamic4, dynamic5, dynamic6, dynamic7, dynamic8, dynamic9, dynamic10, dynamic11],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },




  "blood-donation-logo-design": {
    title: "Promotional Banner Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: blooddonation,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [blooddonation, blooddonation1, blooddonation2],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "modern-minimalist-letterhead-design": {
    title: "Promotional Banner Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: modernminimalist,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [modernminimalist],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "uniflora-logo-design": {
    title: "Promotional Banner Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: uniflora,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      uniflora,
      uniflora1,
      uniflora2,
      uniflora3,
      uniflora4,
      uniflora5,
      uniflora6,
      uniflora7,
      uniflora8,
      uniflora9,
      uniflora10,
      uniflora11,
      uniflora12,
      uniflora13,
      uniflora14,
      uniflora15,
      uniflora16,
      uniflora17,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "ranova-brand-guidelines": {
    title: "Promotional Banner Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: ranova,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      ranova,
      ranova1,
      ranova2,
      ranova3,
      ranova4,
      ranova5,
      ranova6,
      ranova7,
      ranova8,
      ranova9,
      ranova10,
      ranova11,
      ranova12,
      ranova13,
      ranova14,
      ranova15,
      ranova16,
      ranova17,
      ranova18,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "winnest-logo-design": {
    title: "WinNest Real Estate Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: winnest,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      winnest,
      winnest1,
      winnest2,
      winnest3,
      winnest4,
      winnest5,
      winnest6,
      winnest7,
      winnest8,
      winnest9,
      winnest10,
      winnest11,
      winnest12,
      winnest13,
      winnest14,
      winnest15,
      winnest16,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "minimalist-card-design": {
    title: "Minimalist Business Card Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: minimalistcard,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [minimalistcard],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "professional-card-design": {
    title: "Minimalist Business Card Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: professionalcard,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      professionalcard,
      professionalcard1,
      professionalcard2,
      professionalcard3,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "custom-card-design": {
    title: "Minimalist Business Card Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: customcard,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      customcard,
      customcard1,
      customcard2,
      customcard3,
      customcard4,
      customcard5,
      customcard6,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "modern-card-design": {
    title: "Modern Business Card Design",
    category: "Business Card Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Business Card Design", "Modern Card"],
    coverImage: moderncard,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      moderncard,
      moderncard1,
      moderncard2,
      moderncard3,
      moderncard4,
      moderncard5,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "nexus-brand-guidelines": {
    title: "Minimalist Business Card Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: nexus,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      nexus,
      nexus1,
      nexus2,
      nexus3,
      nexus4,
      nexus5,
      nexus6,
      nexus7,
      nexus8,
      nexus9,
      nexus10,
      nexus11,
      nexus12,
      nexus13,
      nexus14,
      nexus15,
      nexus16,
      nexus17,
      nexus18,
      nexus19,
      nexus20,
      nexus21,
      nexus22,
      nexus23,
      nexus24,
      nexus25,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "meloplay-logo-design": {
    title: "Meloplay Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: meloplay,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      meloplay,
      meloplay1,
      meloplay2,
      meloplay3,
      meloplay4,
      meloplay5,
      meloplay6,
      meloplay7,
      meloplay8,
      meloplay9,
      meloplay10,
      meloplay11,
      melopaly12,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "player-logo-design": {
    title: "player Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: player,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      player,
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
      player12,
      player13,
      player14,
      player15,
      player16,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "the-player-logo-design": {
    title: "Player Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: playerlogo,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      playerlogo,
      playerlogo1,
      playerlogo2,
      playerlogo3,
      playerlogo4,
      playerlogo5,
      playerlogo6,
      playerlogo7,
      playerlogo8,
      playerlogo9,
      playerlogo10,
      playerlogo11,
      playerlogo12,
      playerlogo13,
      playerlogo14,
      playerlogo15,
      playerlogo16,
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },

  "arborsphere-logo-design": {
    title: "ArborSphere Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: arborsphere,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      arborsphere,
      arborsphere1,
      arborsphere2,
      arborsphere3,
      arborsphere4,
      arborsphere5,
      arborsphere6,
      arborsphere7,
      arborsphere8,
      arborsphere9,
      arborsphere10,
      arborsphere11,
      arborsphere12,
      arborsphere13,
      arborsphere14,
      arborsphere15,
      arborsphere16,
      arborsphere17,
      arborsphere18,
      arborsphere19,
      arborsphere20,
      arborsphere21,
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  "wind-logo-design": {
    title: "Wind Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: wind1,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      wind,
      wind1,
      wind2,
      wind3,
      wind4,
      wind5,
      wind6,
      wind7,
      wind8,
      wind9,
      wind10,
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  "zxon-logo-design": {
    title: "Zxon Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: zxon,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      zxon,
      zxon1,
      zxon2,
      zxon3,
      zxon4,
      zxon5,
      zxon6,
      zxon7,
      zxon8,
      zxon9,
      zxon10,
      zxon11,
      zxon12,
      zxon13,
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  "zepeq-logo-design": {
    title: "Zepeq Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: zepeq,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      zepeq,
      zepeq1,
      zepeq2,
      zepeq3,
      zepeq4,
      zepeq5,
      zepeq6,
      zepeq7,
      zepeq8,
      zepeq9,
      zepeq10,
      zepeq11,
      zepeq12,
      zepeq13,
      zepeq14,
      zepeq15,
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  "ecogrow-logo-design": {
    title: "Ecogrow Logo Design",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: ecogrow,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [
      ecogrow,
      ecogrow1,
      ecogrow2,
      ecogrow3,
      ecogrow4,
      ecogrow5,
      ecogrow6,
      ecogrow7,
      ecogrow8,
      ecogrow9,
      ecogrow10,
      ecogrow11,
      ecogrow12,
      ecogrow13,
      ecogrow14,
      ecogrow15,
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  "corporate-letterhead-design": {
    title: "Letterhead Design",
    category: "Letterhead",
    client: "Freelance",
    date: "April 2025",
    tags: ["Letterhead", "Corporate"],
    coverImage: corporate,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [corporate, corporate1, corporate2],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  "modern-letterhead-design": {
    title: "Letterhead Design",
    category: "Letterhead",
    client: "Freelance",
    date: "April 2025",
    tags: ["Letterhead", "Modern"],
    coverImage: modern,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [modern, modern2, modern3],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  "cycle-logo-design": {
    title: "Cycle Logo Design",
    category: "Logo",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo", "Lettermark"],
    coverImage: cycle,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",

    galleryImages: [

      cycle,
      cycle1,
      cycle2,
      cycle3,
      cycle4,
      cycle5,
      cycle6,
      cycle7,
      cycle8,
      cycle9,
      cycle10,
      cycle11,
      cycle12,
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },



  // ...more projects if needed
};

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const projectId = params.projectId;
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [projectId]);

  const project: ProjectType | undefined = projectId
    ? projectsData[projectId]
    : undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-lg text-green-800 tracking-widest font-mono">
              Loading...
            </span>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-green-50 to-emerald-50">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <div className="h-12 sm:h-20" />
          <div className="flex flex-col items-center max-w-lg w-full rounded-3xl shadow-2xl p-10 border border-green-200 bg-white/95">
            <div className="mb-6">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Circle className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-green-600">
              Project Not Found
            </h1>
            <p className="mb-8 text-gray-600 text-base sm:text-lg">
              Sorry, this project doesn't exist or has been moved.
            </p>
            <Link to="/projects" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-200 bg-green-600 hover:bg-green-700 border-2 border-green-600 hover:border-green-700"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Projects
              </button>
            </Link>
          </div>
          <div className="h-12 sm:h-20" />
        </main>
        <Footer />
      </div>
    );
  }

  const creativeFields =
    project.creativeFields && project.creativeFields.length > 0
      ? project.creativeFields
      : project.tags;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <div className="container mx-auto px-4">
          {/* Back to Projects Button */}
          <div className="mb-16">
            <Link 
              to="/projects" 
              className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="text-base font-medium">Back to Projects</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Project Info */}
            <div className="flex flex-col gap-6 sticky top-24">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Project Meta Info */}
              <div className="flex flex-wrap gap-6 text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-300" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-green-300" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-green-300" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="px-6 py-3 bg-green-700 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-green-600 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                  Visit Project
                </button>
              </div>
            </div>

            {/* Right: Cover Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                {/* Project Details Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Project Details
                  </h3>

                  {/* Tools */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-green-500" />
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-green-500" />
                        Project Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Creative Fields */}
                  {creativeFields && creativeFields.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Creative Fields
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {creativeFields.map((field, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Gallery */}
            <div className="lg:col-span-9">
              <div className="space-y-12">
                <h2 className="text-2xl font-bold text-gray-900">
                  Project Gallery
                </h2>
                
                {/* Gallery Grid - Modified for better handling of long images */}
                <div className="space-y-16">
                  {project.galleryImages && project.galleryImages.length > 0 ? (
                    project.galleryImages.map((img, idx) => {
                      // Check if it's a UI design image (you might want to add a flag in your data structure)
                      const isUIDesign = project.category === "Website UI";
                      
                      return (
                        <div
                          key={idx}
                          className={`group relative bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 ${
                            isUIDesign ? 'max-w-[1400px] mx-auto' : ''
                          }`}
                        >
                          {/* Image Wrapper */}
                          <div className={`relative ${
                            isUIDesign ? 'cursor-zoom-in' : ''
                          }`}>
                            <img
                              src={img}
                              alt={`${project.title} design showcase`}
                              className={`w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ${
                                isUIDesign ? 'min-h-[200px]' : ''
                              }`}
                              loading="lazy"
                              onClick={() => {
                                if (isUIDesign) {
                                  // Open image in new tab for full view
                                  window.open(img, '_blank');
                                }
                              }}
                            />
                            {/* Hover Overlay - only gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          {/* Optional Image Description */}
                          {isUIDesign && (
                            <div className="p-6 border-t border-gray-100">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Section {idx + 1}
                              </h3>
                              <p className="text-gray-600">
                                {/* Add description if available in your data structure */}
                                Click the image to view in full size for detailed inspection.
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex items-center justify-center h-48 bg-gray-50 rounded-xl text-gray-500">
                      No gallery images available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
