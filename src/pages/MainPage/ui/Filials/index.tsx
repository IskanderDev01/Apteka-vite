import Slider from "react-slick";
import Apteka from "../../../../shared/assets/ajiniazAptek.jpg";

interface SlideProps {
  image: string | undefined;
  address: string;
  phone: string;
}
const slides: SlideProps[] = [
  {
    image: Apteka,
    address: "Адрес: ХОДЖЕЙЛИ АЖИНИЯЗ КАРАКАЛПАК",
    phone: "Телефон номер: +998913804293",
  },
  {
    image: Apteka,
    address: "Адрес: 26-МКР АЖИНИЯЗ КАРАКАЛПАК",
    phone: "Телефон номер: +998913874949 ",
  },
  {
    image: Apteka,
    address: "Адрес: Ходжейли Гор. Больница AJQ",
    phone: "Телефон номер: +998907064002 ",
  },
  {
    image: Apteka,
    address: "Адрес: НОКИС ОНКОЛОГИЯ БОЛЬНИЦА ",
    phone: "Телефон номер: +998907242743",
  },
  {
    image: Apteka,
    address: "Адрес: МАТЕКЕ ЖУМАНАЗАРОВ",
    phone: "Телефон номер: +998913840927 ",
  },
  {
    image: Apteka,
    address: "Адрес: Чимбай Ажинияз Каракалпак",
    phone: "Телефон номер: +998905770106",
  },
  {
    image: Apteka,
    address: "Адрес: Ажинияз Орайлык Базар",
    phone: "Телефон номер: +998956097787",
  },
  {
    image: Apteka,
    address: "Адрес: ЭКСТРЕННЫЙ БОЛЬНИЦА",
    phone: "Телефон номер: +998910959393",
  },
  {
    image: Apteka,
    address: "Адрес: Герпиш Завод Санатория",
    phone: "Телефон номер: +998991807115",
  },
  {
    image: Apteka,
    address: "Адрес: РЕС.ДЕТСКИЙ AJQ",
    phone: "Телефон номер: +998913043403",
  },
  {
    image: Apteka,
    address: "Адрес: Кунград Ажинияз Каракалпак",
    phone: "Телефон номер: +998885004488",
  },
  {
    image: Apteka,
    address: "Адрес: ЭНДОКРИНОЛОГИЯ АЖИНИЯЗ КАРАКАЛПАК",
    phone: "Телефон номер: +998907014123 ",
  },
  {
    image: Apteka,
    address: "Адрес: КАРДИОЛОГИЯ АЖИНИЯЗ КАРАКАЛПАК",
    phone: "Телефон номер: +998907148929 ",
  },
  {
    image: Apteka,
    address: "Адрес: Исеним Дариханасы",
    phone: "Телефон номер: +998994532866 ",
  },
  {
    image: Apteka,
    address: "Адрес: Нокис район Ажиняиз Каракалпак",
    phone: "Телефон номер: +998913728397 ",
  },
];
export const Filials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto max-w-screen-xl pb-20 px-4">
      <div className="text-center text-5xl pb-10 font-medium">Наши филиалы</div>
      <div className="relative py-5">
        <Slider {...settings} arrows={false} className="relative">
          {slides.map((item, index) => (
            <div key={index} className="px-2 pb-10">
              <div className="relative overflow-hidden">
                <img
                  src={item?.image}
                  alt={`Филиал ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <div className="text-xl font-medium">{item.address}</div>
                  <div className="text-gray-200">{item.phone}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
