import {NasaImageData} from './nasa-image-data';
import {NasaPageLink} from './nasa-page-link';

export interface NasaImageItem {
  data: NasaImageData[];
  href: string;
  links: NasaPageLink[];
}
