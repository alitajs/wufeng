import AV from './AV';
import type { GetPageProps } from './types';

const getPage = ({ id }: GetPageProps) => {
  const query = new AV.Query('Page');
  console.log(id);
  query.equalTo('id', id);
  return query.find();
};

export default getPage;
