import type { Struct, Schema } from '@strapi/strapi';

export interface AtomsRwdImage extends Struct.ComponentSchema {
  collectionName: 'components_atoms_rwd_images';
  info: {
    displayName: 'RWD Image';
    icon: 'landscape';
  };
  attributes: {
    desktop: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AtomsPrice extends Struct.ComponentSchema {
  collectionName: 'components_atoms_prices';
  info: {
    displayName: 'Price';
    icon: 'priceTag';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    oldPrice: Schema.Attribute.Decimal;
    deliveryCost: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.rwd-image': AtomsRwdImage;
      'atoms.price': AtomsPrice;
    }
  }
}
