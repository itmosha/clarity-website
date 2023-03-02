import React, { useRef } from 'react'
import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'


const IndexObject: React.FC<{}> = () => {
    const constraintsRef = useRef(null)

    return (
        <Box 
            position='relative'
            width='300px'
            height='300px'
            rounded='full'
        >
            <motion.div ref={constraintsRef} />
            <motion.div
                drag 
                dragConstraints={constraintsRef}
            >
                <motion.svg 
                    className='draggable'
                    width={'300px'}
                    height={'300px'}
                    viewBox={'0 0 100 100'}
                >
                    <path xmlns="http://www.w3.org/2000/svg" fill="#d596ff" stroke="#d596ff" stroke-width="0.5" opacity="NaN" d="m50.31549,10.6296l-23.95394,51.2519l23.66404,-30.07623l0.28991,-21.17567l-0.00001,0z" id="svg_9"/>
                    <path xmlns="http://www.w3.org/2000/svg" id="svg_3" d="m42.27642,53.98374" opacity="NaN" stroke-width="0.5" stroke="#56ffff" fill="#56ffff"/>
                    <path xmlns="http://www.w3.org/2000/svg" id="svg_4" d="m26.42276,60.89431" opacity="NaN" stroke-width="0.5" stroke="#56ffff" fill="#56ffff"/>
                    <path xmlns="http://www.w3.org/2000/svg" id="svg_5" d="m26.62602,61.70732c0.20325,0 23.57724,-29.26829 23.37399,-29.39024c0.20325,0.12195 0.20325,9.06504 0,8.94309c0.20325,0.12195 -6.50407,13.13008 -6.70732,13.00813" opacity="NaN" stroke-width="0.5" stroke="#c772ff" fill="#c772ff"/>
                    <path xmlns="http://www.w3.org/2000/svg" stroke="#bf00ff" id="svg_6" d="m77.84553,49.71545c0,0 -4.38476,19.71545 -4.604,19.5935c0.21924,0.12195 -12.93505,-6.99187 -13.15429,-7.11382c0.21924,0.12195 -1.75391,-9.4309 -1.75391,-9.4309" opacity="NaN" stroke-width="0.5" fill="#bf00ff"/>
                    <path xmlns="http://www.w3.org/2000/svg" transform="rotate(0.0958629 63.822 31.9309)" stroke="#cb54ff" id="svg_7" d="m50.42959,10.69123c-0.42178,0.20325 27.62659,39.43058 27.41571,39.30863c0.21089,0.12195 -18.13654,3.1707 -18.13654,3.1707c0,0 -9.70094,-12.60153 -9.91183,-12.72347" opacity="NaN" stroke-width="0.5" fill="#cb54ff"/>
                    <path xmlns="http://www.w3.org/2000/svg" id="svg_8" d="m26.42276,61.70732l22.96748,21.42277l-4.47154,-21.13821" opacity="NaN" stroke-width="0.5" stroke="#ac3fff" fill="#ac3fff"/>
                    <path xmlns="http://www.w3.org/2000/svg" stroke="#9a00ce" id="svg_10" d="m45.12195,61.91057c0,0 4.6748,21.54471 4.6748,21.54471c0,0 23.57724,-14.36314 23.57724,-14.15796" opacity="NaN" stroke-width="0.5" fill="#9a00ce"/>
                    <path xmlns="http://www.w3.org/2000/svg" stroke="#b84fff" id="svg_11" d="m42.88618,54.39024c0,0 1.82927,7.92683 1.62602,7.92683c-0.20325,0 -17.88618,-0.64272 -18.08943,-0.77126" opacity="NaN" stroke-width="0.5" fill="#b84fff"/>
                    <path xmlns="http://www.w3.org/2000/svg" id="svg_13" d="m60.77236,62.11382l-4.87805,2.52033c0.20325,0.12195 16.66666,4.39024 16.66666,4.39024" opacity="NaN" stroke-width="0.5" stroke="#a800e0" fill="#a800e0"/>
                    <path xmlns="http://www.w3.org/2000/svg" id="svg_14" d="m50,40.97561c-0.4065,0.81301 -6.70732,13.41463 -6.70732,13.41463c0,0 1.01626,7.72358 1.42276,7.72358c0.4065,0 5.4878,-9.14634 5.28455,-9.26829" opacity="NaN" stroke-width="0.5" stroke="#d18cff" fill="#d18cff"/>
                    <path xmlns="http://www.w3.org/2000/svg" id="svg_15" d="m-146.20325,-118.05528c0,0 0.20325,11.78862 0.20325,11.78862c0,0 9.55285,0.60976 9.55285,0.60976c0,0 -9.7561,-12.39837 -9.7561,-12.39837z" opacity="NaN" stroke-width="0.5" stroke="#aaffff" fill="#aaffff"/>
                    <path xmlns="http://www.w3.org/2000/svg" id="svg_16" d="m50,40.77236c0,-0.20325 9.55285,12.39837 9.55285,12.39837c0,0 -9.7561,-0.20325 -9.7561,-0.20325" opacity="NaN" stroke-width="0.5" stroke="#c877ff" fill="#c877ff"/>
                    <path xmlns="http://www.w3.org/2000/svg" stroke="#bd30ff" id="svg_19" d="m44.9187,62.52032c0,-0.20325 5.4065,-9.14634 5.21342,-9.26829c0.19309,0.12195 6.37195,11.70731 6.37195,11.70731" opacity="NaN" stroke-width="0.5" fill="#bd30ff"/>
                    <path xmlns="http://www.w3.org/2000/svg" stroke="#c642ff" id="svg_20" d="m50,53.21138c0,0 9.75071,0 9.75071,0c0,0 0.41492,9.06815 0.20746,8.89944c0.20746,0.16871 -3.31939,2.48847 -3.52685,2.31976" opacity="NaN" stroke-width="0.5" fill="#c642ff"/>
                </motion.svg>
            </motion.div>
        </Box>
    )
}

export default IndexObject