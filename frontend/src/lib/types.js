import { shape, string, bool, number, array, arrayOf } from 'prop-types';

export const eventType = shape({
  date: string,
  description: string,
  hasPassed: bool,
  id: number,
  meetup_url: string,
  photos: array,
  place_city: string,
  place_number: string,
  place_street: string,
  sponsors: array,
  talks: array,
  time: string,
  title: string,
});

export const materialType = shape({
  id: number,
  name: string,
  file: string,
  is_active: bool,
});

export const photoType = shape({
  id: number,
  url: string,
});

export const talkType = shape({
  id: number,
  name: string,
  speaker: string,
  language: string,
  language_display: string,
  level: string,
  level_display: string,
  description: string,
  material: arrayOf(materialType),
  is_active: bool,
});

const paramType = shape({
  id: string,
});

export const matchType = shape({
  isExact: bool,
  path: string,
  url: string,
  params: paramType,
});
