/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface SupplierDto {
  imageUrl: string;

  id?: number;
  firstName?: string;
  name?: string;
  lastName?: string;
  contactDetails?: string;
  adresse?: AdresseDto;
  status?: 'ACTIVER' | 'DEACTIVER';
  dateCreated?: string;
  creationDate?: number;
  imageFileName?: string;
}