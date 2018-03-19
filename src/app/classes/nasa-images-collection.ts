import {NasaImageItem} from './nasa-image-item';
import {NasaPageLink} from './nasa-page-link';
import {NasaPageMetadata} from './nasa-page-metadata';

export class NasaImagesCollection {
  href: string;
  items: NasaImageItem[];
  links: NasaPageLink[];
  metadata: NasaPageMetadata;
  version: string;
}
