import {AiFillDatabase} from 'react-icons/ai'
import {FaHome} from 'react-icons/fa'
import {FiSliders} from 'react-icons/fi'
import {SiAboutdotme} from 'react-icons/si'

export enum TypeGroup {
  GROUP_REQUIRED = 'group_required',
  GROUP_CONTENT = 'group_content',
  GROUP_HOME_SECTION = 'group_home_section',
  GROUP_ABOUTUS_SECTION = 'group_about_section',
}

export default [
  {
    name: TypeGroup.GROUP_REQUIRED,
    title: TypeGroup.GROUP_REQUIRED,
    icon: FiSliders,
  },
  {
    name: TypeGroup.GROUP_CONTENT,
    title: TypeGroup.GROUP_CONTENT,
    icon: AiFillDatabase,
  },
  {
    name: TypeGroup.GROUP_HOME_SECTION,
    title: TypeGroup.GROUP_HOME_SECTION,
    icon: FaHome,
  },
  {
    name: TypeGroup.GROUP_ABOUTUS_SECTION,
    title: TypeGroup.GROUP_ABOUTUS_SECTION,
    icon: SiAboutdotme,
  },
]
