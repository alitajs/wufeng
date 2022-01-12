import AV from './AV';
import type { SavePageProps } from './types';

const savePage = ({ id, page }: SavePageProps) => {
  const PageObject = AV.Object.extend('Page');
  const pageObj = new PageObject();
  pageObj.set('id', id);
  pageObj.set('content', JSON.stringify(page));
  console.log(JSON.stringify(page));
  return pageObj.save();
};

export default savePage;
