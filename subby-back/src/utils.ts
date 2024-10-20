import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export const categoriesToAdd = [
  'Streaming',
  'Musique',
  'Énergie',
  'Divertissement',
  'Jeux Vidéo',
  'Logiciels',
  'Éducation',
  'Santé et Fitness',
  'Cloud',
  'Livraison',
  'Télécommunications',
  'Finance',
  'Productivité',
  'Vidéoconférence',
  'Sécurité',
  'Mode',
  'Voyage',
  'Automobile',
  'Assurance',
];
