import {FiAward} from 'react-icons/fi'
import {StructureResolver} from 'sanity/structure'
import {supportedYears} from '../constants/constant'

export const Customstructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Custom document-level translation structure
      S.listItem()
        .title('select a date')
        .icon(FiAward)
        .child(
          S.list()
            .title('years')
            .items([
              ...supportedYears.map((year) =>
                S.listItem()
                  .title(`Year (${year.id.toLocaleUpperCase()})`)
                  .icon(FiAward)
                  .child(
                    S.documentList()
                      .id(year.id)
                      .title(`${year.title} year`)
                      // .title(`${year.title} year`)
                      .filter('_type == "page_tree" && year == $year')
                      .params({year: year.id}),
                    // .filter('_type == "labelGroup"'),
                  ),
              ),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('page_tree').title('All page'),
    ])
