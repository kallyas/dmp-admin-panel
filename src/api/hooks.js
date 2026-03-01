import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from './client';

// Auth / Login
export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials) => {
      const response = await apiClient.post('/admin/login', credentials);
      return response.data;
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient.post('/logout');
      return response.data;
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
};

export const useSessions = () => {
  return useQuery({
    queryKey: ['sessions'],
    queryFn: async () => {
      const response = await apiClient.get('/admin/sessions');
      return response.data;
    },
  });
};

// Vendors
export const useVendors = () => {
  return useQuery({
    queryKey: ['vendors'],
    queryFn: async () => {
      const response = await apiClient.get('/v1.0/vendors');
      return response.data;
    },
  });
};

export const useCreateVendor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.post('/v1.0/vendor/create', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vendors'] });
    },
  });
};

// Staff
export const useStaff = () => {
  return useQuery({
    queryKey: ['staff'],
    queryFn: async () => {
      const response = await apiClient.get('/v1.0/users');
      return response.data;
    },
  });
};

export const useStaffById = (id) => {
  return useQuery({
    queryKey: ['staff', id],
    queryFn: async () => {
      const response = await apiClient.get(`/v1.0/user/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useCreateStaff = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.post('/v1.0/user/create', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['staff'] });
    },
  });
};

export const useUpdateStaff = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.put(`/v1.0/user/${data.id}/update`, data);
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['staff'] });
      queryClient.invalidateQueries({ queryKey: ['staff', variables.id] });
    },
  });
};

export const useDeleteStaff = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const response = await apiClient.delete(`/v1.0/user/${id}/delete`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['staff'] });
    },
  });
};

// Routes
export const useRoutes = () => {
  return useQuery({
    queryKey: ['routes'],
    queryFn: async () => {
      const response = await apiClient.get('/v1.0/routes');
      return response.data;
    },
  });
};

export const useCreateRoute = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.post('/v1.0/route/create', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routes'] });
    },
  });
};

// Trips
export const useTrips = () => {
  return useQuery({
    queryKey: ['trips'],
    queryFn: async () => {
      const response = await apiClient.get('/v1.0/trips');
      return response.data;
    },
  });
};
