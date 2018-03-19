import {NasaImageData} from './nasa-image-data';
import {NasaPageLink} from './nasa-page-link';

export class NasaImageItem {
  public data: NasaImageData[];
  public href: string;
  links: NasaPageLink[];
}
