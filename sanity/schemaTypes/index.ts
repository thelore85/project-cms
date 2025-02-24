import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './blog/categoryType'
import {postType} from './blog/postType'
import {authorType} from './blog/authorType'
import {pageType} from './webpage/pageType'
import {heroType} from './webpage/sections/hero/heroType'
import {heroFormType} from './webpage/sections/hero/heroFormType'
import {howToType} from './webpage/sections/howToType'
import {logoStripType} from './webpage/sections/interactive/logoStripType'
import {cardSliderType} from './webpage/sections/cards/cardSliderType'
import {faqType} from './webpage/sections/interactive/faqType'
import {bigCardLeftType} from './webpage/sections/cards/bigCardLeftType'
import {heroBigType} from './webpage/sections/hero/heroBigType'
import {cardFeatureType} from './webpage/sections/cards/cardFeatureType'
import {paragraphType} from './webpage/sections/mainContent/paragraphType'
import {paragraphImageRight} from './webpage/sections/mainContent/paragraphImageRightType'
import {pageTitleType} from './webpage/sections/mainContent/pageTitleType'
import {cardParagraphType} from './webpage/sections/cards/cardParagraph'
import {tabCardType} from './webpage/sections/interactive/tabCard'

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
    paragraphType,
    paragraphImageRight,
    pageTitleType,
    cardParagraphType,
    tabCardType,
  ],
}
