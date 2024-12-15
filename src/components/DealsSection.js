import React from 'react';
import DealCard from './DealCard';

function DealsSection() {
    const deals = [
        {
            image: 'https://cbu01.alicdn.com/img/ibank/O1CN01e2LNUM1dETiPLCe99_!!2906933704-0-cib.jpg',
            description: '创意太空人盲盒手办摆件送男孩礼物星系守护飞行小夜灯星星灯礼品',
        },
        {
            image: 'https://cbu01.alicdn.com/img/ibank/O1CN01tOhJb41dETz2rwYyv_!!2906933704-0-cib.jpg',
            description: '可爱萌宠汗流浃背小摆件趣味打工人办公桌面装饰品厂家直销批发',
        },
        {
            image: 'https://cbu01.alicdn.com/img/ibank/O1CN01uP95mk1dETtCYv3So_!!2906933704-0-cib.jpg',
            description: '软fufu萌宠不倒翁卡通公仔迷你小摆件汽车中控台蛋糕烘焙装饰礼品',
        },
        {
            image: 'https://cbu01.alicdn.com/https://cbu01.alicdn.com/img/ibank/O1CN01tARohg2Ex2AHFnXIV_!!2215560588810-0-cib.jpg_460x460q100.jpg',
            description: '妍舍趣味游戏机系列减压便利贴小清新少女心豆豆本随身便携',
        },
        {
            image: 'https://cbu01.alicdn.com/img/ibank/O1CN016Y2eyw2Ex2AH8wQ0l_!!2215560588810-0-cib.search.jpg',
            description: '妍舍减压便利贴饮料系列豆豆本随身便携挂件可爱造型小本子记事本',
        },
        {
            image: 'https://cbu01.alicdn.com/img/ibank/O1CN01UupfdK2Ex2HsUagJc_!!2215560588810-0-cib.search.jpg',
            description: '麦和正版蛋仔派对文具礼盒套装儿童奖励生日礼物学习大礼包套装',
        },
    ];

    return (
        <section className="deals-section">
            <h2>Flash Deals</h2>
            <div className="deals-grid">
                {deals.map((deal, index) => (
                    <DealCard key={index} image={deal.image} description={deal.description} />
                ))}
            </div>
        </section>
    );
}

export default DealsSection;
