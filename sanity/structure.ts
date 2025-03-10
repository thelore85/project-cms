import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      //
      // // Sezione "Blog"
      // S.listItem()
      //   .title('Blog')
      //   .child(
      //     S.list()
      //       .title('Blog')
      //       .items([S.documentTypeListItem('post').title('Posts'), S.documentTypeListItem('category').title('Categories'), S.documentTypeListItem('author').title('Authors')]),
      //   ),

      // // Sezione "Blog" with language filter
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              // Sezione per le categorie
              S.documentTypeListItem('category').title('Categories'),

              // Sezione per gli autori
              S.documentTypeListItem('author').title('Authors'),

              // Sezione per la lingua (Blog suddiviso per lingua)
              S.listItem()
                .title('Post')
                .child(
                  S.list()
                    .title('Language')
                    .items([
                      // Sezione per la lingua inglese
                      S.listItem().title('English').child(S.documentList().filter('_type == "post" && language == "en"').title('English Posts')),

                      // Sezione per la lingua italiana
                      S.listItem().title('Italian').child(S.documentList().filter('_type == "post" && language == "it"').title('Italian Posts')),

                      // Sezione per la lingua spagnola
                      S.listItem().title('Spanish').child(S.documentList().filter('_type == "post" && language == "es"').title('Spanish Posts')),
                      // Sezione per la lingua spagnola
                      S.listItem().title('Others').child(S.documentList().filter('_type == "post" && language == ""').title('Spanish Posts')),
                    ]),
                ),
            ]),
        ),

      /////////////////////////////////////////////
      // Sezione "Pages"
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Language')
            .items([
              S.listItem().title('English').child(S.documentList().filter('_type == "page" && language == "en"').title('English Pages')),
              S.listItem().title('Italian').child(S.documentList().filter('_type == "page" && language == "it"').title('Italian Pages')),
              S.listItem().title('Spanish').child(S.documentList().filter('_type == "page" && language == "es"').title('Spanish Pages')),
              S.listItem().title('Others').child(S.documentList().filter('_type == "page" && !defined(language)').title('Unassigned Language Pages')),
            ]),
        ),

      // Sezione "Components"
      S.listItem()
        .title('Sections')
        .child(
          S.list()
            .title('Sections')
            .items([
              S.listItem()
                .title('Hero')
                .child(
                  S.list()
                    .title('Hero')
                    .items([S.documentTypeListItem('hero').title('Hero'), S.documentTypeListItem('heroBig').title('Hero Big')]),
                ),
              S.listItem()
                .title('Main Content')
                .child(
                  S.list()
                    .title('Main Content')
                    .items([
                      S.documentTypeListItem('paragraph').title('Paragraph Simple'),
                      S.documentTypeListItem('paragraphImageRight').title('Paragraph Image Right'),
                      S.documentTypeListItem('pageTitle').title('Page Title'),
                    ]),
                ),
              S.listItem()
                .title('Interactive Components')
                .child(
                  S.list()
                    .title('Interactive Comps.')
                    .items([
                      S.documentTypeListItem('logoStrip').title('Logo Strip'),
                      S.documentTypeListItem('faq').title('F.A.Q.'),
                      S.documentTypeListItem('tabCard').title('Tab Card'),
                    ]),
                ),
              S.listItem()
                .title('Cards')
                .child(
                  S.list()
                    .title('Cards')
                    .items([
                      S.documentTypeListItem('howTo').title('How To'),
                      S.documentTypeListItem('cardFeature').title('Feature Cards'),
                      S.documentTypeListItem('cardSlider').title('Slider Cards'),
                      S.documentTypeListItem('bigCardLeft').title('Big-Card Left'),
                      S.documentTypeListItem('cardParagraph').title('Paragraph Card'),
                    ]),
                ),
            ]),
        ),
    ])
