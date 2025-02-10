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

      // Sezione "Pages"
      S.listItem().title('Pages').child(S.documentTypeList('page').title('Pages')),

      // Sezione "Components"
      S.listItem()
        .title('Sections')
        .child(
          S.list()
            .title('Sections')
            .items([
              S.documentTypeListItem('hero').title('Hero'),
              S.documentTypeListItem('heroForm').title('Hero Form'),
              S.documentTypeListItem('service').title('service'),
              S.documentTypeListItem('value').title('value'),
              S.documentTypeListItem('howTo').title('Hot To'),
              S.documentTypeListItem('partnersBanner').title('Partners Banner'),
              S.documentTypeListItem('testimonial').title('Testimonial'),
            ]),
        ),
    ])
