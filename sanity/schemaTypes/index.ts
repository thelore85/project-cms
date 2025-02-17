import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './blog/categoryType'
import {postType} from './blog/postType'
import {authorType} from './blog/authorType'
import {pageType} from './webpage/pageType'
import {heroType} from './webpage/sections/heroType'
import {heroFormType} from './webpage/sections/heroFormType'

import {howToType} from './webpage/sections/howToType'
import {logoStripType} from './webpage/sections/logoStripType'
import {cardSliderType} from './webpage/sections/cardSliderType'
import {faqType} from './webpage/sections/faqType'
import {bigCardLeftType} from './webpage/sections/bigCardLeftType'
import {heroBigType} from './webpage/sections/heroBigType'
import {cardFeatureType} from './webpage/sections/cardFeatureType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    heroType,
    heroFormType,
    heroBigType,
    blockContentType,
    categoryType,
    postType,
    authorType,
    pageType,
    cardFeatureType,
    howToType,
    logoStripType,
    cardSliderType,
    faqType,
    bigCardLeftType,
  ],
}
