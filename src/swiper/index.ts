import _Swiper from './swiper';
import _SwiperItem from './swiper-item';
import withInstall from '../utils/withInstall';
import { TdSwiperProps } from './type';

export * from './type';
export type SwiperProps = TdSwiperProps;

export const Swiper = withInstall('Swiper', _Swiper);
export const SwiperItem = withInstall('SwiperItem', _SwiperItem);
export default Swiper;