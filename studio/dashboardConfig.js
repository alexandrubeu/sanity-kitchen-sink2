export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb56907b8216d49d9f0e430',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink2-studio',
                  apiId: 'a9e1a828-de4f-4866-b381-1e977f3fb892'
                },
                {
                  buildHookId: '5eb5690727bbbbbdf8bb1d69',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink2',
                  apiId: '8b04b695-4b9a-480a-ba88-25b61eddc681'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexandrubeu/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
