import li4050401 from '../images/products/Ex-Rental & Clearance/li405040-2.jpg';
import li4050402 from '../images/products/Ex-Rental & Clearance/li405040-2.jpg';
import li4050403 from '../images/products/Ex-Rental & Clearance/li405040-3.jpg';
import cr350944781 from '../images/products/Ex-Rental & Clearance/35094478-1.jpg';
import cr350944782 from '../images/products/Ex-Rental & Clearance/35094478-2.jpg';
import cr350944783 from '../images/products/Ex-Rental & Clearance/35094478-3.jpg';
import bonnetNeve from '../images/products/Ex-Rental & Clearance/bonnet-neve.jpg';
import criocabin from '../images/products/Ex-Rental & Clearance/CRIOCABIN.jpg'
import specSheet from '../images/products/Ex-Rental & Clearance/Spec-Sheet.pdf'

const pro1 = {
  id: 1,
  logo:bonnetNeve,
  pic: [li4050401,li4050402,li4050403],
  name: "bonnet neve onwave 2500 open display chiller",
  buy: [6500.00,'.00'],
  weeklyRent: [78.00,'.81'],
  path:'bonnet-neve-onwave-2500-open-display-chiller-class-3h-li405040',
  rrp: '17,990.00',
  dimension:'2560 x 885 x 2000',
  weight:'460.000000',
  manufacturedIn:'France',
  pdf: specSheet,
};

const pro2 = {
  id: 2,
  logo:criocabin,
  pic: [cr350944781,cr350944782,cr350944783],
  name: "criocabin ethos 730d semi vertical open display chiller",
  buy: [7500.00,'.00'],
  weeklyRent: [90.93,'.93'],
  path:'criocabin-ethos-730d-semi-vertical-open-display-chiller-35094478',
  rrp: '12,990.00',
  dimension:'1875 x 700 x 1350',
  weight:'170.000000',
  manufacturedIn:'Italy',
  pdf: specSheet,
};

export const exRentalProducts = [
  pro1,
  pro2,
  pro1,
  pro2,
  pro1,
  pro1,
  pro2,
  pro1,
  pro2,
  pro1,
  pro1,
  pro2,
  pro1,
  pro2,
  pro1,
  pro1,
  pro2,
  pro1,
  pro2,
  pro1,
  pro1,
  pro2,
  pro1,
  pro2,
  pro1,
];