import type { SchemaTypeDefinition } from 'sanity'
import { settings } from './settings'
import { homePage } from './homePage'
import { aboutPage } from './aboutPage'
import { service } from './service'
import { project } from './project'
import { testimonial } from './testimonial'
import { teamMember } from './teamMember'
import { post } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, homePage, aboutPage, service, project, testimonial, teamMember, post],
}
