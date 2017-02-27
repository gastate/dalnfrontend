import { RightsProfile } from './rights';
import { DescriptionProfile } from './description';

export interface AppStore {
  rights: RightsProfile,
  description: DescriptionProfile
}
