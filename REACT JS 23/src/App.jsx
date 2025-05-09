import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
  <header
    className="bg-primaryColor dark:bg-darkColor fixed top-0 left-0 w-full z-50"
    id="header"
  >
    <nav className="container relative h-14 flex justify-between items-center">
      <div>
        <a href="#" className="text-2xl uppercase font-oswald">
          Bur <span className="text-secondaryColor">ger</span>
        </a>
      </div>
      <div
        className="hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor  border-b
    border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
        id="nav-menu"
      >
        <ul className="flex flex-col text-center gap-5 md:flex-row">
          <li>
            <a
              href="#home"
              className="nav__link text-secondaryColor hover:text-secondaryColor  ease-in duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className=" nav__link hover:text-secondaryColor ease-in duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className=" nav__link hover:text-secondaryColor ease-in duration-200"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#review"
              className=" nav__link hover:text-secondaryColor ease-in duration-200"
            >
              Review
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" nav__link hover:text-secondaryColor ease-in duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden"
          id="nav-close"
        >
          <i className="ri-close-line" />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <i
          className="ri-moon-line cursor-pointer ml-4 text-xl"
          id="theme-toggle"
        />
        <div className="md:hidden" id="hamburger">
          <i className="ri-menu-2-line cursor-pointer text-xl" />
        </div>
      </div>
    </nav>
  </header>
  <main>
    {/*-------------------Home--------------------*/}
    <section id="home">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-pulse">
          <img
            src="./img/home-image.png"
            alt="home image"
            className=" home__image w-60 md:w-full"
          />
        </div>
        <div className="home__content text-center md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 className="home__title">HAPPY TUMMY WITH WASTE BURGERS.</h1>
          <div className="separator mx-auto md:mx-0" />
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            facere, doloremque officia placeat reprehenderit veniam non aut eos
            maxime, magni iusto modi dolore similique quos incidunt debitis
            magnam totam natus!
          </p>
          <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
            <div className="text-center">
              <i className="fa-solid fa-utensils text-[green] text-4xl" />
              <br />
              Delicious
            </div>
            <div className="text-center">
              <i className="fa-solid fa-droplet text-[green] text-4xl" />
              <br />
              Fresh
            </div>
            <div className="text-center">
              <i className="fa-brands fa-envira text-[green] text-4xl" />
              <br />
              Organic
            </div>
          </div>
          <a href="#" className="btn btn-primary">
            Learn more
          </a>
        </div>
      </div>
    </section>
    {/*-------------------Categery--------------------*/}
    <section id="category">
      <div className="container flex flex-col gap-5 md:flex-row">
        {/*--Cart-1 ---------*/}
        <div className="category__card bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <img
              src="./img/burger-1.png"
              alt="category image"
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">Food</h4>
              <p className="text-xs">Specicy burger panner</p>
            </div>
            <a href="#" className="text-blackColor cursor-pointer">
              Buy online
            </a>
          </div>
        </div>
        {/*-----Cart-2----------------------*/}
        <div
          className="category__card bg-secondaryColor flex py-3 rounded-lg overflow-hidden
   md:flex-1"
        >
          <div className="basis-1/3 relative">
            <img
              src="./img/snack-1.png"
              alt="category image"
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">SNACK</h4>
              <p className="text-xs">Fried snack foods.</p>
            </div>
            <a href="#" className="text-sec cursor-pointer">
              Buy online
            </a>
          </div>
        </div>
        {/*---------------Cart-3--------------------*/}
        <div
          className="category__card bg-greenColor flex py-3 rounded-lg overflow-hidden
  md:flex-1"
        >
          <div className="basis-1/3 relative">
            <img
              src="./img/beverage-2.png"
              alt="category image"
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">BEVERAGE</h4>
              <p className="text-xs">Fruit drinks are nonalcoholic </p>
            </div>
            <a href="#" className="text-secondaryColor cursor-pointer">
              Buy online
            </a>
          </div>
        </div>
      </div>
    </section>
    {/*-------------------Promo--------------------*/}
    <section id="promo">
      <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-raw">
        {/*------Cart-1-------------*/}
        <div className="promo__card-1 bg-primaryColorLight dark:bg-darkColorLight  flex flex-col p-5 rounded-lg md:flex-raw md:items-center lg:flex-row-reverse lg:flex-1">
          <img
            src="./img/promo-1.png"
            alt="promo image"
            className="w-40 mx-auto hover:animate-movingY"
          />
          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday promo</p>
            <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              iure rem numquam suscipit voluptates similique saepe nam
              architecto, cum libero fugit eligendi quis quo sit quasi corporis.
            </p>
            <a href="#" className="text-xs text-secondaryColor">
              Buy online
            </a>
          </div>
        </div>
        {/*----Cart-2----------------*/}
        <div className="promo__card-2 bg-primaryColorLight  dark:bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-raw md:items-center lg:flex-row-reverse lg:flex-1">
          <img
            src="./img/promo-2.png"
            alt="promo image"
            className="w-40 mx-auto
    hover:animate-movingY"
          />
          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday promo</p>
            <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              iure rem numquam suscipit voluptates similique saepe nam
              architecto, cum libero fugit eligendi quis quo sit quasi corporis.
            </p>
            <a href="#" className="text-xs text-secondaryColor">
              Buy online
            </a>
          </div>
        </div>
      </div>
    </section>
    {/*-------------------About--------------------*/}
    <section id="about">
      <div className="container flex flex-col gap-10 md:flex-row">
        <div className="about__img flex-1">
          <img src="./img/about.jpg" alt="about image" className="rounded-lg" />
        </div>
        <div className="about__content flex-1">
          <h2 className="section__title">
            FIND FOOD AND DRINKS, ALL-ONE PLACE FOR YOUR BEST TASTE.
          </h2>
          <div className="separator" />
          <p className="paragraph">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            deleniti fuga temporibus esse quibusdam officia aliquam aperiam ipsa
            officiis voluptate culpa eos repudiandae, voluptatibus
            necessitatibus accusamus reiciendis laboriosam. Illum, laudantium.
          </p>
          <ul className="grid grid-cols-2 py-5 space-y-1">
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor" />
              Best price
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor" />
              Fresh Ingredient
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor" />
              Best Service
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor" />
              Health Protocol
            </li>
          </ul>
          <a href="" className="btn btn-primary">
            About us
          </a>
        </div>
      </div>
    </section>
    {/*-------------------Menu--------------------*/}
    <section id="menu">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2>OUR BEST MENU</h2>
          <div className="separator" />
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            natus nesciunt sapiente fugiat, pariatur perferendis. Ducimus,
            voluptatem cumque.
          </p>
          <div className="tabs_wrap">
            <ul className="flex flex-wrap justify-center gap-3 py-10">
              <li
                data-tabs="all"
                className="btn bg-primaryColorLight dark:bg-darkColorLight active"
              >
                All
              </li>
              <li
                data-tabs="food"
                className="btn bg-primaryColorLight dark:bg-darkColorLight"
              >
                Food
              </li>
              <li
                data-tabs="snack"
                className="btn bg-primaryColorLight dark:bg-darkColorLight"
              >
                Snack
              </li>
              <li
                data-tabs="beverage"
                className="btn bg-primaryColorLight dark:bg-darkColorLight"
              >
                Beverage
              </li>
            </ul>
          </div>
        </div>
        <div className="menu__items">
          <ul className="grid grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* food */}
            <li className="item_wrap food">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/burger-1.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap food">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/burger-2.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap food">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/burger-3.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap food">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/burger-4.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap food">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/burger-5.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            {/* snack */}
            <li className="item_wrap snack">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/snack-1.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap snack">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/snack-2.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap snack">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor  rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/snack-3.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap snack">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/snack-4.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap snack">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/snack-5.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">REGULAR BEEF BURGER</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            {/* Beverage items */}
            <li className="item_wrap beverage">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/beverage-1.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">SWEET SMOOTHIE</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap beverage">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/beverage-2.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">SWEET SMOOTHIE</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap beverage">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/beverage-3.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">SWEET SMOOTHIE</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap beverage">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/beverage-4.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">SWEET SMOOTHIE</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
            <li className="item_wrap beverage">
              <div
                className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200
        lg:h-40"
              >
                <img
                  src="./img/beverage-5.png"
                  alt="food image"
                  className="w-40 hover:scale-110 ease-linear duration-200
          md:w-48 lg:w-24"
                />
              </div>
              <div className="pt-5">
                <div className="mb-2">
                  <h4 className="card__title">SWEET SMOOTHIE</h4>
                  <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <p className="text-secondaryColor">$42.00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/*-------------------Review--------------------*/}
    <section
      id="review"
      className="bg-primaryColorLight dark:bg-darkColorLight py-20"
    >
      <div className="customer__review container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title">CUSTOMER REVIEW</h2>
          <div className="separator" />
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            natus nesciunt sapiente fugiat, pariatur perferendis. Ducimus,
            voluptatem cumque.
          </p>
        </div>
        <div className="swiper py-10">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <div
                className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColorLight rounded-lg
        p-6"
              >
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  incidunt odit esse veritatis voluptate distinctio est! Nam?
                </p>
                <div className="flex items-center">
                  <img
                    src="./img/review-1.jpg"
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i
                    className="fa-solid fa-quote-right text-4xl text-secondaryColor
            ml-auto"
                  />
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div
                className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColorLight rounded-lg
        p-6"
              >
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  incidunt odit esse veritatis voluptate distinctio est! Nam?
                </p>
                <div className="flex items-center">
                  <img
                    src="./img/review-2.jpg"
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i
                    className="fa-solid fa-quote-right text-4xl text-secondaryColor
            ml-auto"
                  />
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div
                className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColorLight rounded-lg
        p-6"
              >
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  incidunt odit esse veritatis voluptate distinctio est! Nam?
                </p>
                <div className="flex items-center">
                  <img
                    src="./img/review-3.jpg"
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i
                    className="fa-solid fa-quote-right text-4xl text-secondaryColor
            ml-auto"
                  />
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div
                className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColorLight rounded-lg
        p-6"
              >
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  incidunt odit esse veritatis voluptate distinctio est! Nam?
                </p>
                <div className="flex items-center">
                  <img
                    src="./img/review-4.jpg"
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i
                    className="fa-solid fa-quote-right text-4xl text-secondaryColor
            ml-auto"
                  />
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div
                className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColorLight rounded-lg
        p-6"
              >
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  incidunt odit esse veritatis voluptate distinctio est! Nam?
                </p>
                <div className="flex items-center">
                  <img
                    src="./img/review-5.jpg"
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i
                    className="fa-solid fa-quote-right text-4xl text-secondaryColor
            ml-auto"
                  />
                </div>
              </div>
            </li>
          </ul>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
    {/*-------------------Contact--------------------*/}
    <section id="contact" className="bg-secondaryColor py-16">
      <div className="container flex flex-col gap-5 md:items-center md:flex-row">
        <div className="space-y-4 md:flex-1">
          <h2 className="section__title text-blackColor">
            GET EXCLUSIVE UPDATE
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:flex-1">
          <input
            type="email"
            placeholder="Email address"
            className="p-2 text-blackColor rounded-lg outline-none md:w-full"
          />
          <a
            href=""
            className="flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75"
          >
            <i className="fa-solid fa-paper-plane" />
            Subscribe
          </a>
        </div>
      </div>
    </section>
  </main>
  {/*----------------------Footer--------------------*/}
  <footer>
    <section className="footer">
      <div className="container">
        <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
          <li>
            <div className="space-y-3">
              <a href="" className="text-4xl font-oswald uppercase">
                Bur <span className="text-secondaryColor">ger</span>
              </a>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                laboriosam rerum at deleniti facilis dolorum necessitatibus
                minima.
              </p>
            </div>
          </li>
          <li>
            <h3 className="text-lg uppercase font-oswald">SUPPORT</h3>
            <div className="flex flex-col gap-3">
              <a href="" className="text-xs hover:text-secondaryColor">
                FAQ's
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Privacy
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Term &amp; Condition
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Contact
              </a>
            </div>
          </li>
          <li className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg uppercase font-oswald">Phone</h3>
              <p className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-phone text-lg text-secondaryColor" />
                +1 999 765 9980
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg uppercase font-oswald">email</h3>
              <p className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-envelope text-lg text-secondaryColor" />
                burger.info@email.com
              </p>
            </div>
          </li>
          <li className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg uppercase font-oswald">address</h3>
              <p className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-location-dot text-lg text-secondaryColor" />
                Address goes here
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg uppercase font-oswald">follow us</h3>
              <div className="space-x-3">
                <i className="fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200" />
                <i className="fa-brands fa-twitter text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200" />
                <i className="fa-brands fa-square-instagram text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200" />
              </div>
            </div>
          </li>
        </ul>
        <div className="flex flex-col items-center border-t border-primaryColorLight dark:border-darkColorLight py-5 md:flex-raw md:justify-between">
          <p className="paragraph">Burger Template Kit by light Code</p>
          <p className="paragraph">Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </section>
  </footer>
  {/*-------------------------ScrollUp----------------------*/}
  {/*-------------------------Swiper JS----------------------*/}
  {/*-------------------------Scroll Reveal----------------------*/}
  <a
    href="#"
    className="fixed right-4 bottom-4 bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full text-lg text-blackColor
  z-50 hover:-translate-y-1 ease-in duration-200"
    id="scroll-up"
  >
    <i className="fa-solid fa-arrow-up" />
  </a>
</>

    </>
  )
}

export default App
