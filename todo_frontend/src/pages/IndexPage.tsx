import React from 'react'
import BasicLayout from '../components/BasicLayout'
import AllInOneBox from '../components/index-page/AllInOneBox'
import CardsBox from '../components/index-page/CardsBox'
import BrandNewParadigm from '../components/index-page/BrandNewParadigm'
import ClarityBringsOrder from '../components/index-page/ClarityBringsOrder'
import TopBox from '../components/index-page/TopBox'
import AllInOne from '../components/index-page/AllInOne'


const IndexPage: React.FC<{}> = () => {
    return (
        <BasicLayout>
            <TopBox />
            <AllInOne />
            <AllInOneBox />
            <BrandNewParadigm />
            <CardsBox />
            <ClarityBringsOrder />
        </BasicLayout>
    )
}

export default IndexPage
