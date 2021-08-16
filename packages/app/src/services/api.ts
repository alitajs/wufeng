import { request } from 'alita';

export async function gPage(params: any): Promise<any> {
  return request('/page', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
