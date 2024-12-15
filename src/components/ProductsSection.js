import React from 'react';

function ProductsSection() {
    const products = [
        {
            image: 'https://cbu01.alicdn.com/https://cbu01.alicdn.com/img/ibank/O1CN013yqz8u1hZKPkhDQqI_!!2689764291-0-cib.jpg_460x460q100.jpg',
            description: '早沫便利贴 星光珊瑚系列 眼影盘便签N次贴学生索引贴彩色留言本',
        },
        {
            image: 'https://cbu01.alicdn.com/https://cbu01.alicdn.com/img/ibank/O1CN019qO04I1Lhdzg62tPB_!!3683421331-0-cib.jpg_460x460q100.jpg',
            description: '批发代理酸奶麦片水果坚果燕麦脆100克袋装源头工厂网红社区供货',
        },
        {
            image: 'https://cbu01.alicdn.com/https://cbu01.alicdn.com/img/ibank/O1CN01MhbwX41gaPpq7yvZc_!!2218583344158-0-cib.jpg_460x460q100.jpg',
            description: '齐天大圣孙悟空摆件饰品斗战胜佛车载手办黑悟空游戏神话手办玩具',
        },
        {
            image: 'https://cbu01.alicdn.com/https://cbu01.alicdn.com/img/ibank/O1CN01WvtGul1jUPSliqyOB_!!2214281204551-0-cib.jpg_460x460q100.jpg',
            description: '仿真金条实心沙金摆件假金砖金块银行镀金样品中国合金道具批发',
        },
        {
            image: 'https://cbu01.alicdn.com/https://cbu01.alicdn.com/img/ibank/O1CN01edwm112JJFznZmpWE_!!2200737399400-0-cib.jpg_460x460q100.jpg',
            description: '冬季网红新款毛绒女士帽韩版小熊耳朵保暖帽宽松时尚显脸小套头帽',
        },
        {
            image: 'https://cbu01.alicdn.com/https://cbu01.alicdn.com/img/ibank/O1CN01QrC7IV2D4hNXr1yBu_!!2200805168556.jpg_460x460q100.jpg',
            description: '汽车美容贴膜雾化喷壶器耐酸碱防腐蚀喷水洗车专用工具浇花水壶头',
        },
    ];

    return (
        <section className="products">
            <h2>Popular Products</h2>
            <div className="products-grid">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <img src={product.image} alt={`Product ${index + 1}`} />
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductsSection;
