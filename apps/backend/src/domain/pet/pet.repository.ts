import { Pet } from './pet';

export const PET_REPOSITORY = 'PET_REPOSITORY';

export default interface PetRepository {
  // getById(id: string): Pet;
  // remove(id: string): void;
  store(pet: Pet): Promise<{ id: string }>;
}
