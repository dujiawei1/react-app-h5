import { createSlice } from '@reduxjs/toolkit';
import { getClinicList } from '@/service/modules/common';

const clinicStore = createSlice({
  name: 'clinicStore',
  initialState: {
    clinicList: ''
  },
  reducers: {
    setClinicList: async (state) => {
      const res = await getClinicList({
        pageNum: 1,
        pageSize: 10,
        longitude: null,
        latitude: null,
        orderByColumn: 'distance',
        isAsc: 'asc'
      });
      state.clinicList = res;
    }
  }
});

export const { setClinicList } = clinicStore.actions;
export default clinicStore.reducer;
