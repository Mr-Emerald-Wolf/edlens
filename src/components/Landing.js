import React from 'react';
import { motion } from 'framer-motion';

    //smile
const blobs = {
    one: {
        d:
            "M300.007 0.0616234C397.343 -1.47215 495.012 25.4701 559.635 98.275C628.47 175.825 675.232 285.425 639.799 382.877C607.01 473.058 490.608 479.999 405.048 523.44C315.133 569.093 234.753 672.442 140.597 636.339C43.8518 599.242 26.6436 473.827 9.26897 371.68C-6.52409 278.832 -7.59317 180.477 50.4405 106.299C109.054 31.38 204.896 1.56033 300.007 0.0616234Z"
    },
    two: {
        d:
            "M344.843 1.10919C437.987 -8.98476 525.417 51.1543 580.507 126.936C632.718 198.757 648.2 293.677 618.31 377.288C591.809 451.423 510.387 477.478 441.542 515.669C363.531 558.945 290.112 630.861 204.14 607.043C104.401 579.41 9.61143 496.564 0.472325 393.472C-8.08449 296.948 101.644 244.732 165.565 171.902C222.847 106.638 258.512 10.4648 344.843 1.10919Z"
    }
};

export default function Landing() {

    const icon = {
        hidden: {
            opacity: 0.5,
            pathLength: 0,

        },
        visible: {
            opacity: 1,
            pathLength: 1,

        }
    };

    return (
        <>
            <section id='landing' className="flex  h-screen items-center px-6 lg:px-32 bg-slate-700 justify-center ">
                <div className='hidden absolute w-1/5 h-3/4 bottom-0 left-0 bg-dots'> </div>
                <main id='' className="w-full md:w-9/12 xl:w-8/12">

                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 100 }} className="text-6xl md:text-10xl z-20 lg:text-[150px] mb-[5rem] font-medium  text-red-400">
                        EdLens
                    </motion.h1>
                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, type: "spring", stiffness: 100 }} className="text-4xl md:text-4xl lg:text-2xl mb-[5rem] text-left font-bold  text-pale">
                        A web based Augmented Reality Platform
                    </motion.h1>
                    <a href='https://44a8-136-233-9-98.in.ngrok.io/' className="rounded-md text-xl bg-red-400 p-3 ">Scan Now</a>

                    {/* <svg className="absolute top-[21%] left-[65%] "  fill="#edf5e1" width="30rem" height="30rem" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                    </svg> */}

                    <svg
                        className='absolute md:flex hidden top-[25%] left-[65%]'
                        width="30rem"
                        height="30rem"
                        viewBox="0 0 650 650"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            initial={blobs.one}
                            animate={blobs.two}
                            transition={{ yoyo: Infinity, duration: 4, ease: "easeInOut" }}
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="57.3913"
                                y1="214.187"
                                x2="489.792"
                                y2="330.049"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#edf5e1" />
                                <stop offset="1" stop-color="#edf5e1" />
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    <motion.svg className='hidden lg:flex  absolute top-[30%] left-[70%]' width="20rem" height="20rem" viewBox="-24.28 0 119.673 119.673" xmlns="http://www.w3.org/2000/svg">
                        <motion.g variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 3.75, ease: "easeInOut", delay: 2 },
                            }} transform="translate(-400.607 -375.914)">
                            <motion.rect variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3.75, ease: "easeInOut", delay: 2 },
                                }} width="68.12" height="116.673" rx="6.232" transform="translate(402.107 377.414)" strokeWidth="3" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <motion.line variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} x2="68.12" transform="translate(402.107 392.73)" strokeWidth="3" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <motion.line variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} x2="68.12" transform="translate(402.107 478.77)" strokeWidth="3" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <motion.line variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} x2="6.249" transform="translate(429.596 385.395)" strokeWidth="3" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <motion.line variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} x2="1.607" transform="translate(441.131 385.395)" strokeWidth="3" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <motion.line variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} x2="9.789" transform="translate(431.272 486.405)" strokeWidth="3" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <motion.path variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} d="M450.229,449.409V433.171l-14.062-8.119L422.1,433.171v16.238l14.062,8.119Z" fill="none" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <motion.path variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} d="M422.1,433.171l14.062,8.119,14.062-8.119" fill="none" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <motion.line variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} y1="16.238" transform="translate(436.167 441.29)" strokeWidth="3" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <motion.path variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} d="M440.272,417.927c13.4,1.065,23.678,7.26,23.678,14.743,0,8.231-12.439,14.9-27.783,14.9s-27.784-6.673-27.784-14.9c0-8.1,12.031-14.683,27.024-14.9" fill="none" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <motion.path variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 3, ease: "easeInOut", delay: 2 },
                                }} d="M432.153,413.972l3.253,3.8-3.253,3.8" fill="none" stroke="#f87171" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        </motion.g>
                    </motion.svg>
                    <div className="mt-2 p-2">
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 851.034 557.34684" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M785.20402,269.12891H95.10929c-9.25,0-16.77539-7.52539-16.77539-16.77637V16.77539c0-9.25,7.52539-16.77539,16.77539-16.77539H785.20402c9.25,0,16.77539,7.52539,16.77539,16.77539V252.35254c0,9.25098-7.52539,16.77637-16.77539,16.77637ZM95.10929,2c-8.14697,0-14.77539,6.62842-14.77539,14.77539V252.35254c0,8.14746,6.62842,14.77637,14.77539,14.77637H785.20402c8.14697,0,14.77539-6.62891,14.77539-14.77637V16.77539c0-8.14697-6.62842-14.77539-14.77539-14.77539H95.10929Z" fill="#3f3d56" /><rect id="uuid-dac6dc9f-03bc-4283-a90c-97bcdcbf45dc" y="550.55711" width="851.034" height="1.683" fill="#e6e6e6" /><rect id="uuid-2f9646f7-bb94-4523-8d2e-fd8f0877664c" y="464.55711" width="851.034" height="1.683" fill="#e6e6e6" /><g><path id="uuid-bb35f39c-94aa-41c4-b5d9-34ca9a9e88f1-201" d="M387.84012,277.7924c.6111,7.67992,5.06908,13.58982,9.95656,13.20011,4.88749-.38971,8.35284-6.93077,7.7405-14.61335-.20251-3.07223-1.13781-6.05129-2.72768-8.68793l-3.00018-32.50744-15.22478,1.73305,4.57404,31.86258c-1.15299,2.85593-1.6051,5.94649-1.31846,9.01298Z" fill="#ffb6b6" /><path d="M369.65265,126.13324s14.23183-7.53394,21.44832,3.72455c7.21649,11.25849,12.19715,133.02108,12.19715,133.02108l-20.0018,2.13549-3.79168-85.80267-9.85198-53.07844Z" fill="#e6e6e6" /><g><polygon points="340.11391 458.20431 351.70127 458.20318 357.21344 413.50859 340.11158 413.50978 340.11391 458.20431" fill="#ffb6b6" /><path d="M379.81365,457.94146h0c.36079,.60764,.55116,2.56882,.55116,3.27545h0c0,2.172-1.76073,3.9328-3.9328,3.9328h-35.88469c-1.48173,0-2.68297-1.20117-2.68297-2.68297v-1.49399s-1.77518-4.49023,1.8796-10.02469c0,0,4.54241,4.33356,11.32993-2.45396l2.00158-3.62601,14.48869,10.59629,8.03086,.98852c1.75699,.21625,3.31472-.03356,4.21849,1.48856h.00014Z" fill="#2f2e41" /></g><g><polygon points="407.16841 456.28595 418.39497 453.41695 412.67359 408.74865 396.10412 412.98257 407.16841 456.28595" fill="#ffb6b6" /><path d="M445.56792,446.20546h0c.49996,.49944,1.1698,2.35248,1.3447,3.03713h0c.53758,2.10442-.73257,4.24622-2.83706,4.78381l-34.76822,8.88157c-1.43562,.36673-2.89679-.49976-3.26354-1.93545l-.36977-1.44751s-2.83129-3.91116-.66002-10.178c0,0,5.47365,3.07447,10.37006-5.1818l1.04186-4.0086,16.66052,6.68062,8.02566-1.0299c1.75585-.22534,3.20328-.85292,4.45567,.39816l.00014-.00003Z" fill="#2f2e41" /></g><polygon points="330.5274 116.5252 329.97801 112.53821 336.50788 96.59024 354.44935 94.59675 358.32324 117.42831 330.5274 116.5252" fill="#ffb6b6" /><polygon points="330.5274 116.5252 329.97801 112.53821 336.50788 96.59024 354.44935 94.59675 358.32324 117.42831 330.5274 116.5252" opacity=".1" /><polygon points="309.59569 229.15772 301.6217 251.08618 307.60219 263.04715 337.50463 436.4813 357.38465 436.4813 353.4526 282.98211 399.30301 436.4813 418.97897 436.4813 403.15657 332.81951 391.32902 237.13171 384.15521 232.6999 349.46561 213.20976 309.59569 229.15772" fill="#2f2e41" /><polygon points="360.42983 244.10894 348.46886 246.10244 332.52089 208.22602 368.40382 208.22602 360.42983 244.10894" fill="#e6e6e6" /><polygon points="384.35179 234.14146 360.42983 244.10894 352.45585 226.16748 348.46886 246.10244 306.60544 232.62639 312.58593 208.22602 306.60544 128.48618 327.71662 114.41198 330.5274 112.53821 356.44284 114.53171 358.71546 115.76767 374.38431 124.49919 378.3713 190.28455 384.35179 234.14146" fill="#2f2e41" /><polygon points="358.71546 115.76767 347.47211 163.37236 327.71662 114.41198 330.5274 112.53821 356.44284 114.53171 358.71546 115.76767" fill="#e6e6e6" /><polygon points="339.49813 112.53821 335.51114 119.4047 339.49813 121.69353 337.50463 163.49619 345.47862 174.33659 353.4526 158.31478 347.47211 121.69353 349.46561 112.53821 339.49813 112.53821" fill="#2f2e41" /><circle cx="345.47862" cy="89.61301" r="18.93821" fill="#ffb6b6" /><path d="M333.37575,91.27425l4.09196,1.78584,1.78584-10.71504s7.14336-3.57168,12.50088-1.78584,14.28672,0,14.28672,0c0,0,0-17.8584-12.50088-17.8584s-25.00176,1.78584-25.00176,7.14336-5.35752,10.71504-5.35752,10.71504c0,0-7.14336,10.71504,0,17.8584,7.14336,7.14336,10.71504,7.14336,10.71504,7.14336l-.52028-14.28672Z" fill="#2f2e41" /><path id="uuid-97233535-ec91-4408-928f-bf1e5273ca3e-202" d="M296.62879,277.23211c-.20767,7.7014,3.59771,14.05116,8.49895,14.18252s9.04142-6.00486,9.24813-13.70902c.12478-3.07637-.48897-6.13789-1.78994-8.92841l.46781-32.64224-15.32272,.10697,1.16561,32.1681c-1.44966,2.71738-2.22731,5.74249-2.26784,8.82207Z" fill="#ffb6b6" /><path d="M315.58593,124.46179s-12.95772-3.98699-18.93821,7.97398c-5.98049,11.96098,1.9935,133.56423,1.9935,133.56423h20.11547l-5.33868-85.72033,2.16793-55.81789Z" fill="#e6e6e6" /></g><g><path d="M812.65719,351.00821l-48.32166-14.79238c-1.06882-.32716-2.19038-.4466-3.30415-.3518l-244.90187,20.84269c-3.49184,.29715-4.36942,5.00693-1.21895,6.54176l7.84468,3.82176h-.20917v182.95168h7.39199v-179.45234l24.58572,11.97763c1.88116,.91644,3.98046,1.29052,6.06233,1.08022l2.61589-.26422v166.65871h7.39199v-167.4054l189.41967-19.13326v186.53866h7.39199v-187.28535l31.41595-3.17331v190.45866h7.39199v-191.20535l5.7314-.57891c4.0236-.40645,4.57916-6.04575,.71223-7.22945Z" fill="#3f3d56" /><path d="M587.22595,355.98226c4.61999,0,72.99587-8.31599,72.99587-8.31599l10.16398,13.85998-71.14788,13.85998-12.01198-19.40397Z" fill="#fff" /><g><polygon points="662.26939 542.91667 650.39 542.89512 644.81757 497.06436 662.35045 497.09569 662.26939 542.91667" fill="#a0616a" /><path d="M621.56955,542.57731h0c-.37095,.62232-.56957,2.63259-.57082,3.35703h0c-.00382,2.22674,1.79818,4.03501,4.02499,4.03884l36.78911,.06316c1.51907,.00261,2.7527-1.22673,2.75531-2.74587l.00263-1.53165s1.82782-4.60028-1.90933-10.28065c0,0-4.66452,4.43479-11.61116-2.53575l-2.04565-3.72093-14.87251,10.83785-8.23501,.9993c-1.80165,.21861-3.39821-.04024-4.32743,1.51866h-.00014Z" fill="#2f2e41" /></g><g><polygon points="726.02735 521.60456 716.65452 528.67376 684.92538 495.88695 698.75852 485.45309 726.02735 521.60456" fill="#a0616a" /><path d="M693.75683,545.61506h0c.07894,.71161,1.12159,2.41402,1.55275,2.98556h0c1.32526,1.75677,3.82374,2.10662,5.58057,.78132l29.02444-21.89533c1.19846-.90409,1.43715-2.60858,.53302-3.80709l-.91157-1.20838s-1.30394-4.71495-7.63691-6.96136c0,0-1.02986,6.27668-10.66123,4.92822l-3.83137-1.71153-5.2534,17.41094-5.89241,5.69963c-1.28915,1.24695-2.70151,1.99536-2.50376,3.77794l-.00011,.00009Z" fill="#2f2e41" /></g><path d="M701.20012,284.7398c0,10.95483-8.88064,19.83547-19.83547,19.83547-10.95483,0-19.83547-8.88064-19.83547-19.83547s8.88064-19.83547,19.83547-19.83547,19.83547,8.88064,19.83547,19.83547Z" fill="#a0616a" /><path d="M699.33129,399.1067s-73.0319-4.13388-77.16578,4.13388,22.34833,121.83338,22.34833,121.83338l23.62655-4.95175-11.52587-79.6767s60.94342,16.14005,69.21118-3.1514c8.26776-19.29144,5.88766-26.47475,5.88766-26.47475l-32.38207-11.71266Z" fill="#2f2e41" /><path d="M718.04278,385.22869s-71.52378,15.33281-73.3233,24.3996,53.78128,111.58133,53.78128,111.58133l21.47498-11.02537-32.19248-73.78934s63.04198-.55653,65.91197-21.34785c2.86999-20.79132-1.32556-27.08911-1.32556-27.08911l-34.3269-2.72925Z" fill="#2f2e41" /><path d="M726.20152,307.47234h-34.36221l-23.51213,38.58289s-5.51184,24.93349,0,27.62431c5.51184,2.69082,5.51184,31.62799,5.51184,31.62799l57.87433,5.51184s8.26776-86.8115,5.51184-95.07926c-2.75592-8.26776-11.02368-8.26776-11.02368-8.26776Z" fill="#000000" /><path d="M671.77208,332.96463l-3.44492,40.71481-38.74748-16.44473-9.24771-4.6509c-1.81128-2.36188-4.16183-4.25556-6.85504-5.52279-6.69735-3.264-13.80747-2.4555-15.8841,1.80514-2.07668,4.26063,1.66736,10.35956,8.36279,13.62153,2.6583,1.34088,5.59915,2.02531,8.57642,1.99632l27.05797,15.36813,.03186-.06012,.11996,.21419,42.43185,17.72245,9.76312-53.44911-22.16474-11.31492Z" fill="#a0616a" /><path d="M667.63821,287.49192s-20.6694,2.75592-12.40164-15.15756c0,0-1.2606-9.71082,4.88154-10.36725s14.4099-11.68011,14.4099-11.68011c0,0,18.95509-9.64572,28.76899,0,9.8139,9.64572,38.75106,66.14209,38.75106,66.14209l-19.29144,20.6694s-11.59783-30.48873-25.09036-26.95703c-13.49253,3.5317-25.89417,14.06171-25.89417,14.06171,0,0-13.6928-6.8525-7.53538-12.82513,6.15742-5.97263,3.4015-23.88612,3.4015-23.88612Z" fill="#2f2e41" /><path d="M695.19741,317.80704s-9.64572-12.40164-16.53552-2.75592c-6.8898,9.64572-12.40164,22.04736-12.40164,22.04736l27.55921,9.64572,1.37796-28.93717Z" fill="#000000" /><path d="M799.83575,547.27902l-32.01899-101.77021,.00468-.00034h.07394l-.12937-.16637-.00282-.00361-2.28061-7.24885,.00113-.0009c3.47424-2.99375,5.83968-7.27186,6.31092-12.19685l-14.63616-80.49862c1.00718-10.5706-7.0963-19.81058-17.71303-20.18945l-33.02369-.08313c-9.3878-.33263-17.51903,6.44949-18.88653,15.74497l-.72994,4.93412-10.11779,68.82863c-.36962,2.47625-.22175,4.91573,.36037,7.19798l-7.28111,.95175-2.20837,.29563-8.7318,1.1365-.02769,.00925-1.09031,.13862h-1.18275v29.56795h.07394v94.50658c0,.60976,.49894,1.10875,1.10881,1.10875,.61906,0,1.118-.499,1.118-1.10875v-94.50658h12.95448l12.92673,94.39559c.08318,.55449,.55438,.96099,1.10881,.96099,.04619,0,.10163,0,.14781-.00925,.60987-.08313,1.03487-.64675,.95175-1.25662l-12.88054-94.09072h62.15733c6.17174,0,11.89073-1.95853,16.54743-5.31209l24.64454,99.53455c.12825,.50373,.58088,.83839,1.07785,.83839,.09074,0,.18312-.01083,.27527-.03418,.59555-.15159,.95558-.75752,.80421-1.35306l-24.88288-100.49712c.33093-.27589,.66192-.57005,.97453-.87347l9.89305-.58179,32.1857,102.30011c.14939,.47497,.58821,.77929,1.06127,.77929,.11059,0,.22305-.01681,.3342-.05166,.58635-.18475,.9121-.80974,.72763-1.39604Zm-36.46799-107.61017c.08313-.04625,.15706-.10174,.231-.14798l.00056-.00045,.23777,.75571-.46933-.60728Z" fill="#e6e6e6" /></g><g><g><polygon points="171.56525 374.77477 193.11428 361.07087 201.87509 366.35537 171.56525 401.18319 171.56525 374.77477" fill="#ffb6b6" /><path d="M142.09734,321.73254s-14.31298,3.36776-7.57746,22.73238,28.62597,59.77775,35.36149,57.25193c6.73552-2.52582,7.57746-27.78403,7.57746-27.78403,0,0-.84194,.84194-4.2097-2.52582-3.36776-3.36776-3.36776-1.82973-3.36776-5.54554s-2.75454-6.47034-2.75454-6.47034l-3.13904-6.50681s0-30.30985-12.6291-31.99373c-12.6291-1.68388-9.26134,.84194-9.26134,.84194Z" fill="#e6e6e6" /><ellipse cx="202.71703" cy="359.19888" rx="14.31298" ry="8.84037" transform="translate(-194.61752 248.54951) rotate(-45)" fill="#ffb6b6" /></g><g><polygon points="86.34807 433.29001 101.05215 457.62779 186.74142 452.55742 163.92475 423.14927 86.34807 433.29001" fill="#e6e6e6" /><path d="M111.95221,547.11985c-.49911,0-.93386-.36839-1.00343-.87642l-25.60538-187.00708c-.07601-.55507,.31219-1.06656,.86701-1.14232,.55457-.08021,1.06607,.31195,1.14232,.86701l25.60538,187.00708c.07601,.55507-.31219,1.06656-.86701,1.14232-.04679,.00644-.09309,.00941-.13889,.00941Z" fill="#e6e6e6" /><path d="M86.34807,547.35752c-.56002,0-1.01407-.45406-1.01407-1.01407v-187.20861c0-.56002,.45406-1.01407,1.01407-1.01407,.56002,0,1.01407,.45406,1.01407,1.01407v187.20861c0,.56002-.45406,1.01407-1.01407,1.01407Z" fill="#e6e6e6" /><path d="M214.88174,546.61331c-.43103,0-.83087-.27729-.96703-.71005l-60.59094-192.58449c-.1681-.53427,.12874-1.1037,.66301-1.27205,.53402-.16736,1.1037,.12924,1.27155,.66301l60.59094,192.58449c.1681,.53427-.12874,1.1037-.66301,1.27205-.10126,.03169-.20376,.04704-.30452,.04704Z" fill="#e6e6e6" /><path d="M196.37439,546.85049c-.45282,0-.86528-.30501-.98214-.76402l-42.08408-169.96935c-.1379-.54269,.19014-1.09478,.73283-1.23293,.54442-.13716,1.09478,.19014,1.23293,.73283l42.08408,169.96935c.1379,.54269-.19014,1.09478-.73283,1.23293-.08393,.02129-.1681,.03119-.2508,.03119Z" fill="#e6e6e6" /><polygon points="86.34807 362.11717 156.57271 361.03722 169.50216 434.81112 87.36214 434.81112 86.34807 362.11717" fill="#e6e6e6" /></g><g><polygon points="194.26591 470.59655 176.56797 501.75497 197.11665 506.27891 205.68358 484.11776 194.26591 470.59655" fill="#ffb6b6" /><path d="M182.92462,495.87253s-.68769-5.08127-4.73068-3.46879-15.71126,7.60503-15.71126,7.60503c0,0,30.43363,49.4508,36.20933,47.14726,5.7757-2.30353-1.13827-16.28208-1.13827-16.28208l1.52597-24.70853-16.1551-10.29289Z" fill="#2f2e41" /><path d="M115.9972,410.13626s-6.31455,29.04694,13.05007,39.15022c19.36462,10.10328,85.45693-14.73395,85.45693-14.73395l-30.30985,45.41505,21.0485,8.46912s47.99059-63.14551,44.62283-73.24879c-3.36776-10.10328-26.10015-10.94522-26.10015-10.94522l-51.35835,2.52582-13.47104-4.2097-42.93895,7.57746Z" fill="#2f2e41" /></g><g><polygon points="168.08352 484.4253 140.26086 507.00768 157.75463 518.69879 173.79831 501.17426 168.08352 484.4253" fill="#ffb6b6" /><path d="M148.32224,503.84158s1.20844-4.98316-3.14413-4.9524-17.40151,1.36661-17.40151,1.36661c0,0,10.35295,57.13496,16.57091,57.09102,6.21796-.04394,4.86453-15.58006,4.86453-15.58006l10.41237-22.45936-11.30217-15.46582Z" fill="#2f2e41" /><path d="M117.181,399.62925s-16.45134,24.75786-2.09067,41.21496c14.36067,16.4571,84.95984,17.37244,84.95984,17.37244l-44.7577,31.27238,16.52375,15.54771s67.67815-41.35361,68.21767-51.98973c.53953-10.63612-20.32807-19.69226-20.32807-19.69226l-48.75657-16.33576-11.01569-8.82298-42.75257-8.56676Z" fill="#2f2e41" /></g><path d="M159.4433,342.28438s-15.99686-5.89358-23.57432-5.89358c-.72406,0-1.43974,.08417-2.15536,.23572-4.84958,1.02719-9.31186,5.19481-11.45037,7.46801-.83356,.89245-1.31342,1.49025-1.31342,1.49025,0,0,.05051-.58094,.15154-1.59971,.49672-5.35473,2.33214-22.92601,5.62415-34.17432,1.17869-4.01607,2.53425-7.22386,4.09182-8.78143,3.62876-3.63719,5.30421-7.99843,6.07878-11.24831,.65674-2.78687,.65674-4.74855,.65674-4.74855l-6.13773-2.6437-1.13665-7.42592c-.20206,.8756-1.1366,2.58476-4.27702,5.85992-.26943,.2778-.56414,.51357-.87565,.71563-4.52964,2.84576-13.7657-2.10485-18.7416-5.22004,2.07119-7.19858,5.82626-13.78256,12.64596-14.86021,15.99686-2.52582,15.99686-11.78716,26.10015-1.68388,.83351,.83351,1.67545,1.63337,2.51739,2.40794,3.23307,6.17986,4.41176,14.46453,4.83273,20.22342,.30314,4.03287,.22734,6.83655,.22734,6.83655,0,0,4.2097,25.25821,10.94522,30.30985,6.73552,5.05164-4.2097,22.73238-4.2097,22.73238Z" fill="#2f2e41" /><polygon points="128.29151 301.87125 116.91538 318.55786 142.6045 325.44557 142.6045 301.87125 128.29151 301.87125" fill="#ffb6b6" /><polygon points="128.29151 301.87125 116.91538 318.55786 142.6045 325.44557 142.6045 301.87125 128.29151 301.87125" opacity=".1" /><path d="M144.20219,317.94381l-24.41626-10.10328s-32.83567,14.31298-30.30985,42.09701c2.52582,27.78403,26.10015,75.77462,26.10015,75.77462l47.14865-20.20656-5.05164-53.88417-13.47104-33.67761Z" fill="#e6e6e6" /><circle cx="133.73351" cy="287.78009" r="21.54104" fill="#ffb6b6" /><path d="M162.81106,279.9808c-4.2097,4.2097-7.57746,8.4194-7.57746,8.4194l-1.68388-6.73552s-.38731,.28623-1.06928,.74091c-2.66894,1.81857-9.83386,6.3903-15.58432,7.3754-2.55948,.43777-4.83273,.15992-6.31455-1.38079-3.14042-3.27516-4.07496-4.98432-4.27702-5.85992l-1.13665,7.42592-6.13773,2.6437s0,9.24449,6.73552,15.99686c.32837,.32837,.64831,.73248,.95982,1.20397,3.21622,4.84958,5.52313,16.72092,6.98809,26.81577,1.29657,8.97511,1.9196,16.53572,1.9196,16.53572,0,0-6.37344-7.98158-13.36996-9.06771-.38731-.05894-.77462-.10103-1.16188-.10946-.12631-.0168-.261-.0168-.38731-.0168-7.57746,0-23.57432,5.89358-23.57432,5.89358,0,0-10.94522-17.68074-4.2097-22.73238,6.73552-5.05164,10.94522-30.30985,10.94522-30.30985,0,0-.27785-10.81053,2.50897-20.50127,2.07119-7.19858,5.82626-13.78256,12.64596-14.86021,15.99686-2.52582,15.99686-11.78716,26.10015-1.68388,.83351,.83351,1.67545,1.63337,2.51739,2.40794,9.41288,8.65517,19.02788,13.9341,15.16335,17.79863Z" fill="#2f2e41" /><rect x="60.3339" y="393" width="8" height="158" fill="#3f3d56" /><rect x="254.3339" y="393" width="8" height="158" fill="#3f3d56" /><rect x="158.3339" y="326" width="53" height="53" fill="#000000" /><g><polygon points="127.78436 382.35224 149.33339 368.64833 158.09421 373.93283 127.78436 408.76065 127.78436 382.35224" fill="#ffb6b6" /><path d="M98.31645,329.31001s-14.31298,3.36776-7.57746,22.73238c6.73552,19.36462,28.62597,59.77775,35.36149,57.25193,6.73552-2.52582,7.57746-27.78403,7.57746-27.78403,0,0-.84194,.84194-4.2097-2.52582-3.36776-3.36776-3.36776-1.82973-3.36776-5.54554s-2.75454-6.47034-2.75454-6.47034l-3.13904-6.50681s0-30.30985-12.6291-31.99373c-12.6291-1.68388-9.26134,.84194-9.26134,.84194Z" fill="#e6e6e6" /><ellipse cx="158.93615" cy="366.77634" rx="14.31298" ry="8.84037" transform="translate(-212.79872 219.81113) rotate(-45)" fill="#ffb6b6" /></g><rect x="36.3339" y="387" width="242" height="18" fill="#3f3d56" /></g><rect x="483.3339" y="243" width="46" height="25" rx="5.12992" ry="5.12992" fill="#3f3d56" /><rect x="558.3339" y="257.74015" width="46" height="10.25985" rx="5.12992" ry="5.12992" fill="#000000" /></svg>
                    </div>

                </main>

            </section>
        </>
    );
}
