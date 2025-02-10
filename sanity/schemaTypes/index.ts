import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './blog/categoryType'
import {postType} from './blog/postType'
import {authorType} from './blog/authorType'
import {pageType} from './webpage/pageType'
import {heroType} from './webpage/sections/heroType'
import {serviceType} from './webpage/sections/serviceType'
import {valueType} from './webpage/sections/valueType'
import {howToType} from './webpage/sections/howToType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, categoryType, postType, authorType, pageType, heroType, serviceType, valueType, howToType],
}
