import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './blog/categoryType'
import {postType} from './blog/postType'
import {authorType} from './blog/authorType'
import {pageType} from './webpage/pageType'
import {heroType} from './webpage/sections/heroType'
import {heroFormType} from './webpage/sections/heroFormType'
import {serviceType} from './webpage/sections/serviceType'
import {valueType} from './webpage/sections/valueType'
import {howToType} from './webpage/sections/howToType'
import {partnersBannerType} from './webpage/sections/partnersBannerType'
import {testimonialType} from './webpage/sections/testimonialType'
import {faqType} from './webpage/sections/faqType'
import {bigCardLeftType} from './webpage/sections/bigCardLeftType'
import {heroBigType} from './webpage/sections/heroBigType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, categoryType, postType, authorType, pageType, heroType, serviceType, valueType, howToType, heroFormType, heroBigType, partnersBannerType, testimonialType, faqType, bigCardLeftType],
}
