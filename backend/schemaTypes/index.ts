import pageTree from '../schemas/document/page-tree'
import aboutUs, { aboutUsSection } from '../schemas/document/sections/aboutUs-section'
import home, { homeSection } from '../schemas/document/sections/home-section'
import listSection from '../schemas/document/sections/list_section'
import localeImageArray from '../schemas/objects/localeImageArray'
import portableText from '../schemas/objects/portableText'

export const schemaTypes = [
  //generic type
  pageTree,

  //document
  homeSection,
  aboutUsSection,
  listSection,

  // object
  portableText,
  localeImageArray,
]
