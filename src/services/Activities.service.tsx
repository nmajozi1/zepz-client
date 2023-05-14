import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { url } from '../utils/activity-utils';

const createActivities = async () => {
  const { data } = await axios.post(url);
  return data;
}

const deleteActivities = async () => {
  const { data } = await axios.delete(url);
  return data;
}

const filterByType = async (type: string) => {
  const { data } = await axios.get(`${url}?type=${type}`);
  return data;
}

export const useCreateActivities = () => {
  const queryClient = useQueryClient();

  return useMutation(createActivities, {
    onSuccess: () => {
      queryClient.invalidateQueries(['activities']);
    },
    onError: (error: any) => {
      queryClient.setQueryData(['activities'], {
        error: error.message,
      });
    },
  })
}

export const useFetchActivities = () => {
  return useQuery(['activities'], async () => {
    const { data } = await axios.get(`${url}/list`);
    return data;
  },
  { refetchOnMount: false, refetchOnWindowFocus: false });
}

export const useDeleteAllActivities = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteActivities, {
    onSuccess: () => {
      queryClient.invalidateQueries(['activities']);
    },
    onError: (error: any) => {
      queryClient.setQueryData(['activities'], {
        error: error.message,
      });
    },
  })
}

export const useFilterByType = () => {
  const queryClient = useQueryClient();

  return useMutation(filterByType, {
    onSuccess: (data) => {
      queryClient.setQueryData(['activities'], data);
    },
    onError: (error: any) => {
      queryClient.setQueryData(['activities'], {
        error: error.response.data,
      });
    },
  });
};
