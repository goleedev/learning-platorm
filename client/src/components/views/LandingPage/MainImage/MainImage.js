import React from 'react'
import { Typography } from 'antd';
import "./MainImage.css"

const { Title } = Typography;

function MainImage() {
    return (
        <div>
            <img className="main__img main__background" src={require('../../../../assets/images/bg.svg')} />
            <img className="main__img main__person" src={require('../../../../assets/images/person.svg')} />
            <Title className="main__title" level={1} > Check out my prev videos! </Title>
        </div>
    )
}

export default MainImage
