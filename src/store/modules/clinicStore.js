import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getClinicList } from '@/service/modules/common';

export const fetchClinicList = createAsyncThunk(
  'clinicList',
  async (_, { dispatch }) => {
    const res = await getClinicList({
      pageNum: 1,
      pageSize: 10,
      longitude: null,
      latitude: null,
      orderByColumn: 'distance',
      isAsc: 'asc'
    });
    dispatch(setClinicList(res));
  }
);

const clinicSlice = createSlice({
  name: 'clinic',
  initialState: {
    clinicList: []
  },
  reducers: {
    setClinicList(state, { payload }) {
      state.clinicList = payload;
    }
  }
});

export const { setClinicList } = clinicSlice.actions;
export default clinicSlice.reducer;
