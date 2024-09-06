import React from 'react'
import Style from './asideMenu.module.css'
import { Link } from 'react-router-dom'

function AsideMenu({onClose}) {
  return (
    <section className={Style.container}>

      <Link to={'/'} onClick={onClose} className={Style.brandName}>
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="52" viewBox="0 0 91 22" fill="none">
          <path d="M1.24722 10.4593V9.58114H4.40879C5.2016 9.58114 5.92673 9.46221 6.58418 9.22437C7.24163 8.98653 7.76373 8.62976 8.15046 8.15407C8.5372 7.66009 8.73057 7.03804 8.73057 6.28792C8.73057 5.22677 8.33416 4.40346 7.54135 3.818C6.76788 3.21425 5.72369 2.91237 4.40879 2.91237H1.59529V19.4334H4.69884C5.72369 19.4334 6.62286 19.2687 7.39633 18.9394C8.1698 18.61 8.76924 18.1344 9.19465 17.5123C9.62006 16.872 9.83276 16.0761 9.83276 15.1247C9.83276 14.4478 9.69741 13.8532 9.42669 13.3409C9.15598 12.8103 8.77891 12.3712 8.29549 12.0236C7.81207 11.6577 7.26097 11.3833 6.64219 11.2003C6.04275 11.0173 5.39497 10.9259 4.69884 10.9259H1.24722V10.0477H4.81486C5.64635 10.0477 6.45849 10.1574 7.2513 10.377C8.04411 10.5782 8.7499 10.8893 9.36868 11.3101C10.0068 11.7309 10.5096 12.2706 10.877 12.9292C11.2637 13.5696 11.4571 14.3289 11.4571 15.2071C11.4571 16.4695 11.167 17.5123 10.5869 18.3356C10.0068 19.1589 9.20432 19.7718 8.17947 20.1743C7.17395 20.5768 6.01375 20.7781 4.69884 20.7781H0V1.56763H4.40879C5.62701 1.56763 6.6712 1.74144 7.54135 2.08906C8.43085 2.43668 9.1173 2.95811 9.60072 3.65334C10.0841 4.33028 10.3259 5.18103 10.3259 6.20559C10.3259 7.13867 10.0745 7.92538 9.57172 8.56573C9.0883 9.18778 8.41151 9.66347 7.54135 9.99279C6.6712 10.3038 5.66568 10.4593 4.52481 10.4593H1.24722Z" fill="#5F7A69" />
          <path d="M15.7267 20.7781V19.351H25.7915V20.7781H15.7267ZM15.7267 2.9947V1.56763H25.7915V2.9947H15.7267ZM15.7267 14.3289V12.9018H31.7184V14.3289H15.7267ZM14.8856 1.56763H16.4808V20.7781H14.8856V1.56763Z" fill="#5F7A69" />
          <path d="M31.4237 14.3289L31.9458 12.9018H59.5513L60.0734 14.3289H31.4237ZM36.5867 4.31199L32.642 13.3958L32.4679 13.7251L29.4224 20.7781H27.6241L36.5867 0.82666L45.5493 20.7781H43.7509L40.7344 13.8349L40.5894 13.4781L36.5867 4.31199Z" fill="#5F7A69" />
          <path d="M47.5141 1.56763H49.1094V14.5759C49.1094 16.1127 49.5348 17.3385 50.3857 18.2533C51.2365 19.1681 52.445 19.6255 54.0113 19.6255C55.5776 19.6255 56.7861 19.1681 57.637 18.2533C58.4878 17.3385 58.9132 16.1127 58.9132 14.5759V1.56763H60.5085V14.5759C60.5085 15.5272 60.3635 16.4054 60.0734 17.2104C59.7833 17.9971 59.3579 18.6741 58.7972 19.2412C58.2364 19.8084 57.5499 20.2567 56.7378 20.586C55.945 20.897 55.0362 21.0525 54.0113 21.0525C52.9865 21.0525 52.068 20.897 51.2558 20.586C50.463 20.2567 49.7862 19.8084 49.2255 19.2412C48.6647 18.6741 48.2393 17.9971 47.9492 17.2104C47.6592 16.4054 47.5141 15.5272 47.5141 14.5759V1.56763Z" fill="#5F7A69" />
          <path d="M62.6388 2.9947V1.56763H74.908V2.9947H69.571V20.7781H67.9757V2.9947H62.6388Z" fill="#5F7A69" />
          <path d="M89.1915 1.56763H90.9898L84.1736 12.8744V20.7781H82.5783V12.9018L75.8781 1.56763H77.6764L83.3614 11.5022L89.1915 1.56763Z" fill="#5F7A69" />
        </svg>
      </Link>

      <ul>
          <Link to={'/'} onClick={onClose}>Home</Link>
          <Link to={'/shop'} onClick={onClose}>Shop</Link>
      </ul>


    </section>
  )
}

export default AsideMenu