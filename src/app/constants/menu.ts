import { environment } from '../../environments/environment';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}
const data: IMenuItem[] = [
  {
    id: 'project-dashboard',
    icon: 'iconsminds-books',
    label: 'menu.project-dashboard',
    to: `/project-dashboard`
  },
  {
    id: 'reading-lists',
    icon: 'iconsminds-check',
    label: 'menu.reading-lists',
    to: `/reading-lists`
  }
];
export default data;
