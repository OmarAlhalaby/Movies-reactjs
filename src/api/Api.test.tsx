import axios from 'axios';
import 'regenerator-runtime/runtime'
import { getMovies, getDetails } from './Api';

jest.mock('axios');
const mock = jest.spyOn(axios, 'get');
describe('getMovies', () => {
  it('fetches successfully data from an API', async () => {
    const data = {};
    mock.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getMovies('release_date.desc', 1)).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const error = 'Network Error';

    mock.mockImplementationOnce(() =>
      Promise.reject(new Error(error)),
    );

    await expect(getMovies('release_date.desc', 1)).rejects.toThrow(error);
  });
});

describe('getDetails', () => {
  it('fetches successfully data from an API', async () => {
    const data = {};
    mock.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getDetails('328111')).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const error = 'Network Error';

    mock.mockImplementationOnce(() =>
      Promise.reject(new Error(error)),
    );

    await expect(getDetails('328111')).rejects.toThrow(error);
  });
});