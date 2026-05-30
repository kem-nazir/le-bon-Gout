import { config, fields, collection, singleton } from '@keystatic/core';

const storage = import.meta.env.PROD
  ? {
      kind: 'github' as const,
      repo: `${import.meta.env.PUBLIC_GITHUB_OWNER}/${import.meta.env.PUBLIC_GITHUB_REPO}`,
    }
  : {
      kind: 'local' as const,
    };

export default config({
  storage,
  collections: {
    projects: collection({
      label: 'Projets',
      slugField: 'titre',
      path: 'src/content/projects/*',
      format: { contentField: 'contenu' },
      schema: {
        titre: fields.slug({ name: { label: 'Titre du projet' } }),
        image: fields.image({
          label: "Capture d'écran",
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        description: fields.text({
          label: 'Description courte',
          multiline: true,
        }),
        technologies: fields.array(
          fields.text({ label: 'Technologie' }),
          {
            label: 'Technologies utilisées',
            itemLabel: (props) => props.value || 'Technologie',
          }
        ),
        url: fields.url({ label: 'Lien du site' }),
        categorie: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Site Vitrine', value: 'vitrine' },
            { label: 'E-commerce', value: 'ecommerce' },
            { label: 'Site One Page', value: 'onepage' },
            { label: 'Application Web', value: 'webapp' },
          ],
          defaultValue: 'vitrine',
        }),
        contenu: fields.markdoc({
          label: 'Contenu détaillé',
          options: {
            image: {
              directory: 'public/images/projects',
              publicPath: '/images/projects/',
            },
          },
        }),
      },
    }),
    blog: collection({
      label: 'Blog',
      slugField: 'titre',
      path: 'src/content/posts/*',
      format: { contentField: 'contenu' },
      schema: {
        titre: fields.slug({ name: { label: "Titre de l'article" } }),
        date: fields.date({ label: 'Date de publication' }),
        couverture: fields.image({
          label: 'Image de couverture',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        categorie: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Astuces', value: 'astuces' },
            { label: 'Tendance', value: 'tendance' },
            { label: 'Guide', value: 'guide' },
            { label: 'Client', value: 'client' },
          ],
          defaultValue: 'astuces',
        }),
        extrait: fields.text({
          label: 'Extrait (accroche)',
          multiline: true,
        }),
        contenu: fields.markdoc({
          label: "Contenu de l'article",
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog/',
            },
          },
        }),
      },
    }),
  },
  singletons: {
    profil: singleton({
      label: 'Profil & Infos',
      path: 'src/content/profil',
      format: 'json',
      schema: {
        nom: fields.text({ label: 'Nom complet' }),
        email: fields.text({ label: 'Email professionnel' }),
        telephone: fields.text({ label: 'Téléphone' }),
        slogan: fields.text({ label: "Slogan page d'accueil" }),
        photo: fields.image({
          label: 'Photo de profil',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        reseaux: fields.object({
          github: fields.url({ label: 'GitHub' }),
          linkedin: fields.url({ label: 'LinkedIn' }),
          twitter: fields.url({ label: 'Twitter / X' }),
          youtube: fields.url({ label: 'YouTube' }),
        }),
        a_propos: fields.markdoc({
          label: 'À propos de moi',
          options: {
            image: {
              directory: 'public/images',
              publicPath: '/images/',
            },
          },
        }),
        competences: fields.array(
          fields.object({
            nom: fields.text({ label: 'Nom de la compétence' }),
            niveau: fields.integer({
              label: 'Niveau (0-100)',
              defaultValue: 50,
            }),
            icone: fields.text({ label: 'Icône (emoji ou classe CSS)' }),
          }),
          {
            label: 'Compétences',
            itemLabel: (props) => props.fields.nom.value || 'Compétence',
          }
        ),
      },
    }),
  },
});
