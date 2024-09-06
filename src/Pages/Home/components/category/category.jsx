import React, { useState, useEffect, useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { Navigation } from 'swiper/modules';

// Style Component
import Style from './category.module.css';

// Assets
import skinPNG from '../../assets/category/image/skin.png';
import hairPNG from '../../assets/category/image/hair.png';
import bodyPNG from '../../assets/category/image/body.png';
import { Link } from 'react-router-dom';

function Category() {
    const Category_ = [
        { img: skinPNG, name: 'Skin Care' },
        { img: bodyPNG, name: 'Body Care' },
        { img: hairPNG, name: 'Hair Care' },
        { img: skinPNG, name: 'Clone Care' }
    ];

    const [Category, setCategory] = useState(Category_);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Create refs for the navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={Style.container}>
            <div className={Style.header}>
                <h2>Shop by Category</h2>

                <div className={Style.buttons}>
                    {/* Attach refs to buttons */}
                    <p ref={prevRef} className={Style.buttonLeft}>&#x2190;</p>
                    <p ref={nextRef} className={Style.buttonRight}>&#x2192;</p>
                </div>
            </div>

            {isMobile ? (
                <div className={Style.grid}>
                    {Category.map((item, index) => (
                        <div key={index} className={Style.item}>
                            <img src={item.img} alt={`${item.name} Category Image`} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    className={Style.category}
                    slidesPerView={3}
                    spaceBetween={30}
                    // Use refs for navigation buttons
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Navigation]}
                    onInit={(swiper) => {
                        // Ensure Swiper navigation gets initialized with the refs
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {Category.map((item, index) => (
                        <SwiperSlide key={index} className={Style.item}>
                            <Link to={'./shop'}>
                            < img src={item.img} alt={`${item.name} Category Image`} />
                            <p>{item.name}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
}

export default Category;
